package com.github.sneakerstore.order;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@Setter
@Getter
@Table(name = "order_table")
public class Order {
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue
    private int id;
    @OneToOne
    private Sneaker sneaker;
    private int quantity;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    private User owner;

    public Order(Sneaker sneaker, int quantity, User owner) {
        this.sneaker = sneaker;
        this.quantity = quantity;
        this.owner = owner;
    }

    public void changeQuantity(int quantity){
        this.quantity += quantity;
    }
}
