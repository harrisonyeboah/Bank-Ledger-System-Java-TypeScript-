// File Path 
package com.example.demo.model;

// Jakarta Imports 
import jakarta.persistence.Column;
import jakarta.persistence.*;


// Class Imports 
import com.example.demo.model.User;
import com.example.demo.enums.AccountType;
import com.example.demo.enums.AccountStatus;


// Java Data Type Imports 
import java.time.LocalDate; 
import java.util.UUID;
import java.time.LocalDateTime;
import java.security.SecureRandom;
import java.math.BigDecimal; 


@Entity
@Table(name = "Accounts")
public class Account {



    // When the account is created
    public Account(String accountType, String accountCurrency, String accountStatus, User accountUser) {
        this.accountNumber = generateAccountNumber();

        // Set account type
        if ("CHECKINGS".equalsIgnoreCase(accountType)) {
            this.accountType = AccountType.CHECKINGS;
        } else if ("SAVINGS".equalsIgnoreCase(accountType)) {
            this.accountType = AccountType.SAVINGS;
        } else {
            this.accountType = AccountType.PENDING;
        }

        this.currency = accountCurrency;
        this.user = accountUser;

        // Set account status
        if ("ACTIVE".equalsIgnoreCase(accountStatus)) {
            this.status = AccountStatus.ACTIVE;
        } else {
            this.status = AccountStatus.PENDING;
        }
    }



    protected Account() {
    }


    @Id
    @GeneratedValue
    @Column(length = 36, name= "ID")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "User Id", nullable = false)
    private User user;

    @Column(nullable = false, unique = true, name = "Account Number")
    private String accountNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "Account Name")
    private AccountType accountType;


    @Column(nullable = false, length = 3, name = "Currency")
    private String currency = "USD";

    @Column(nullable = false, name= "Status")
    private AccountStatus status = AccountStatus.ACTIVE;

    @Column(nullable = false)
    private BigDecimal balance = BigDecimal.ZERO;

    


    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();

    /* -------- Getters & Setters -------- */

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public AccountStatus getStatus() {
        return status;
    }

    public void setStatus(String status) {
        if (status == "ACTIVE") {
            this.status = AccountStatus.ACTIVE;
        }
        else {
            this.status = AccountStatus.CLOSED;
        }
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    
    public String generateAccountNumber() {
        return String.valueOf(
            1000000000L + new SecureRandom().nextLong(9000000000L)
        );
    }

    public String getAccountDetails() {
        return "Account ID: " + getId() +                // actual account UUID
            "\nAccount Type: " + accountType +
            "\nCurrency: " + currency +
            "\nUser ID: " + user.getId() +           // user UUID
            "\nUser Name: " + user.getFirstName() + " " + user.getLastName() +
            "\nStatus: " + status;
    }

}
