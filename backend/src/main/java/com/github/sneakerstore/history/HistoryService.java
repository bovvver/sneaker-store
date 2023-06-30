package com.github.sneakerstore.history;

import com.github.sneakerstore.interfaces.OrderBasedService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class HistoryService extends OrderBasedService<History, HistoryRepository> {
    public HistoryService(HistoryRepository repository) {
        super(repository);
    }

    public void addAllToHistory(List<History> orders) {
        repository.saveAll(orders);
    }
}