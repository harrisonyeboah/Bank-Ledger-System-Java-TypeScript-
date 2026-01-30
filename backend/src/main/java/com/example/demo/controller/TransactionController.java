// Path Import
package com.example.demo.controller;

// Spring Boot Imports
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;


// Class Imports
import com.example.demo.model.User; 
import com.example.demo.service.UserService;
import com.example.demo.service.TransactionService;
import com.example.demo.repository.UserRepository;
import com.example.demo.enums.TransactionType;
import com.example.demo.enums.TransactionStatus;


// Data Type Import
import java.time.LocalDate; 
import java.util.UUID;
import java.util.Optional;
import java.util.List;
import java.math.BigDecimal;



@Controller
public class TransactionController {
    // Making in instance of my userService
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }



    // Deposit
    @PostMapping("/internalDeposit")
    @ResponseBody
    public String internalDeposit(
            @RequestParam UUID userID,
            @RequestParam UUID accountID,
            @RequestParam TransactionType type,
            @RequestParam BigDecimal amount,
            @RequestParam String currency,
            @RequestParam TransactionStatus status,
            @RequestParam(required = false) String externalRef
    ) {
        return transactionService.makeInternalDeposit(userID, accountID, type, amount, currency, status, externalRef);
    }

    // Internal Withdraw
    @PostMapping("/internalWithdraw")
    @ResponseBody
    public String internalWithdraw(
            @RequestParam UUID userID,
            @RequestParam UUID accountID,
            @RequestParam TransactionType type,
            @RequestParam BigDecimal amount,
            @RequestParam String currency,
            @RequestParam TransactionStatus status,
            @RequestParam(required = false) String externalRef
    ) {
        return transactionService.makeInternalWithdraw(userID, accountID, type, amount, currency, status, externalRef);
    }

    // Internal Trandsfer
    @PostMapping("/internalTransfer")
    @ResponseBody
    public String internalTransfer(
            @RequestParam UUID userID,
            @RequestParam UUID fromAccountID,
            @RequestParam UUID toAccountID,
            @RequestParam TransactionType type,
            @RequestParam BigDecimal amount,
            @RequestParam String currency,
            @RequestParam TransactionStatus status,
            @RequestParam(required = false) String externalRef
    ) {
        return transactionService.makeInternalTransfer(userID, fromAccountID, toAccountID, type, amount, currency, status, externalRef);
    }


}