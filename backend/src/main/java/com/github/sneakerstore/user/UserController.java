package com.github.sneakerstore.user;

import com.github.sneakerstore.order.Order;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@Transactional
public class UserController {
    private UserService userService;

    @GetMapping("/users") // REMOVE IN PRODUCTION
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping("/users/{userId}/cart")
    public List<Order> findOrdersById(@PathVariable int userId) {
        return userService.findOrdersById(userId);
    }

    @PostMapping("/users/{userId}/clear-cart")
    public ResponseEntity<User> clearCart(@PathVariable int userId) {
        return userService.clearCart(userId);
    }

    @PostMapping("/users/{userId}/cart/{sneakerId}/{quantity}")
    public ResponseEntity<User> addToCart(@PathVariable int userId, @PathVariable int sneakerId, @PathVariable int quantity) {
        return userService.addToCart(userId, sneakerId, quantity);
    }
}
