package com.server.lms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.server.lms.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByUsername(String username);

    public void deleteByUsername(String username);

    @Query(value = "SELECT * FROM USER WHERE authorities.authority = ADMIN", nativeQuery = true)
    public List<User> getUsersByRole();
}
