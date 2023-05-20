package com.github.sneakerstore.data;

import com.github.sneakerstore.jpa.SneakerRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DataController {
    private SneakerRepository sneakerRepository;

    public DataController(SneakerRepository sneakerRepository) {
        this.sneakerRepository = sneakerRepository;
    }

    @GetMapping("/sneakers")
    public List<Sneaker> retrieveAllSneakers() throws Exception {
        List<Sneaker> sneakers =  sneakerRepository.findAll();

        if(sneakers.isEmpty())
            throw new Exception();

        return sneakers;
    }
}
