// This is where to find the repository
package com.example.demo.repository;

// User Import
import com.example.demo.model.User;

// Spring Import 
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

