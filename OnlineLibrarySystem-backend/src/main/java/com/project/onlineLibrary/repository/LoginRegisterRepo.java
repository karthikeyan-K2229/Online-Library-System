package com.project.onlineLibrary.repository;

import com.project.onlineLibrary.entity.LoginRegister;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRegisterRepo extends JpaRepository<LoginRegister,Long> {
    LoginRegister findByEmail(String currentMail);
    LoginRegister findByEmailAndPassword(String currmail, String currpassword);
}
