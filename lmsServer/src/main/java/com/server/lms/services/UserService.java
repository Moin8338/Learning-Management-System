package com.server.lms.services;

import java.util.Set;
import java.util.List;
import com.server.lms.model.User;
import com.server.lms.model.userRole;


public interface UserService {

    //create user
    public User creatUser(User user,Set<userRole> userRoles);

    public User GetUser(String username);

    public boolean deleteUserByUsername(String username);

    public User updateUser(User user);

    public List<User> getAllUser();
}
