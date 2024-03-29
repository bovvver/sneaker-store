package com.github.sneakerstore.integration.repositories;

import com.github.sneakerstore.user.User;
import com.github.sneakerstore.user.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserRepositoryTest implements BaseRepositoryTest {
    @Autowired
    private UserRepository repository;
    private int userId;

    @BeforeEach
    public void testInitialization() {
        User createdUser = repository.save(new User());
        userId = createdUser.getId();
    }

    @Override
    @Test
    @DisplayName("Table creation testing")
    public void test_create() {
        assertNotNull(repository.findById(userId));
    }

    @Override
    @Test
    @DisplayName("Table read testing")
    public void test_read() {
        Optional<User> readUser = repository.findById(userId);
        assertTrue(readUser.isPresent());
    }

    @Override
    @Test
    @DisplayName("Table update testing")
    public void test_update() {
        Optional<User> updatedOrder = repository.findById(userId);
        updatedOrder.ifPresent(order -> order.setEmail("TEST"));
        assertEquals(updatedOrder.get().getUsername(), "TEST");
    }

    @Override
    @Test
    @DisplayName("Table deletion testing")
    public void test_delete() {
        repository.deleteById(userId);
        Optional<User> deletedUser = repository.findById(userId);
        assertFalse(deletedUser.isPresent());
    }

    @AfterEach
    public void testCleanup() {
        if (repository.findById(userId).isPresent()) {
            repository.deleteById(userId);
        }
    }
}