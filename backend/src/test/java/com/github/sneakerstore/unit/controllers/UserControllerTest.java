package com.github.sneakerstore.unit.controllers;

import com.github.sneakerstore.SneakerStoreApplication;
import com.github.sneakerstore.config.JwtService;
import com.github.sneakerstore.order.Order;
import com.github.sneakerstore.user.UserService;
import jakarta.servlet.http.Cookie;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.jwt;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@ContextConfiguration(classes = {SneakerStoreApplication.class})
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private UserService userService;
    @Autowired
    private JwtService jwtService;
    private int testUserId = 1;
    private Cookie cookie = new Cookie("user-id", Integer.toString(testUserId));

    @Test
    @DisplayName("Find orders by id")
    public void should_find_orders_by_id() throws Exception {
        Order order1 = new Order(null, 1, null);
        Order order2 = new Order(null, 2, null);
        List<Order> orders = List.of(order1, order2);

        Mockito.when(userService.findOrdersById(testUserId)).thenReturn(orders);

        mockMvc.perform(get("/users/cart")
                        .with(jwt())
                        .cookie(cookie))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].quantity").value(1))
                .andExpect(jsonPath("$[1].quantity").value(2));

        Mockito.verify(userService, Mockito.times(1)).findOrdersById(testUserId);
    }

    @Test
    @DisplayName("Clear cart")
    public void should_clear_cart() throws Exception {
        Mockito.when(userService.clearCart(testUserId)).thenReturn(ResponseEntity.ok().build());

        mockMvc.perform(post("/users/clear-cart")
                        .with(jwt())
                        .cookie(cookie))
                .andExpect(status().isOk());

        Mockito.verify(userService, Mockito.times(1)).clearCart(testUserId);
    }

    @Test
    @DisplayName("Clear cart when empty")
    public void should_throw_404_when_cart_is_empty() throws Exception {
        Mockito.when(userService.clearCart(1)).thenReturn(ResponseEntity.notFound().build());

        mockMvc.perform(post("/users/clear-cart")
                        .with(jwt())
                        .cookie(cookie))
                .andExpect(status().isNotFound());

        Mockito.verify(userService, Mockito.times(1)).clearCart(testUserId);
    }

    @Test
    @DisplayName("Add to cart")
    public void should_add_to_cart() throws Exception {
        Mockito.when(userService.addToCart(testUserId, 2, 3)).thenReturn(ResponseEntity.ok().build());

        mockMvc.perform(post("/users/cart/{sneakerId}/{quantity}", 2, 3)
                        .with(jwt())
                        .cookie(cookie))
                .andExpect(status().isOk());

        Mockito.verify(userService, Mockito.times(1)).addToCart(testUserId, 2, 3);
    }
}
