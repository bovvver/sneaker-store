package com.github.sneakerstore.order;

import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByOwner(User user);

    Order findByOwnerAndSneaker(User owner, Sneaker sneaker);
}
