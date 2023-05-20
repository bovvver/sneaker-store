package com.github.sneakerstore.jpa;

import com.github.sneakerstore.data.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {
}
