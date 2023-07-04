package com.server.lms.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.server.lms.model.course;

public interface CourseRepository extends JpaRepository<course, Integer>{
      
}
