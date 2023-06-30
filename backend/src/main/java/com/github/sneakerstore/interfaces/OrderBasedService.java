package com.github.sneakerstore.interfaces;

import com.github.sneakerstore.history.History;
import com.github.sneakerstore.order.Order;
import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.User;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public abstract class OrderBasedService<T extends OrderBasedEntity, U extends OrderBasedRepository<T>> {
    protected U repository;

    public void deleteOrdersOwner(User user) {
        List<T> orders = repository.findByOwner(user);
        if (!orders.isEmpty()) {
            orders.forEach(order -> {
                order.setOwner(null);

                if(order instanceof Order)
                    order.getSneaker().setOrder(null);
                 else if(order instanceof History)
                    order.getSneaker().setHistory(null);

                order.setSneaker(null);
            });
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cart is empty");
    }

    public void deleteOrdersOwner(User user, Sneaker sneaker) {
        T order = repository.findByOwnerAndSneaker(user, sneaker);
        if (order != null) {
            order.setOwner(null);

            if(order instanceof Order){
                user.getCart().remove(order);
                order.getSneaker().setOrder(null);
            } else if(order instanceof History){
                user.getHistory().remove(order);
                order.getSneaker().setHistory(null);
            }

            order.setSneaker(null);
            repository.delete(order);
        } else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cart is empty");
    }

    public List<T> findByOwner(User owner) {
        return repository.findByOwner(owner);
    }
}
