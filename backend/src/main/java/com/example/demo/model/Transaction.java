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
import com.example.demo.enums.TransactionType;
import com.example.demo.enums.TransactionStatus;


@Entity
@Table(name = "transactions")
public class Transaction {

    // This is my transaction for when I am sending in my 
    public Transaction(User user, Account account, TransactionType type,
                       BigDecimal amount, String currency, TransactionStatus status,
                       String externalRef) {
        this.user = user;
        this.account = account;
        this.type = type;
        this.amount = amount;
        this.currency = currency;
        this.status = status;
        this.externalRef = externalRef;
        this.createdAt = Instant.now(); // set creation timestamp
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


    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TransactionType type;

    @Column(nullable = false, precision = 19, scale = 4)
    private BigDecimal amount;

    @Column(nullable = false, length = 3)
    private String currency; // ISO-4217 (USD, EUR, etc.)

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TransactionStatus status;

    @Column(name = "External Ref")
    private String externalRef;

    @Column(name = "Created At", nullable = false, updatable = false)
    private Instant createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
    }

    // getters & setters omitted for brevity
}
