package com.github.sneakerstore.photo;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class PhotoController {
    private PhotoService photoService;
}
