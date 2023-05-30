package com.github.sneakerstore.sneaker;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SneakerService {
    private SneakerRepository sneakerRepository;

    public List<Sneaker> findAll() {
        return sneakerRepository.findAll();
    }

    public Sneaker findById(int id) {
        Optional<Sneaker> sneaker = sneakerRepository.findById(id); // ERROR PLACE

        if (sneaker.isPresent())
            return sneaker.get();
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Sneaker not found");
    }
}
