package com.github.sneakerstore.user;

import com.github.sneakerstore.order.Order;
import com.github.sneakerstore.order.OrderService;
import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.sneaker.SneakerService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class UserService {
    private UserRepository userRepository;
    private OrderService orderService;
    private SneakerService sneakerService;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public ResponseEntity<User> clearCart(@PathVariable int userId) {
        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            orderService.deleteOrdersOwner(user);
            user.getCart().clear();
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
    }

    public ResponseEntity<List<Order>> addToCart(int userId, int sneakerId, int quantity) {
        Optional<User> optionalUser = userRepository.findById(userId);

        if(optionalUser.isPresent()){
            User user = optionalUser.get();
            Sneaker sneaker = sneakerService.findById(sneakerId);
            orderService.addOrder(user, sneaker, quantity);
            return new ResponseEntity<>(user.getCart(), HttpStatus.OK);
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
    }

    public List<Order> findOrdersById(int userId) {
        User owner = userRepository.findById(userId).orElse(null);
        return orderService.findByOwner(owner);
    }
}
