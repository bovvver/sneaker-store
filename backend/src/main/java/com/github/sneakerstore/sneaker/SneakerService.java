package com.github.sneakerstore.sneaker;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SneakerService {
    private SneakerRepository sneakerRepository;

    public List<Sneaker> findAll() { // TODO: HANDLE EXCEPTION
        return sneakerRepository.findAll();
    }

    public Sneaker findById(int id) { // TODO: HANDLE EXCEPTION
        Optional<Sneaker> sneaker = sneakerRepository.findById(id);
        return sneaker.orElse(null);
    }
}
