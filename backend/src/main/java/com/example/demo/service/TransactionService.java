// Location import 
package com.example.demo.service;

// Spring Imports 
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

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
import com.example.demo.repository.TransactionRepository;
import com.example.demo.enums.TransactionType;
import com.example.demo.enums.TransactionStatus;
import com.example.demo.exceptions.Exceptions;



// Java Imports 
import java.util.UUID;
import java.util.Optional;
import java.util.List;
import java.lang.RuntimeException;
import java.util.concurrent.atomic.AtomicReference;




@Service 
public class TransactionService {
    private final AccountRepository yeboahAccountRepository;
    private final UserRepository yeboahUserRepository;
    private final TransactionRepository yeboahTransactionRepository;

    public TransactionService(AccountRepository yourAccountRepo, UserRepository yourUserRepo, TransactionRepository yourTransactionRepo) {
        this.yeboahAccountRepository = yourAccountRepo;
        this.yeboahUserRepository = yourUserRepo;
        this.yeboahTransactionRepository = yourTransactionRepo;
    }

    private String findUser(UUID userId) {
        // This method is in charge of finding the user. 
        return "find my user";
        //return yeboahUserRepository.findById(userId);
    }

    private String findAccount(UUID accountId) {
        // This method is in charge of finding the account. 
        return "";
        //return yeboahAccountRepository.findById(accountId);
    }

    public String makeInternalDeposit(UUID userID, UUID accountID, TransactionType type, BigDecimal amount, String currency, TransactionStatus status, String externalRef) {
        return "Deposit made";
    }



}