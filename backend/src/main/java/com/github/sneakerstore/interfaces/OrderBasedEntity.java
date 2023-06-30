package com.github.sneakerstore.interfaces;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@MappedSuperclass
@NoArgsConstructor
@Setter
@Getter
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public abstract class OrderBasedEntity {
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue
    protected int id;
    @OneToOne
    protected Sneaker sneaker;
    protected int quantity;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    protected User owner;

    public OrderBasedEntity(Sneaker sneaker, int quantity, User owner) {
        this.sneaker = sneaker;
        this.quantity = quantity;
        this.owner = owner;
    }
}
