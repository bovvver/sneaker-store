package com.github.sneakerstore.user;

import com.github.sneakerstore.order.Order;
import jakarta.servlet.http.Cookie;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Transactional
public class UserController {
    private UserService userService;

    @GetMapping("/users/cart")
    public List<Order> findOrdersById(@CookieValue(name = "user-id")Cookie userCookie) {
        int userId = Integer.parseInt(userCookie.getValue());
        return userService.findOrdersById(userId);
    }

    @PostMapping("/users/{userId}/clear-cart")
    public ResponseEntity<User> clearCart(@PathVariable int userId) {
        return userService.clearCart(userId);
    }

    @PostMapping("/users/cart/{sneakerId}/{quantity}")
    public ResponseEntity<List<Order>> addToCart(@CookieValue(name = "user-id")Cookie userCookie, @PathVariable int sneakerId, @PathVariable int quantity) {
        int userId = Integer.parseInt(userCookie.getValue());
        return userService.addToCart(userId, sneakerId, quantity);
    }
}
