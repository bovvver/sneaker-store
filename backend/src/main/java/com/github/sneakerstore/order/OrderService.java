package com.github.sneakerstore.order;

import com.github.sneakerstore.interfaces.OrderBasedService;
import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.User;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class OrderService extends OrderBasedService<Order, OrderRepository> {
    public OrderService(OrderRepository repository) {
        super(repository);
    }

    public void addOrder(User owner, Sneaker sneaker, int quantity) {
        Order order = repository.findByOwnerAndSneaker(owner, sneaker);

        if (order != null) {
            order.changeQuantity(quantity);
        } else {
            Order newOrder = new Order(sneaker, quantity, owner);
            repository.save(newOrder);
            owner.getCart().add(newOrder);
        }
    }
}
