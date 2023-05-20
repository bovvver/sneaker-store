package com.github.sneakerstore.jpa;

import com.github.sneakerstore.data.Sneaker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SneakerRepository extends JpaRepository<Sneaker, Integer> {
}
