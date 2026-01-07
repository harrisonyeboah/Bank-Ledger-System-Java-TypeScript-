package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class YeboahBankController {

    @RequestMapping("/YeboahHealth")
    @ResponseBody
    public String YeboahHealthEndpoint() {
        return "Our API is officially working";
    }
    

}