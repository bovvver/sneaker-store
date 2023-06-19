package com.github.sneakerstore.integration.controllers;

import com.github.sneakerstore.SneakerStoreApplication;
import com.github.sneakerstore.config.JwtService;
import jakarta.servlet.http.Cookie;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ContextConfiguration(classes = {SneakerStoreApplication.class})
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private JwtService jwtService;

    @Test
    @DisplayName("Adding to and clearing cart - integration test")
    public void test_adding_to_and_clearing_cart() throws Exception {
        Cookie userCookie = new Cookie("user-id", "1");

        mockMvc.perform(post("/users/cart/{sneakerId}/{quantity}", 1, 2)
                        .with(jwt())
                        .cookie(userCookie))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].sneaker.name").value("Air Jordan 1"))
                .andExpect(jsonPath("$[0].sneaker.producer").value("Nike"));

        mockMvc.perform(post("/users/clear-cart")
                        .with(jwt())
                        .cookie(userCookie))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isEmpty());
    }
}
