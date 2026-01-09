// This is where to find the repository
package com.example.demo.repository;

// User Import
import com.example.demo.model.User;
import com.example.demo.model.Account;
import com.example.demo.model.Transaction;
import com.example.demo.enums.TransactionType;
import com.example.demo.enums.TransactionStatus;

// Spring Import 
import org.springframework.data.jpa.repository.JpaRepository;

// Java Import 
import java.util.UUID;

public interface TransactionRepository extends JpaRepository<Transaction, UUID> {

}

