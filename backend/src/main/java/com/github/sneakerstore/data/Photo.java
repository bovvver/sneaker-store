package com.github.sneakerstore.data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Photo {

    protected Photo() {
    }

    @Id
    @GeneratedValue
    @JsonIgnore
    private Integer id;
    private String path;
    @ManyToOne
    @JsonIgnore
    private Sneaker sneaker;

    public Photo(String path) {
        this.path = path;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Sneaker getSneaker() {
        return sneaker;
    }

    public void setSneaker(Sneaker sneaker) {
        this.sneaker = sneaker;
    }
}
