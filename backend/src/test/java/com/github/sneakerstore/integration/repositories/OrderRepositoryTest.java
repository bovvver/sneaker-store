package com.github.sneakerstore.integration.repositories;

import com.github.sneakerstore.order.Order;
import com.github.sneakerstore.order.OrderRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class OrderRepositoryTest implements BaseRepositoryTest {
    @Autowired
    private OrderRepository repository;
    private int orderId;

    @BeforeEach
    public void test_initialization() {
        Order createdOrder = repository.save(new Order());
        orderId = createdOrder.getId();
    }

    @Override
    @Test
    @DisplayName("Table creation testing")
    public void test_create() {
        assertNotNull(repository.findById(orderId));
    }

    @Override
    @Test
    @DisplayName("Table read testing")
    public void test_read() {
        Optional<Order> readOrder = repository.findById(orderId);
        assertTrue(readOrder.isPresent());
    }

    @Override
    @Test
    @DisplayName("Table update testing")
    public void test_update() {
        Optional<Order> updatedOrder = repository.findById(orderId);
        updatedOrder.ifPresent(order -> order.setQuantity(10));
        assertEquals(updatedOrder.get().getQuantity(), 10);
    }

    @Override
    @Test
    @DisplayName("Table deletion testing")
    public void test_delete() {
        repository.deleteById(orderId);
        Optional<Order> deletedEntity = repository.findById(orderId);
        assertFalse(deletedEntity.isPresent());
    }

    @AfterEach
    public void testCleanup() {
        if (repository.findById(orderId).isPresent()) {
            repository.deleteById(orderId);
        }
    }
}