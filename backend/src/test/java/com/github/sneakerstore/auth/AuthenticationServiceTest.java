package com.github.sneakerstore.auth;

import com.github.sneakerstore.config.JwtService;
import com.github.sneakerstore.user.User;
import com.github.sneakerstore.user.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class AuthenticationServiceTest {
    @Mock
    private UserRepository repository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private JwtService jwtService;
    @Mock
    private AuthenticationManager authenticationManager;

    @InjectMocks
    private AuthenticationService authenticationService;

    @Test
    @DisplayName("should register a new user")
    public void testRegister() {
        RegisterRequest registerRequest = new RegisterRequest("username", "test@example.com", "password");
        when(repository.findByEmail(registerRequest.getEmail())).thenReturn(Optional.empty());

        ResponseEntity<String> response = authenticationService.register(registerRequest);

        assertNotNull(response);
        assertEquals("Account created.", response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(repository, times(1)).save(any(User.class));
    }

    @Test
    @DisplayName("should throw exception when registering with an existing email")
    public void testRegister_existingEmail() {
        RegisterRequest registerRequest = new RegisterRequest("username", "test@example.com", "password");
        when(repository.findByEmail(registerRequest.getEmail())).thenReturn(Optional.of(new User()));

        assertThrows(ResponseStatusException.class, () -> {
            authenticationService.register(registerRequest);
        });

        verify(repository, times(0)).save(any(User.class));
    }

    @Test
    @DisplayName("should authenticate user and return JWT token")
    public void testAuthenticate() {
        AuthenticationRequest authenticationRequest = new AuthenticationRequest("test@example.com", "password");
        User user = new User();
        String jwtToken = "valid-jwt";

        when(repository.findByEmail(authenticationRequest.getEmail())).thenReturn(Optional.of(user));
        when(jwtService.generateToken(user)).thenReturn(jwtToken);

        ResponseEntity<Object> response = authenticationService.authenticate(authenticationRequest);

        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getHeaders().containsKey("Set-Cookie"));
    }

    @Test
    @DisplayName("should logout user and clear cookies")
    public void testLogout() {
        ResponseEntity<Object> response = authenticationService.logout();

        assertNotNull(response);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getHeaders().containsKey("Set-Cookie"));
    }
}
