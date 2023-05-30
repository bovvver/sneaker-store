package com.github.sneakerstore.order;

import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.User;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@AllArgsConstructor
@Transactional
public class OrderService {
    private OrderRepository orderRepository;

    public void deleteOrdersOwner(User user) {
        List<Order> orders = orderRepository.findByOwner(user);
        if (!orders.isEmpty()) {
            orders.forEach(order -> {
                order.setOwner(null);
                order.getSneaker().setOrder(null);
                order.setSneaker(null);
            });
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cart is empty");
    }

    public void addOrder(User owner, Sneaker sneaker, int quantity) {
        Order order = orderRepository.findByOwnerAndSneaker(owner, sneaker);

        if (order != null) {
            order.changeQuantity(quantity);
        } else {
            Order newOrder = new Order(sneaker, quantity, owner);
            orderRepository.save(newOrder);
        }
    }

    public List<Order> findByOwner(User owner) {
        return orderRepository.findByOwner(owner);
    }
}
