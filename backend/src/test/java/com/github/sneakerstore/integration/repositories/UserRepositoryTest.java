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
    public void testCreate() {
        assertNotNull(repository.findById(userId));
    }

    @Override
    @Test
    @DisplayName("Table read testing")
    public void testRead() {
        Optional<User> readUser = repository.findById(userId);
        assertTrue(readUser.isPresent());
    }

    @Override
    @Test
    @DisplayName("Table update testing")
    public void testUpdate() {
        Optional<User> updatedUser = repository.findById(userId);
        updatedUser.ifPresent(order -> order.setUsername("test"));
        assertEquals(updatedUser.get().getUsername(), "test");
    }

    @Override
    @Test
    @DisplayName("Table deletion testing")
    public void testDelete() {
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