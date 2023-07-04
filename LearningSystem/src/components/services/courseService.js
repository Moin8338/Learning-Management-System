import React, { Component } from 'react';
import axios from 'axios';

class CourseService {
    constructor() {
      
        this.axios = axios;
      }

      addCourse(course){
        return this.axios.post("http://localhost:8080/admin/add-course/",course);
      }

      getAllCourses(){
        return this.axios.get("http://localhost:8080/admin/all-courses/");
      }

      getCourseById(userId){
        return this.axios.get(`http://localhost:8080/get-course/${userId}`);
      }

      updateCourse(course){
        return this.axios.put(`http://localhost:8080/admin/update-course/`,course);
      }

      deleteCourse(course){
        return this.axios.delete(`http://localhost:8080/admin/delete-course/${course.id}`);
      }


}
export default CourseService;