package com.project.onlineLibrary.service;


import com.project.onlineLibrary.entity.LoginRegister;
import com.project.onlineLibrary.exception.NotFoundException;
import com.project.onlineLibrary.repository.LoginRegisterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginRegisterService {
    @Autowired
    private LoginRegisterRepo Repository;

    public LoginRegister saveUser(LoginRegister user)throws  Exception
    {
        String currentMail=user.getEmail();
        String currPhone=user.getPhone();
        LoginRegister userObj = Repository.findByEmail(currentMail);
        if(userObj != null)
        {
            throw new Exception("Email id already exists !!!");
        }
        return Repository.save(user);
    }

    public LoginRegister fetchByEmail(LoginRegister user) {
        String currmail= user.getEmail();
        String currpassword=user.getPassword();
        LoginRegister User=Repository.findByEmailAndPassword(currmail,currpassword);
        return User;
    }

    public LoginRegister getById(Long id) {
            return Repository.findById(id).orElseThrow(()-> new NotFoundException("User Not Found"));
        }


}
