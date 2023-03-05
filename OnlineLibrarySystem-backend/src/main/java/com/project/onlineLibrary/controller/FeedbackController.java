package com.project.onlineLibrary.controller;


import com.project.onlineLibrary.entity.FeedBack;
import com.project.onlineLibrary.entity.LoginRegister;
import com.project.onlineLibrary.exception.NotFoundException;
import com.project.onlineLibrary.repository.FeedBackRepo;
import com.project.onlineLibrary.service.FeedBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class FeedbackController {
    @Autowired
    private FeedBackService service;
    @Autowired
    private FeedBackRepo repo;

    @PostMapping("/feedback")
    public ResponseEntity<FeedBack> userbookevent(@RequestBody FeedBack user)
    {
        FeedBack userObj = null;
        userObj = service.saveUser(user);
        return new ResponseEntity<FeedBack>(userObj, HttpStatus.OK);
    }
    @GetMapping("/allFeedBack")
    public ResponseEntity<List<FeedBack>> getAllFeed()
    {
        List<FeedBack> feedBacks=service.getAllFeedback();
        return new ResponseEntity<>(feedBacks,HttpStatus.OK);
    }
    @DeleteMapping("/deletefeedback/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable Integer id){
        FeedBack user=repo.findById(id).orElseThrow(()->new NotFoundException("Feedback does not exist with id :" +id ));
        repo.delete(user);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
