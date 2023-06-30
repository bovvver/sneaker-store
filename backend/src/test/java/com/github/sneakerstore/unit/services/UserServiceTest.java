package com.github.sneakerstore.unit.services;

import com.github.sneakerstore.SneakerStoreApplication;
import com.github.sneakerstore.order.Order;
import com.github.sneakerstore.user.User;
import com.github.sneakerstore.user.UserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;

import java.util.List;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@AutoConfigureMockMvc
@ContextConfiguration(classes = {SneakerStoreApplication.class})
public class UserServiceTest {
    @MockBean
    private UserService userService;

    @Test
    @DisplayName("Should clear cart")
    public void should_clear_cart() {
        User user = new User("testUser", null, null, null, List.of());

        Mockito.when(userService.finishOrder(1)).thenReturn(ResponseEntity.ok().body(user.getCart()));

        ResponseEntity<List<Order>> result = userService.finishOrder(1);
        assertTrue((Objects.requireNonNull(result.getBody())).isEmpty());
        Mockito.verify(userService, Mockito.times(1)).finishOrder(1);
    }

    @Test
    @DisplayName("Should add to cart")
    public void should_add_to_cart() {
        Mockito.when(userService.addToCart(1, 2, 3)).thenReturn(ResponseEntity.ok().build());

        ResponseEntity<List<Order>> result = userService.addToCart(1, 2, 3);

        assertEquals(result.getStatusCode(), HttpStatus.OK);
        Mockito.verify(userService, Mockito.times(1)).addToCart(1, 2, 3);
    }
}
