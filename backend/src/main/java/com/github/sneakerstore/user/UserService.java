package com.github.sneakerstore.user;

import com.github.sneakerstore.history.History;
import com.github.sneakerstore.history.HistoryService;
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
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Transactional
public class UserService {
    private UserRepository userRepository;
    private OrderService orderService;
    private SneakerService sneakerService;
    private HistoryService historyService;

    public ResponseEntity<List<Order>> finishOrder(@PathVariable int userId) {
        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            List<History> historyList = findOrdersById(user.getId())
                    .stream()
                    .map(History::new)
                            .collect(Collectors.toList());

            historyService.addAllToHistory(historyList);
            orderService.deleteOrdersOwner(user);
            user.getCart().clear();
            return new ResponseEntity<>(user.getCart(), HttpStatus.OK);
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
    }

    public ResponseEntity<List<Order>> deleteItem(int userId, @PathVariable int sneakerId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        Sneaker sneaker = sneakerService.findById(sneakerId);

        if (optionalUser.isPresent() && sneaker != null) {
            User user = optionalUser.get();

            List<Order> newCart = user.getCart().stream().filter(el -> el.getSneaker().getId() != sneakerId).toList();
            orderService.deleteOrdersOwner(user, sneaker);

            user.getCart().addAll(newCart);

            return new ResponseEntity<>(newCart, HttpStatus.OK);
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
    }

    public ResponseEntity<List<Order>> addToCart(int userId, int sneakerId, int quantity) {
        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            Sneaker sneaker = sneakerService.findById(sneakerId);
            orderService.addOrder(user, sneaker, quantity);
            return new ResponseEntity<>(user.getCart(), HttpStatus.OK);
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
    }

    public ResponseEntity<List<History>> clearHistory(@PathVariable int userId){
        Optional<User> optionalUser = userRepository.findById(userId);

        if(optionalUser.isPresent()){
            User user = optionalUser.get();
            historyService.deleteOrdersOwner(user);
            user.getHistory().clear();
            return new ResponseEntity<>(user.getHistory(), HttpStatus.OK);
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
    }

    public ResponseEntity<List<History>> deleteHistoryItem(int userId, @PathVariable int sneakerId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        Sneaker sneaker = sneakerService.findById(sneakerId);

        if (optionalUser.isPresent() && sneaker != null) {
            User user = optionalUser.get();

            List<History> newHistory = user.getHistory().stream().filter(el -> el.getSneaker().getId() != sneakerId).toList();
            historyService.deleteOrdersOwner(user, sneaker);

            user.getHistory().addAll(newHistory);

            return new ResponseEntity<>(newHistory, HttpStatus.OK);
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
    }

    public List<Order> findOrdersById(int userId) {
        User owner = userRepository.findById(userId).orElse(null);
        return orderService.findByOwner(owner);
    }

    public List<History> findHistoryById(int userId) {
        User owner = userRepository.findById(userId).orElse(null);
        return historyService.findByOwner(owner);
    }
}