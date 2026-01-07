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
        String result = newUser.getUserDetails();
        System.out.println(result);
        return result;
    }
}