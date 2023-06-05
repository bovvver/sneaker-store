package com.github.sneakerstore.unit.controllers;

import com.github.sneakerstore.order.Order;
import com.github.sneakerstore.user.UserController;
import com.github.sneakerstore.user.UserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

@WebMvcTest(UserController.class)
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;


    @Test
    @DisplayName("Find orders by id")
    public void should_find_orders_by_id() throws Exception {
        Order order1 = new Order(null, 1, null);
        Order order2 = new Order(null, 2, null);
        List<Order> orders = List.of(order1, order2);

        Mockito.when(userService.findOrdersById(1)).thenReturn(orders);

        mockMvc.perform(MockMvcRequestBuilders.get("/users/{userId}/cart", 1))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].quantity").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].quantity").value(2));

        Mockito.verify(userService, Mockito.times(1)).findOrdersById(1);
    }

    @Test
    @DisplayName("Clear cart")
    public void should_clear_cart() throws Exception {
        Mockito.when(userService.clearCart(1)).thenReturn(ResponseEntity.ok().build());

        mockMvc.perform(MockMvcRequestBuilders.post("/users/{userId}/clear-cart", 1))
                .andExpect(MockMvcResultMatchers.status().isOk());

        Mockito.verify(userService, Mockito.times(1)).clearCart(1);
    }

    @Test
    @DisplayName("Clear cart when empty")
    public void should_throw_404_when_cart_is_empty() throws Exception {
        Mockito.when(userService.clearCart(1)).thenReturn(ResponseEntity.notFound().build());

        mockMvc.perform(MockMvcRequestBuilders.post("/users/{userId}/clear-cart", 1))
                .andExpect(MockMvcResultMatchers.status().isNotFound());

        Mockito.verify(userService, Mockito.times(1)).clearCart(1);
    }

    @Test
    @DisplayName("Add to cart")
    public void should_add_to_cart() throws Exception {
        Mockito.when(userService.addToCart(1, 2, 3)).thenReturn(ResponseEntity.ok().build());

        mockMvc.perform(MockMvcRequestBuilders.post("/users/{userId}/cart/{sneakerId}/{quantity}", 1, 2, 3))
                .andExpect(MockMvcResultMatchers.status().isOk());

        Mockito.verify(userService, Mockito.times(1)).addToCart(1,2,3);
    }
}
