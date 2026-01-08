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
import com.example.demo.repository.UserRepository;

import com.example.demo.model.Account; 
import com.example.demo.service.AccountService;
import com.example.demo.repository.AccountRepository;




// Data Type Import
import java.time.LocalDate; 
import java.util.UUID;
import java.util.Optional;
import java.util.List;





@Controller
public class AccountController {
    // Making in instance of my userService
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    // CREATE
    @PostMapping("/createAccount")
    @ResponseBody
    public String createAccount(@RequestParam UUID userId, String accountType, String accountCurrency, String accountStatus) {
        return accountService.newAccount(userId, accountType, accountCurrency, accountStatus);
    }

    // READ 
    @GetMapping("/getAccount")
    @ResponseBody
    public void getOneAccount(@RequestParam UUID accountId) {

    }


    @GetMapping("/getAllAccounts")
    @ResponseBody
    public void getAllAccounts() {

    }

    @PutMapping("/updateAccount") 
    @ResponseBody
    public void updateAccount(@RequestParam UUID accountId, String firstName, String lastName, String yourSSN, LocalDate yourDOB) {

    }

    // DELETE
    @DeleteMapping("/deleteAccount") 
    @ResponseBody
    public void deleteOneAccount(@RequestParam UUID accountId) {

    }
    





}