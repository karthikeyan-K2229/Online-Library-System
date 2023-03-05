package com.project.onlineLibrary.repository;

import com.project.onlineLibrary.entity.AddBook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddBookRepo extends JpaRepository<AddBook,Integer> {
    AddBook findByBookname(String currbook);
}
