package com.project.onlineLibrary.controller;

import com.project.onlineLibrary.entity.AddBook;
import com.project.onlineLibrary.entity.LoginRegister;
import com.project.onlineLibrary.exception.NotFoundException;
import com.project.onlineLibrary.repository.LoginRegisterRepo;
import com.project.onlineLibrary.service.LoginRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LoginRegisterController {
    @Autowired
    private LoginRegisterService Service;
    @Autowired
    private LoginRegisterRepo repo;

    @PostMapping("/register")
    public ResponseEntity<LoginRegister> register(@RequestBody LoginRegister user)throws Exception
    {
        try {
            LoginRegister userObj = null;
            userObj = Service.saveUser(user);
            return new ResponseEntity<LoginRegister>(userObj, HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginRegister> login(@RequestBody LoginRegister user)throws Exception
    {
        LoginRegister userObj=null;
        userObj = Service.fetchByEmail(user);
        if(userObj==null){
            return new ResponseEntity("Not found",HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<LoginRegister>(userObj, HttpStatus.OK);
    }

    @GetMapping("/getAllUsers")
    public List<LoginRegister> getAllUsers(){
        return repo.findAll();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<LoginRegister> getUser(@PathVariable Long id)
    {
        LoginRegister user=Service.getById(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable Long id){
        LoginRegister user=repo.findById(id).orElseThrow(()->new NotFoundException("User does not exist with id :" +id ));
        repo.delete(user);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/getTotalusers")
    @CrossOrigin(origins="http://localhost:4200")
    public ResponseEntity<List<Integer>> getTotal()throws Exception
    {
        List<LoginRegister> book=repo.findAll();
        List<Integer> count=new ArrayList<>();
        count.add(book.size());

        return new ResponseEntity<List<Integer>>(count,HttpStatus.OK);
    }
}
