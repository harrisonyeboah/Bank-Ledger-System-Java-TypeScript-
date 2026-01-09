// Path Imports
package com.example.demo.exceptions;

// Spring Imports
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// UUID java imports 
import java.util.UUID;

public class Exceptions {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    public static class TransactionNotFound extends RuntimeException {
        public TransactionNotFound(UUID transactionId) {
            super("Transaction not found " + transactionId);
        }
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    public static class AccountNotFoundException extends RuntimeException {
        public AccountNotFoundException(UUID userId) {
            super("Account not found for user: " + userId);
        }
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    public static class UserNotFoundException extends RuntimeException {
        public UserNotFoundException(UUID accountId) {
            super("User not found for user: " + accountId);
        }
    }

}
