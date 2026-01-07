// Path Import
package com.example.demo.controller;

// Spring Boot Imports
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;


// Class Imports
import com.example.demo.model.User; 
import com.example.demo.service.UserService;
import com.example.demo.repository.UserRepository;

// Data Type Import
import java.time.LocalDate; 



@Controller
public class UserController {
    // Making in instance of my userService
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/createUser")
    @ResponseBody
    public String createUser(@RequestParam String firstName, String lastName, String yourSSN, LocalDate yourDOB) {
        System.out.println("Controller is hit " + firstName);
        userService.createUser(firstName, lastName, yourSSN, yourDOB);
        return "User is created";
    }
}