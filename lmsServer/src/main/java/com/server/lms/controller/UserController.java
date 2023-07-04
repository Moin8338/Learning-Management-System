package com.server.lms.controller;

import java.security.Principal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.lms.model.Role;
import com.server.lms.model.User;
import com.server.lms.model.userRole;
import com.server.lms.services.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Autowired
    private UserService userService;

    @Autowired
    private UserDetailsService userDetailsService;

    @GetMapping("/test")
    public String test() {
        return "welcome to backend api of Examportal";
    }

    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User user) {

        try {
            Set<userRole> roles = new HashSet<>();
            Role role = new Role();
            role.setRoleName("NORMAL");
            userRole ur = new userRole();
            ur.setRole(role);
            ur.setUser(user);
            roles.add(ur);
            user.setPassword(encoder.encode(user.getPassword()));
            User u = this.userService.creatUser(user, roles);

            if (u == null) {
                return new ResponseEntity<>(user, HttpStatus.valueOf(403));
            }
            return new ResponseEntity<>(u, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new User(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUser(Principal principal) {
        try {
            User u = (User) this.userDetailsService.loadUserByUsername(principal.getName());
            Optional<userRole> ur = u.getUserRoles().stream().findFirst();
            if (ur.get().getRole().getRoleName().equals("ADMIN")) {
                List<User> ListOfUser = new ArrayList<>();
                ListOfUser = this.userService.getAllUser();
                if (ListOfUser.isEmpty()) {
                    return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
                } else {
                    return new ResponseEntity<>(ListOfUser, HttpStatus.OK);
                }
            }
            else{
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @GetMapping("/{username}")
    public User getUserData(@PathVariable("username") String username) {
        return this.userService.GetUser(username);
    }

    @DeleteMapping("/{username}")
    public boolean deleteUser(@PathVariable("username") String username) {
        return this.userService.deleteUserByUsername(username);
    }

    @PutMapping("/")
    public ResponseEntity<User> update(@RequestBody User user) {
        System.out.println(user);
        try {
            System.out.println(
                    "user is updated -------------------------------------\n--------------------------------\n------------\n-------\n");
            // user.setPassword(encoder.encode(user.getPassword()));
            user = this.userService.updateUser(user);
            return new ResponseEntity<>(user, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(
                    "user is not updated -------------------------------------\n--------------------------------\n------------\n-------\n");
            return new ResponseEntity<>(user, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}