package com.github.sneakerstore.interfaces;

import com.github.sneakerstore.sneaker.Sneaker;
import com.github.sneakerstore.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface OrderBasedRepository<T> extends JpaRepository<T, Integer> {
    List<T> findByOwner(User user);
    T findByOwnerAndSneaker(User owner, Sneaker sneaker);
}
