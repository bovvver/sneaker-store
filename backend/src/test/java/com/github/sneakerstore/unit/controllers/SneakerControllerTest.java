package com.github.sneakerstore.unit.controllers;

import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.UserController;
import com.github.sneakerstore.user.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(UserController.class)
public class SneakerControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private UserService userService;

    @Test
    public void testRetrieveSneakers(){
        Sneaker sneaker = new Sneaker()

        Mockito.when(userService.findAll())
    }
}
