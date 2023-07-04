package com.server.lms.services.impl;

import java.util.Set;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.lms.model.User;
import com.server.lms.model.userRole;
import com.server.lms.repo.RoleRepository;
import com.server.lms.repo.UserRepository;
import com.server.lms.services.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User creatUser(User user, Set<userRole> userRoles) {
        User local = null;
        try {
            local = this.userRepository.findByUsername(user.getUsername());

            if (local != null) {
                local=null;
                throw new Exception("user already there");
            } else {
                // create user
                for (userRole ur : userRoles) {
                    roleRepository.save(ur.getRole());
                }
                user.getUserRoles().addAll(userRoles);
                local = this.userRepository.save(user);
            }
        } catch (Exception e) {
            System.out.println("user already there");
        }
        return local;
    }

    @Override
    public User GetUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public boolean deleteUserByUsername(String username) {
        if(this.userRepository.findByUsername(username)!=null){
            this.userRepository.deleteByUsername(username);
            return true;
        }
        return false;
    }

    @Override
    public User updateUser(User user) {
        return this.userRepository.saveAndFlush(user);
    }

    @Override
    public List<User> getAllUser() {
        List<User> ListU=new ArrayList<>();
        ListU=this.userRepository.findAll().stream().filter( user -> user.getUserRoles().stream().findFirst().get().getRole().getRoleName().equals("NORMAL")).collect(Collectors.toList());
        // System.out.println(ListU);
        return ListU;
    }
}
