package com.server.lms.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.lms.model.course;
import com.server.lms.services.CourseService;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class courseController {
    
    @Autowired
    CourseService courseService;

    @GetMapping("/")
    public String test()
    {
        return "test";
    }

    @PostMapping("/add-course")
    public ResponseEntity<course> addCourse(@RequestBody course c) {

        try {
             course co=this.courseService.creatcourse(c);

            if (co == null) {
                return new ResponseEntity<>(new course(), HttpStatus.valueOf(403));
            }
            return new ResponseEntity<>(co, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new course(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all-courses")
    public ResponseEntity<?> getAllCourse() throws Exception {
        try{
            List<course> courses=new ArrayList<>();
            courses=courseService.GetAllCourses();
            if(courses.isEmpty()){
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(courses, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update-course")
    public ResponseEntity<course> updateCourse(@RequestBody course c) {

        try {
             course co=this.courseService.GetCourse(c.getId());

            if (co == null) {
                return new ResponseEntity<>(new course(), HttpStatus.NOT_FOUND);
            }
            else{
                co=this.courseService.updateCourse(c);
                if(co==null){
                    return new ResponseEntity<>(co, HttpStatus.NOT_MODIFIED);
                }
            }
            return new ResponseEntity<>(co, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new course(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    @GetMapping("/get-course/{id}")
    public ResponseEntity<course> getCourse(@PathVariable("id") int id){
        try {
            course c=this.courseService.GetCourse(id);
            if(c==null){
                return new ResponseEntity<>(new course(), HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<course>(c,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<course>(new course(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/delete-course/{id}")
    public ResponseEntity<Boolean> deleteCourse(@PathVariable("id") int id){
        try {
            boolean flag=this.courseService.deleteCourseById(id);
            return new ResponseEntity<>(flag,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(false,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}


