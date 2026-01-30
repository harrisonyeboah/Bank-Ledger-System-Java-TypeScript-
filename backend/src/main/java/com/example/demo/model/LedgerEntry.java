// File Path 
package com.example.demo.model;

// Jakarta imports 
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

// The Class imports
import com.example.demo.model.User;
import com.example.demo.model.Account;
import com.example.demo.model.Transaction;
import com.example.demo.enums.TransactionType;
import com.example.demo.enums.TransactionStatus;
import com.example.demo.enums.EntryType;


@Entity
@Table(name = "transactions")
public class LedgerEntry {

    // This is my transaction for when I am sending in my 
    public LedgerEntry(User user, Account account, Transaction transaction,
                       BigDecimal amount, String currency, EntryType entryType) {
        this.user = user;
        this.account = account;
        this.transaction = transaction;
        this.amount = amount;
        this.currency = currency;
        this.entryType = entryType;

        this.createdAt = Instant.now(); // set creation timestamp
    }
    protected LedgerEntry() {
    }

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "User ID", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Account ID", nullable = false)
    private Account account;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Transaction ID", nullable = false)
    private Transaction transaction;


    @Column(nullable = false, precision = 19, scale = 4)
    private BigDecimal amount;

    @Column(nullable = false, length = 3)
    private String currency; // ISO-4217 (USD, EUR, etc.)

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EntryType entryType;


    @Column(name = "Created At", nullable = false, updatable = false)
    private Instant createdAt;


    // ===== Getters =====

    public UUID getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Account getAccount() {
        return account;
    }

    public Transaction getTransaction() {
        return transaction;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public String getCurrency() {
        return currency;
    }

    public EntryType getEntryType() {
        return entryType;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }


    // ===== Setters =====

    public void setUser(User user) {
        this.user = user;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public void setEntryType(EntryType entryType) {
        this.entryType = entryType;
    }



}
