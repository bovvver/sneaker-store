package com.github.sneakerstore.sneaker;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class SneakerController {
    private SneakerService sneakerService;

    @GetMapping("/sneakers")
    public List<Sneaker> retrieveAllSneakers() {
        return sneakerService.findAll();
    }
}
