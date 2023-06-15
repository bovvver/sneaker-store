package com.github.sneakerstore.photo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.github.sneakerstore.sneaker.Sneaker;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class Photo {
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue
    @JsonIgnore
    private Integer id;
    private String path;
    @JsonIgnore
    @ManyToOne
    private Sneaker sneaker;

    public Photo(String path, Sneaker sneaker) {
        this.path = path;
        this.sneaker = sneaker;
    }
}
