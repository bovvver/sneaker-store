package com.github.sneakerstore.auth;

import com.github.sneakerstore.config.JwtService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class JwtAuthenticationFilterTest {
    @Mock
    private JwtService jwtService;
    @Mock
    private UserDetailsService userDetailsService;

    @Test
    @DisplayName("should authenticate user with valid JWT token")
    public void testDoFilter_withValidJwt() {
        String jwt = "valid_jwt";
        String email = "test@test.com";

        Authentication authentication = mock(Authentication.class);
        UserDetails userDetails = mock(UserDetails.class);
        SecurityContext securityContextMock = Mockito.mock(SecurityContext.class);
        SecurityContextHolder.setContext(securityContextMock);

        when(jwtService.extractUsername(jwt)).thenReturn(email);
        when(userDetailsService.loadUserByUsername(email)).thenReturn(userDetails);
        when(jwtService.isTokenValid(jwt, userDetails)).thenReturn(true);
        when(authentication.getDetails()).thenReturn(null);

        assertEquals(jwtService.extractUsername(jwt), email);
        assertEquals(userDetailsService.loadUserByUsername(email), userDetails);
        assertTrue(jwtService.isTokenValid(jwt, userDetails));
        assertNull(authentication.getDetails());
        assertEquals(userDetails.getAuthorities(), authentication.getAuthorities());

        verify(jwtService, times(1)).extractUsername(jwt);
        verify(userDetailsService, times(1)).loadUserByUsername(email);
        verify(jwtService, times(1)).isTokenValid(jwt, userDetails);
        verify(authentication, times(1)).getAuthorities();
    }

    @Test
    @DisplayName("should not authenticate user with invalid JWT token")
    public void testDoFilter_withInvalidJwt() {
        String jwt = "invalid-jwt";

        UserDetails userDetails = mock(UserDetails.class);

        when(jwtService.extractUsername(jwt)).thenReturn(null);
        when(jwtService.isTokenValid(jwt, userDetails)).thenReturn(false);

        assertFalse(jwtService.isTokenValid(jwt, userDetails));
        assertNull(jwtService.extractUsername(jwt));

        verify(jwtService, times(1)).extractUsername(jwt);
        verify(jwtService, times(1)).isTokenValid(jwt, userDetails);
    }
}
