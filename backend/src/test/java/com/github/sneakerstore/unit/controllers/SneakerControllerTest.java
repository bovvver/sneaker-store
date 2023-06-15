package com.github.sneakerstore.unit.controllers;

import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.sneaker.SneakerController;
import com.github.sneakerstore.sneaker.SneakerService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

@WebMvcTest(SneakerController.class)
public class SneakerControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private SneakerService sneakerService;

    @Test
    @DisplayName("Retrieve all sneakers")
    public void should_retrieve_all_sneakers() throws Exception {
        Sneaker sneaker1 = new Sneaker("Model 1", "Brand 1", "Description 1", 100.00, "men", null, null);
        Sneaker sneaker2 = new Sneaker("Model 2", "Brand 2", "Description 2", 200.00, "women", null, null);
        List<Sneaker> sneakers = List.of(sneaker1, sneaker2);

        Mockito.when(sneakerService.findAll()).thenReturn(sneakers);

        mockMvc.perform(MockMvcRequestBuilders.get("/sneakers"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value("Model 1"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].producer").value("Brand 1"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].name").value("Model 2"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].producer").value("Brand 2"));

        Mockito.verify(sneakerService, Mockito.times(1)).findAll();
    }
}
