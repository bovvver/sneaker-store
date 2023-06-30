package com.github.sneakerstore.history;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.github.sneakerstore.interfaces.OrderBasedEntity;
import com.github.sneakerstore.order.Order;
import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.User;
import jakarta.persistence.Entity;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class History extends OrderBasedEntity {
    public History(Sneaker sneaker, int quantity, User owner) {
        super(sneaker, quantity, owner);
    }

    public History(Order order){
        this.id = order.getId();
        this.sneaker = order.getSneaker();
        this.quantity = order.getQuantity();
        this.owner = order.getOwner();
    }
}
