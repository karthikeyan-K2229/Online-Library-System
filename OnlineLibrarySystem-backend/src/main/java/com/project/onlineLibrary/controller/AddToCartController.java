package com.project.onlineLibrary.controller;


import com.project.onlineLibrary.entity.AddBook;
import com.project.onlineLibrary.entity.AddToCart;
import com.project.onlineLibrary.entity.LoginRegister;
import com.project.onlineLibrary.repository.AddToCartRepo;
import com.project.onlineLibrary.service.AddToCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AddToCartController {
    @Autowired
    private AddToCartService service;
    @Autowired
    private AddToCartRepo repo;

    @PostMapping("/addtocart")
    public ResponseEntity<AddToCart> userbookevent(@RequestBody AddToCart user)
    {
        AddToCart userObj = null;
        userObj = service.saveUser(user);
        if(userObj!=null) {

            return new ResponseEntity<AddToCart>(userObj, HttpStatus.OK);
        }else
        {
            return new ResponseEntity<>(user, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getcartbyid/{userid}")
    public ResponseEntity<List<AddToCart>> getUser(@PathVariable int userid)
    {

        List<AddToCart> user=service.getByUserid(userid);
        return new ResponseEntity<List<AddToCart>>(user,HttpStatus.OK);
    }
    @DeleteMapping("/deletecart/{id}")
    public ResponseEntity<AddToCart> deletecart(@PathVariable int id)
    {
        service.deletecart(id);
        return new ResponseEntity<AddToCart>(HttpStatus.OK);
    }
}
