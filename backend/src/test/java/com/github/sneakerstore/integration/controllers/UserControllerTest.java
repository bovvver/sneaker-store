package com.github.sneakerstore.integration.controllers;

import com.github.sneakerstore.user.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserControllerTest {
    @Autowired
    private TestRestTemplate restTemplate;
    private final int testUserId = 1;
    private final int secondTestUserId = 2;

    @BeforeEach
    @AfterEach
    public void test_initialization() {
        restTemplate.postForEntity("http://localhost:8080/users/{userId}/clear-cart", null, User.class, testUserId);
        restTemplate.postForEntity("http://localhost:8080/users/{userId}/clear-cart", null, User.class, secondTestUserId);
    }

    @Test
    @DisplayName("Adding to and clearing cart - integration test")
    public void test_adding_to_and_clearing_cart() {
        ResponseEntity<User> response = restTemplate.postForEntity("http://localhost:8080/users/{userId}/cart/{sneakerId}/{quantity}", null, User.class, testUserId, 1, 1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertFalse(response.getBody().getCart().isEmpty());
        System.out.println("Order added successfully.");

        response = restTemplate.postForEntity("http://localhost:8080/users/{userId}/clear-cart", null, User.class, testUserId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(response.getBody().getCart().isEmpty());
        System.out.println("Cart cleared successfully.");
    }

    @Test
    @DisplayName("Adding to cart with problematic scenario - integration test")
    public void test_adding_to_cart_problematicScenario() {
        restTemplate.postForEntity("http://localhost:8080/users/{userId}/cart/{sneakerId}/{quantity}", null, User.class, testUserId, 1, 1);
        restTemplate.postForEntity("http://localhost:8080/users/{userId}/cart/{sneakerId}/{quantity}", null, User.class, secondTestUserId, 1, 1);
        ResponseEntity<User> response = restTemplate.postForEntity("http://localhost:8080/users/{userId}/cart/{sneakerId}/{quantity}", null, User.class, secondTestUserId, 1, 1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
    }
}
