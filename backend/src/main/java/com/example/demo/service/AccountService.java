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
import com.example.demo.repository.UserRepository;



// Java Imports 
import java.util.UUID;
import java.util.Optional;
import java.util.List;
import java.lang.RuntimeException;
import java.util.concurrent.atomic.AtomicReference;


@Service 
public class AccountService {
    private final AccountRepository yeboahAccountRepository;
    private final UserRepository yeboahUserRepository;

    public AccountService(AccountRepository yourAccountRepo, UserRepository yourUserRepo) {
        this.yeboahAccountRepository = yourAccountRepo;
        this.yeboahUserRepository = yourUserRepo;
    }


public String newAccount(UUID userId, String accountType, String accountCurrency, String accountStatus) {
    AtomicReference<Account> accountRef = new AtomicReference<>();
    System.out.println("My account type and status.");
    System.out.println(accountType);
    System.out.println(accountStatus);
    yeboahUserRepository.findById(userId)
        .ifPresentOrElse(
            actualUser -> {
                Account newAccount = new Account(
                    accountType,
                    accountCurrency,
                    accountStatus,
                    actualUser
                );
                yeboahAccountRepository.save(newAccount);
                accountRef.set(newAccount);  // store in AtomicReference
                System.out.println("Account made");
            },
            () -> {
                System.out.println("User not found");
            }
        );

    // Return account details if created
    if (accountRef.get() != null) {
        return accountRef.get().getAccountDetails();
    } 
    return "Error: User not found or account not created";
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