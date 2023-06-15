package com.github.sneakerstore.photo;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PhotoService {
    private PhotoRepository photoRepository;
}
