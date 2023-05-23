package com.github.sneakerstore.sneaker;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SneakerRepository extends JpaRepository<Sneaker, Integer> {
}
