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
import com.example.demo.enums.AccountStatus;


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


 // ------------------- Deposit -------------------
    public String makeInternalDeposit(UUID userId, UUID accountID, TransactionType type, BigDecimal amount, String currency, TransactionStatus status, String externalRef) {
        User myUser = findUserOrThrow(userId);
        Account myAccount = findAccountOrThrow(accountID);

        // Perform deposit in memory
        myAccount.performDeposit(amount);

        // Persist updated balance
        yeboahAccountRepository.save(myAccount);

        // Create and complete transaction
        Transaction depositTransaction = new Transaction(myUser, myAccount, type, amount, currency, status, externalRef);
        depositTransaction.setComplete();
        yeboahTransactionRepository.save(depositTransaction);

        return depositTransaction.getDetails() + " \nAccount Information: " + myAccount.getAccountDetails();
    }

    // ------------------- Withdraw -------------------
    public String makeInternalWithdraw(UUID userId, UUID accountID, TransactionType type, BigDecimal amount, String currency, TransactionStatus status, String externalRef) {
        User myUser = findUserOrThrow(userId);
        Account myAccount = findAccountOrThrow(accountID);

        if (!myAccount.canWithdraw(amount)) {
            throw new Exceptions.InsufficientFundsException(myAccount.getAccountNumber());
        }

        // Perform withdrawal in memory
        myAccount.performWithdraw(amount);

        // Persist updated balance
        yeboahAccountRepository.save(myAccount);

        // Create and complete transaction
        Transaction withdrawTransaction = new Transaction(myUser, myAccount, type, amount, currency, status, externalRef);
        withdrawTransaction.setComplete();
        yeboahTransactionRepository.save(withdrawTransaction);

        return withdrawTransaction.getDetails() + " \nAccount Information: " + myAccount.getAccountDetails();
    }

    // ------------------- Transfer -------------------
    public String makeInternalTransfer(UUID userId, UUID fromAccountID, UUID toAccountID, TransactionType type, BigDecimal amount, String currency, TransactionStatus status, String externalRef) {
        User myUser = findUserOrThrow(userId);
        Account fromAccount = findAccountOrThrow(fromAccountID);
        Account toAccount = findAccountOrThrow(toAccountID);    

        if (!fromAccount.canWithdraw(amount)) {
            throw new Exceptions.InsufficientFundsException(fromAccount.getAccountNumber());
        }
        // This makes sure we are doing transfers between the same currency 
        if (!fromAccount.getCurrency().equals(toAccount.getCurrency())) {
            throw new Exceptions.CurrencyMismatchException(fromAccount.getAccountNumber(), toAccount.getAccountNumber());
        }
        // We are going to make sure the status of the account is active
        if (fromAccount.getStatus() != AccountStatus.ACTIVE || toAccount.getStatus() != AccountStatus.ACTIVE) {
            throw new RuntimeException("Both accounts must be ACTIVE to perform a transfer.");
        }


        // Perform transfer in memory
        fromAccount.performWithdraw(amount);
        toAccount.performDeposit(amount);

        // Persist updated balances
        yeboahAccountRepository.save(fromAccount);
        yeboahAccountRepository.save(toAccount);

        // Create and complete transaction
        Transaction transferTransaction = new Transaction(myUser, fromAccount, type, amount, currency, status, externalRef);
        transferTransaction.setComplete();
        yeboahTransactionRepository.save(transferTransaction);

        return transferTransaction.getDetails() + " \nFrom Account Information: " + fromAccount.getAccountDetails() + "\nTo Account Information: " + toAccount.getAccountDetails();
    }
}