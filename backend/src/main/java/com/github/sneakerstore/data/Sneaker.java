package com.github.sneakerstore.data;

import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;

import java.util.List;

@Entity(name = "sneakers")
public class Sneaker {

    protected Sneaker() {
    }

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
    @OneToMany(mappedBy = "sneaker")
    private List<Photo> photos;

    public Sneaker(String name, String producer, String description, double price, String gender, List<Photo> photos) {
        this.name = name;
        this.producer = producer;
        this.description = description;
        this.price = price;
        this.gender = gender;
        this.photos = photos;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public List<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(List<Photo> photos) {
        this.photos = photos;
    }
}
