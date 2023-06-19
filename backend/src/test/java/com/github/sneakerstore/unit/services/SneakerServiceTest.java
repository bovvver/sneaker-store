package com.github.sneakerstore.unit.services;

import com.github.sneakerstore.SneakerStoreApplication;
import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.sneaker.SneakerService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@AutoConfigureMockMvc
@ContextConfiguration(classes = {SneakerStoreApplication.class})
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
