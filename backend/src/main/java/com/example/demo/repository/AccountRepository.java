// This is where to find the repository
package com.example.demo.repository;

// User Import
import com.example.demo.model.User;
import com.example.demo.model.Account;

// Spring Import 
import org.springframework.data.jpa.repository.JpaRepository;

// Java Import 
import java.util.UUID;

public interface AccountRepository extends JpaRepository<Account, UUID> {
}

