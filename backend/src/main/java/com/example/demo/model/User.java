// Imports
package com.example.demo.model;

// Jakarta Imports
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.persistence.Column;

// Java Data Type Imports 
import java.time.LocalDate; 
import java.util.UUID;
@Entity
@Table(name = "users")
public class User {

    /* This is the bank user of the person who banks with Yeboah Bank */
    // This is my user to create a user in the bank
    public User(String firstName, String lastName, String yourSSN, LocalDate yourDOB) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.socialSecurityNumber = yourSSN;
        this.dateOfBirth = yourDOB;
        this.ssnLast4 = yourSSN.substring(yourSSN.length() - 4);
        this.fullName = this.firstName + " " + this.lastName;
    }

    protected User() {
    }

    @Id
    @GeneratedValue
    @Column(length = 36, name= "ID")
    private UUID id;

    @Column(nullable = false, name = "First Name")
    private String firstName;

    @Column(nullable = false, name = "Last Name")
    private String lastName;

    // DO NOT persist fullName — compute it
    @Transient
    private String fullName;

    @Column(length = 11, name = "Social Security Number") // XXX-XX-XXXX
    private String socialSecurityNumber;

    @Column(length = 4, name = "SSN Last Four")
    private String ssnLast4;

    @Column(name = "Date Of Birth")
    private LocalDate dateOfBirth;

    @Column(name = "Date Created")
    private LocalDate createdAt = LocalDate.now();
    /* -------- Getters & Setters -------- */

    // Id
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    // First Name
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String name) {
        this.firstName = name;
    }

    // Last Name
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String name) {
        this.lastName = name;
    }

    // Full Name (derived)
    public String getFullName() {
        return firstName + " " + lastName;
    }

    public void setFullName(String firstName, String lastName) {
        this.fullName = firstName + " " + lastName;
    }

    // SSN
    public String getSocialSecurityNumber() {
        return socialSecurityNumber;
    }

    public void setSocialSecurityNumber(String socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
    }

    public String getSsnLast4() {
        return ssnLast4;
    }

    public void setSsnLast4(String ssnLast4) {
        this.ssnLast4 = ssnLast4;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public String getUserDetails() {
        return "User Details:\n" +
            "ID: " + this.id + "\n" +
            "First Name: " + this.firstName + "\n" +
            "Last Name: " + this.lastName + "\n" +
            "Full Name: " + this.getFullName() + "\n" +
            "Social Security Number: " + this.socialSecurityNumber + "\n" +
            "SSN Last 4: " + this.ssnLast4 + "\n" +
            "Date of Birth: " + this.dateOfBirth + "\n" +
            "Date Created: " + this.createdAt;
    }

}
