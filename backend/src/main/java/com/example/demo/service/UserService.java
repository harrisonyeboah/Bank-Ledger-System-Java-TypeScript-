// Location import 
package com.example.demo.service;

// Spring Imports 
import org.springframework.stereotype.Service;

// External Imports
import jakarta.persistence.Column;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate; 

// Class Imports 
import com.example.demo.model.User; 
import com.example.demo.repository.UserRepository;

// Java Imports 
import java.util.UUID;
import java.util.Optional;
import java.util.List;
import java.lang.RuntimeException;



@Service 
public class UserService {
    private final UserRepository yeboahUserRepository;

    public UserService(UserRepository yourRepo) {
        this.yeboahUserRepository = yourRepo;
    }


    public String createUser(String firstName, String lastName, String yourSSN, LocalDate yourDOB) {
        /* This service will */ 
        System.out.println("This service is hit");
        User newUser = new User(firstName, lastName, yourSSN, yourDOB);  
        yeboahUserRepository.save(newUser);
        String result = newUser.getUserDetails();
        System.out.println(result);
        return result;
    }

    public Optional<User> findUser(UUID userId) {
        Optional<User> currentUser = yeboahUserRepository.findById(userId);
        System.out.println(currentUser);
        return currentUser;
    }

    public List<User> findAllUsers() {
        return yeboahUserRepository.findAll();
    }


    public void updateUser(UUID userId, String firstName, String lastName, String yourSSN, LocalDate yourDOB) {
        Optional<User> optionalUser = yeboahUserRepository.findById(userId);

        if (optionalUser.isPresent()) {
            User acquiredUser = optionalUser.get();
            acquiredUser.setFirstName(firstName);
            acquiredUser.setLastName(lastName);
            acquiredUser.setFullName(firstName, lastName);

            yeboahUserRepository.save(acquiredUser);
        } else {
            throw new RuntimeException("User not found with ID: " + userId);
        }
    }


    public void deleteUser(UUID userId) {
        yeboahUserRepository.deleteById(userId);
    }

}