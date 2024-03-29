package com.github.sneakerstore.order;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.github.sneakerstore.interfaces.OrderBasedEntity;
import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "order_table")
public class Order extends OrderBasedEntity {
    public Order(Sneaker sneaker, int quantity, User owner) {
        super(sneaker, quantity, owner);
    }

    public void changeQuantity(int quantity){
        this.quantity += quantity;
    }
}
