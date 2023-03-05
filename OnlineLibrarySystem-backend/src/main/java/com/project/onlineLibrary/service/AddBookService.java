package com.project.onlineLibrary.service;

import com.project.onlineLibrary.entity.AddBook;
import com.project.onlineLibrary.exception.NotFoundException;
import com.project.onlineLibrary.repository.AddBookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddBookService {
    private static final String NOTFOUND="Book does not exist ";
    @Autowired
    private AddBookRepo repository;
    public AddBook findByBookname(String currbook) {
        AddBook user=repository.findByBookname(currbook);
        return user;
    }

    public AddBook saveBook(AddBook addBook) {
        return repository.save(addBook);
    }

    public List<AddBook> getAllBook() {
        return (List<AddBook>) repository.findAll();
    }

    public void deletebook(int id) {
         repository.deleteById(id);
    }

    public Optional<Object> fetchById(int id) {
        AddBook user=repository.findById(id).orElseThrow(()->new NotFoundException(NOTFOUND +id));
        return Optional.ofNullable(user);
    }

    public AddBook updateBook(int id, AddBook addBook) {
        AddBook user=repository.findById(id).orElseThrow(()->new NotFoundException(NOTFOUND +id));
        user.setBookname(addBook.getBookname());
        user.setAuthor(addBook.getAuthor());
        user.setImageurl(addBook.getImageurl());
        user.setWebsite(addBook.getWebsite());
        return repository.save(user);
    }
}
