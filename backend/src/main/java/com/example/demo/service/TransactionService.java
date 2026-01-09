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
import com.example.demo.model.Transaction; 
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
    private User findUserOrThrow(UUID userId) {
        return yeboahUserRepository.findById(userId)
                .orElseThrow(() -> new Exceptions.UserNotFoundException(userId));
    }

    private Account findAccountOrThrow(UUID accountId) {
        return yeboahAccountRepository.findById(accountId)
                .orElseThrow(() -> new Exceptions.AccountNotFoundException(accountId));
    }


    public String makeInternalDeposit(UUID userId, UUID accountID, TransactionType type, BigDecimal amount, String currency, TransactionStatus status, String externalRef) {
        User myUser = findUserOrThrow(userId);
        Account myAccount =  findAccountOrThrow(accountID);
        Transaction depositTransaction = new Transaction(myUser, myAccount, type, amount, currency, status, externalRef);
        return depositTransaction.getDetails();
    }



}