package com.github.sneakerstore.auth;

import com.github.sneakerstore.config.JwtService;
import com.github.sneakerstore.user.User;
import com.github.sneakerstore.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Transactional
    public ResponseEntity<String> register(RegisterRequest request) {
        User user = repository.findByEmail(request.getEmail()).orElse(null);

        if (user == null) {
            User newUser = new User(
                    request.getUsername(),
                    request.getEmail(),
                    passwordEncoder.encode(request.getPassword()),
                    User.Role.USER,
                    List.of()
            );
            repository.save(newUser);
            return new ResponseEntity<>("Account created.", HttpStatus.OK);
        }
        throw new ResponseStatusException(HttpStatus.CONFLICT, "User with this email already exists.");
    }

    @Transactional
    public ResponseEntity<Object> authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        String userId = String.valueOf(user.getId());

        ResponseCookie jwtCookie = ResponseCookie.from("jwt-token", jwtToken)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(1200)
                .domain("localhost")
                .sameSite("strict")
                .build();

        ResponseCookie isJwtPresentCookie = ResponseCookie.from("jwt-present", "present")
                .path("/")
                .maxAge(1200)
                .domain("localhost")
                .sameSite("strict")
                .build();

        ResponseCookie userCookie = ResponseCookie.from("user-id", userId)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(1200)
                .domain("localhost")
                .sameSite("strict")
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                .header(HttpHeaders.SET_COOKIE, userCookie.toString())
                .header(HttpHeaders.SET_COOKIE, isJwtPresentCookie.toString())
                .build();
    }

    @Transactional
    public ResponseEntity<Object> logout() {
        ResponseCookie deleteJwtCookie = ResponseCookie.from("jwt-token", null)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(0)
                .domain("localhost")
                .sameSite("strict")
                .build();

        ResponseCookie deletePresentJwtCookie = ResponseCookie.from("jwt-present", null)
                .path("/")
                .maxAge(0)
                .domain("localhost")
                .sameSite("strict")
                .build();

        ResponseCookie deleteUserCookie = ResponseCookie.from("user-id", null)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(0)
                .domain("localhost")
                .sameSite("strict")
                .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, deleteJwtCookie.toString())
                .header(HttpHeaders.SET_COOKIE, deletePresentJwtCookie.toString())
                .header(HttpHeaders.SET_COOKIE, deleteUserCookie.toString())
                .build();
    }
}
