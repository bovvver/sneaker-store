package com.github.sneakerstore.integration.repositories;

import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.sneaker.SneakerRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class SneakerRepositoryTest implements BaseRepositoryTest {
    @Autowired
    private SneakerRepository repository;
    private int sneakerId;

    @BeforeEach
    public void testInitialization() {
        Sneaker createdSneaker = repository.save(new Sneaker(1.00));
        sneakerId = createdSneaker.getId();
    }

    @Override
    @Test
    @DisplayName("Table creation testing")
    public void testCreate() {
        assertNotNull(repository.findById(sneakerId));
    }

    @Override
    @Test
    @DisplayName("Table read testing")
    public void testRead() {
        Optional<Sneaker> readOrder = repository.findById(sneakerId);
        assertTrue(readOrder.isPresent());
    }

    @Override
    @Test
    @DisplayName("Table update testing")
    public void testUpdate() {
        Optional<Sneaker> updatedOrder = repository.findById(sneakerId);
        updatedOrder.ifPresent(order -> order.setName("TEST SNEAKER"));
        assertEquals(updatedOrder.get().getName(), "TEST SNEAKER");
    }

    @Override
    @Test
    @DisplayName("Table deletion testing")
    public void testDelete() {
        repository.deleteById(sneakerId);
        Optional<Sneaker> deletedEntity = repository.findById(sneakerId);
        assertFalse(deletedEntity.isPresent());
    }

    @AfterEach
    public void testCleanup() {
        if (repository.findById(sneakerId).isPresent()) {
            repository.deleteById(sneakerId);
        }
    }
}
