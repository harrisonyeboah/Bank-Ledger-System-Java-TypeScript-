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

// Data Type Import
import java.time.LocalDate; 
import java.util.UUID;
import java.util.Optional;
import java.util.List;



@Controller
public class UserController {
    // Making in instance of my userService
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // CREATE
    @PostMapping("/createUser")
    @ResponseBody
    public String createUser(@RequestParam String firstName, String lastName, String yourSSN, LocalDate yourDOB) {
        String userInformation = userService.createUser(firstName, lastName, yourSSN, yourDOB);
        return userInformation;
    }

    // READ 
    @GetMapping("/getUser")
    @ResponseBody
    public Optional<User> getOneuser(@RequestParam UUID userId) {
        System.out.println(userId.getClass());
        return userService.findUser(userId);
    }


    @GetMapping("/getAllUsers")
    @ResponseBody
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @PutMapping("updateUser") 
    @ResponseBody
    public String updateString(@RequestParam UUID userId, String firstName, String lastName, String yourSSN, LocalDate yourDOB) {
        userService.updateUser(userId, firstName, lastName, yourSSN, yourDOB);
        return "User Updated";
    }

    // DELETE
    @DeleteMapping("/deleteUser") 
    @ResponseBody
    public String deleteOneUser(@RequestParam UUID userId) {
        userService.deleteUser(userId);
        return "User deleted";
    }
    





}