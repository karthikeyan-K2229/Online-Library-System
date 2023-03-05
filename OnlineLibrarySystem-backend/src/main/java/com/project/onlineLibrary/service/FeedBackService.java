package com.project.onlineLibrary.service;

import com.project.onlineLibrary.entity.FeedBack;
import com.project.onlineLibrary.repository.FeedBackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedBackService {
 @Autowired
 private FeedBackRepo repo;
    public FeedBack saveUser(FeedBack user) {
        return repo.save(user);
    }

    public List<FeedBack> getAllFeedback() {
        return repo.findAll();
    }
}
