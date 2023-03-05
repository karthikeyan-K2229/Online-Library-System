package com.project.onlineLibrary.service;

import com.project.onlineLibrary.entity.AddToCart;
import com.project.onlineLibrary.exception.NotFoundException;
import com.project.onlineLibrary.repository.AddToCartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddToCartService {
    @Autowired
    private AddToCartRepo repo;
    public AddToCart saveUser(AddToCart user) {
        return repo.save(user);
    }

    public List<AddToCart> getByUserid(int userid) {
      return (List<AddToCart>) repo.findByuserid(userid);
    }

    public void deletecart(int id) {
        repo.deleteById(id);
    }
}
