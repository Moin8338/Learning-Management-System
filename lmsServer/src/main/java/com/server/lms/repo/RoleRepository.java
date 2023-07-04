package com.server.lms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.lms.model.Role;

public interface RoleRepository extends JpaRepository<Role,Long>{
    
}
