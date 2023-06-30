package com.github.sneakerstore.user;

import com.github.sneakerstore.history.History;
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

    @GetMapping("/users/history")
    public List<History> findHistoryById(@CookieValue(name = "user-id")Cookie userCookie) {
        int userId = Integer.parseInt(userCookie.getValue());
        return userService.findHistoryById(userId);
    }

    @PostMapping("/users/cart/delete/{sneakerId}")
    public ResponseEntity<List<Order>> deleteItem(@CookieValue(name="user-id") Cookie userCookie ,@PathVariable int sneakerId) {
        int userId = Integer.parseInt(userCookie.getValue());
        return userService.deleteItem(userId, sneakerId);
    }

    @PostMapping("/users/cart/finish")
    public ResponseEntity<List<Order>> finishOrder(@CookieValue(name = "user-id") Cookie userCookie) {
        int userId = Integer.parseInt(userCookie.getValue());
        return userService.finishOrder(userId);
    }

    @PostMapping("/users/history/clear")
    public ResponseEntity<List<History>> clearHistory(@CookieValue(name="user-id") Cookie userCookie) {
        int userId = Integer.parseInt(userCookie.getValue());
        return userService.clearHistory(userId);
    }

    @PostMapping("/users/history/clear/{sneakerId}")
    public ResponseEntity<List<History>> deleteHistoryItem(@CookieValue(name="user-id") Cookie userCookie ,@PathVariable int sneakerId) {
        int userId = Integer.parseInt(userCookie.getValue());
        return userService.deleteHistoryItem(userId, sneakerId);
    }

    @PostMapping("/users/cart/{sneakerId}/{quantity}")
    public ResponseEntity<List<Order>> addToCart(@CookieValue(name = "user-id")Cookie userCookie, @PathVariable int sneakerId, @PathVariable int quantity) {
        int userId = Integer.parseInt(userCookie.getValue());
        return userService.addToCart(userId, sneakerId, quantity);
    }
}
