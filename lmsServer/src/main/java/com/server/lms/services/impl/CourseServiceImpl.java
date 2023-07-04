package com.server.lms.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException.NotFound;

import com.server.lms.model.course;
import com.server.lms.repo.CourseRepository;
import com.server.lms.services.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    CourseRepository courseRepository;

    @Override
    public course creatcourse(course c) {
        course local = null;
        try {
            local = this.courseRepository.save(c);
        } catch (Exception e) {
            System.out.println("Somthing went wrong "+e);
        }
        return local;
    }

    @Override
    public course GetCourse(int id) {
        try {
            Optional<course> c = null;
            c = this.courseRepository.findById(id);
            return c.get();
        } catch (Exception e) {
            System.out.println("Somthing went wrong "+e);
            return null;
        }
    }

    @Override
    public boolean deleteCourseById(int id) {
        try {
            Optional<course> c = this.courseRepository.findById(id);
            if (c == null) {
                System.out.println("No Data Found");
                return false;
            } else {
                this.courseRepository.deleteById(id);
                System.out.println("course is deleted");
                return true;
            }
        } catch (Exception e) {
            System.out.println("Somthing went wrong "+e);
            return false;
        }
    }

    @Override
    public course updateCourse(course c) {
        try {

            Optional<course> local = this.courseRepository.findById(c.getId());
            if (local == null) {
                System.out.println("No course found");
                return null;
            } else {
                c = this.courseRepository.save(c);
                return c;
            }
        } catch (Exception e) {
            System.out.println("Somthing went wrong "+e);
            return null;
        }
    }

    @Override
    public List<course> GetAllCourses() {
       try{
            List<course> courses = new ArrayList<>();
            courses=courseRepository.findAll();
            return courses;
       }
       catch(Exception e){
        System.out.println("Exception : "+e);
            return null;
       }
    }

}
