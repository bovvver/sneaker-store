package com.github.sneakerstore.history;

import com.github.sneakerstore.interfaces.OrderBasedRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryRepository extends OrderBasedRepository<History> {
}