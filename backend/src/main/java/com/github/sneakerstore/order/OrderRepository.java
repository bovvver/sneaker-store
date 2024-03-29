package com.github.sneakerstore.order;

import com.github.sneakerstore.interfaces.OrderBasedRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends OrderBasedRepository<Order> {
}
