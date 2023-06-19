package com.github.sneakerstore.auth;

import com.github.sneakerstore.user.User;
import com.github.sneakerstore.user.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ApplicationConfigTest {
    @Mock
    private UserRepository repository;

    @Test
    @DisplayName("userDetailsService test")
    public void testUserDetailsService() {
        String username = "test";
        User user = new User();
        user.setEmail(username);
        when(repository.findByEmail(username)).thenReturn(Optional.of(user));

        Optional<User> userDetails = repository.findByEmail(username);

        assertNotNull(userDetails);
        assertEquals(username, userDetails.get().getUsername());
        verify(repository, times(1)).findByEmail(username);
    }

    @Test
    @DisplayName("userDetailsService test with non existing user")
    public void testUserDetailsService_nonExistingUser() {
        String username = "test";
        User user = new User();
        user.setEmail(username);
        when(repository.findByEmail(username)).thenThrow(new UsernameNotFoundException("User not found"));

        assertThrows(UsernameNotFoundException.class, () -> {
            repository.findByEmail(username);
        });

        verify(repository, times(1)).findByEmail(username);
    }

    @Test
    @DisplayName("test passwordEncoder")
    public void testPasswordEncoder() {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        assertNotNull(passwordEncoder);
        assertTrue(passwordEncoder.matches("password", passwordEncoder.encode("password")));
    }
}
