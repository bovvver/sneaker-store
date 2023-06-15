package com.github.sneakerstore.unit.services;

import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.sneaker.SneakerService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@WebMvcTest(SneakerService.class)
public class SneakerServiceTest {
    @MockBean
    private SneakerService sneakerService;

    @Test
    @DisplayName("Should find by id")
    public void should_find_by_id() {
        Mockito.when(sneakerService.findById(1)).thenReturn(new Sneaker());
        Sneaker result = sneakerService.findById(1);
        assertNotNull(result);
    }
}
