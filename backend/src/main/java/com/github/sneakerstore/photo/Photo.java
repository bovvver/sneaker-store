package com.github.sneakerstore.photo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.github.sneakerstore.sneaker.Sneaker;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Photo {
    @Id
    @GeneratedValue
    @JsonIgnore
    private Integer id;
    private String path;
    @JsonIgnore
    @ManyToOne
    private Sneaker sneaker;
}
