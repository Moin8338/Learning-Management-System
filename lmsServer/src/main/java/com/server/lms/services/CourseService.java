package com.server.lms.services;

import java.util.List;

import com.server.lms.model.course;

public interface CourseService {
    public course creatcourse(course c);

    public List<course> GetAllCourses();

    public course GetCourse(int id);

    public boolean deleteCourseById(int id);

    public course updateCourse(course c);
}
