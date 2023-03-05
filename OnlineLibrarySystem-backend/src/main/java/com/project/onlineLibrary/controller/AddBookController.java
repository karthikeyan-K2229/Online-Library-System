package com.project.onlineLibrary.controller;

import com.project.onlineLibrary.entity.AddBook;
import com.project.onlineLibrary.entity.LoginRegister;
import com.project.onlineLibrary.exception.NotFoundException;
import com.project.onlineLibrary.repository.AddBookRepo;
import com.project.onlineLibrary.service.AddBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AddBookController {
    @Autowired
    private AddBookService service;
    @Autowired
    private AddBookRepo repo;

    @PostMapping("/addbook")
    public ResponseEntity<AddBook> addbook(@RequestBody AddBook addBook)
    {
        try{
            AddBook userobj=null;
            String currbook=addBook.getBookname();
            AddBook user=service.findByBookname(currbook);
            if(user!=null)
            {
                throw new Exception("Already Exits");
            }
            userobj=service.saveBook(addBook);
            return new ResponseEntity<AddBook>(addBook, HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getBook")
    public ResponseEntity<List<AddBook>> gettAll()
    {
        List<AddBook> user=service.getAllBook();
        return new ResponseEntity<List<AddBook>>(user,HttpStatus.OK);
    }

    @DeleteMapping("/deletebook/{id}")
    public ResponseEntity<AddBook> deletebook(@PathVariable int id)
    {
        service.deletebook(id);
        return new ResponseEntity<AddBook>(HttpStatus.OK);
    }

    @GetMapping("/getbookbyid/{id}")
    public ResponseEntity<Optional<Object>> getBookByid(@PathVariable int id)
    {
        Optional<Object> user=service.fetchById(id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/editBook/{id}")
    public ResponseEntity<AddBook> updateBook(@PathVariable int id,@RequestBody AddBook addBook)throws NotFoundException
    {
        service.updateBook(id,addBook);
        return new ResponseEntity<AddBook>(HttpStatus.OK);
    }

    @GetMapping("/getTotalBooks")
    @CrossOrigin(origins="http://localhost:4200")
    public ResponseEntity<List<Integer>> getTotalBooks()throws Exception
    {
        List<AddBook> book=repo.findAll();
        List<Integer> count=new ArrayList<>();
        count.add(book.size());
        return new ResponseEntity<List<Integer>>(count,HttpStatus.OK);
    }
 }
