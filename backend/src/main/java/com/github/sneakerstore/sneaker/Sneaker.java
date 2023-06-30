package com.github.sneakerstore.sneaker;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.github.sneakerstore.history.History;
import com.github.sneakerstore.order.Order;
import com.github.sneakerstore.photo.Photo;
import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import lombok.*;

import java.util.List;

@Entity(name = "sneakers")
@NoArgsConstructor
@Setter
@Getter
public class Sneaker {
    @Setter(AccessLevel.NONE)
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
    @OneToMany(mappedBy = "sneaker", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Photo> photos;
    @JsonIgnore
    @OneToOne(mappedBy = "sneaker", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Order order;
    @OneToOne(mappedBy = "sneaker", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private History history;

    public Sneaker(String name, String producer, String description, double price, String gender, List<Photo> photos, Order order, History history) {
        this.name = name;
        this.producer = producer;
        this.description = description;
        this.price = price;
        this.gender = gender;
        this.photos = photos;
        this.order = order;
        this.history = history;
    }

    // TESTING CONSTRUCTOR
    public Sneaker(double price) {
        this.price = price;
    }
}
