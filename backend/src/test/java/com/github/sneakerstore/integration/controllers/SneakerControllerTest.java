package com.github.sneakerstore.integration.controllers;

import com.github.sneakerstore.sneaker.Sneaker;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class SneakerControllerTest {
    @Autowired
    private TestRestTemplate restTemplate;
    private final ParameterizedTypeReference<List<Sneaker>> responseType = new ParameterizedTypeReference<>() {
    };

    @Test
    @DisplayName("Retrieving every sneaker - integration test")
    public void should_retrieve_all_sneakers() {
        ResponseEntity<List<Sneaker>> response = restTemplate.exchange(
                "http://localhost:8080/sneakers",
                HttpMethod.GET,
                null,
                responseType
        );

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals(1, response.getBody().get(0).getId());
        assertEquals(9, response.getBody().get(8).getId());
    }
}
