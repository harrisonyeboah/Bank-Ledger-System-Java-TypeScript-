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
import com.example.demo.model.Account; 
import com.example.demo.repository.AccountRepository;


// Java Imports 
import java.util.UUID;
import java.util.Optional;
import java.util.List;
import java.lang.RuntimeException;



@Service 
public class AccountService {
    private final AccountRepository yeboahAccountRepository;

    public AccountService(AccountRepository yourRepo) {
        this.yeboahAccountRepository = yourRepo;
    }


    public void createAccount(String firstName, String lastName, String yourSSN, LocalDate yourDOB) {

    }

    public void findAccount(UUID userId) {

    }

    public void findAllAccounts() {
        
    }


    public void updateAccount(UUID userId, String firstName, String lastName, String yourSSN, LocalDate yourDOB) {

    }


    public void deleteAccount(UUID userId) {
    
    }

}