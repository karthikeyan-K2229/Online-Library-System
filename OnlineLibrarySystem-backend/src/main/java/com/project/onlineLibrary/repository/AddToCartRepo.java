package com.project.onlineLibrary.repository;

import com.project.onlineLibrary.entity.AddToCart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AddToCartRepo extends JpaRepository<AddToCart,Integer> {

    public List<AddToCart> findByuserid(int userid);
}
