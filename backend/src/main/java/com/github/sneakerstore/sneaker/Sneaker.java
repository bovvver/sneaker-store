package com.github.sneakerstore.sneaker;

import com.github.sneakerstore.photo.Photo;
import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity(name = "sneakers")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Sneaker {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String producer;
    @Column(length = 600)
    private String description;
    @Positive
    private double price;
    private String gender;
    @OneToMany(mappedBy = "sneaker", cascade = {CascadeType.ALL, CascadeType.REMOVE})
    private List<Photo> photos;

}
