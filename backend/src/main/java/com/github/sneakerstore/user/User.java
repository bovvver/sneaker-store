package com.github.sneakerstore.user;

import com.github.sneakerstore.order.Order;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@Setter
@Getter
@Table(name ="user_table")
public class User {
    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue
    private int id;
    private String username;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner", orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Order> cart;

    public User(String username, List<Order> cart) {
        this.username = username;
        this.cart = cart;
    }
}
