import './style.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import UserService from '../../services/UserService';
import Course from '../Course/Course';
import { useLocation, useNavigate } from 'react-router-dom';
import CourseService from '../../services/courseService';

const ViewCourse = () => {
const location = useLocation();
const navigate = useNavigate();
const ViewCourseDetail = (event, ObjData) =>{
    navigate("/admin/updateCourse/",{state:{data : location.state.data}});
}
const courseService =new CourseService();
const deleteCourse = () =>{
    courseService.deleteCourse(location.state.data).then((response)=>{
        alert("course deleted Succesfully !!!");
        navigate("/admin/course");
    })
    .catch((error)=>{
        alert("something went wrong");
    });
}



    return (
        <>
            <Header />
            <div class="main-container">
                <Navbar />
                <div class="main">

                    <div class="viewCourseDetail-container " id="profile">

                        <div className="container">
                            <div className="course-vedio">
                                <iframe allowfullscreen="true" src={location.state.data.vedioLink} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' ></iframe>

                            </div>
                            <div className="course-content">
                                <h1 class="course-title">{location.state.data.title}</h1>
                                <h4>{location.state.data.headline}</h4>
                                <p>{location.state.data.description}</p>
                                <div style={{ display: "flex" }}>
                                    <p style={{margin: "0 50px 0 0"}}><span>Defficulty Level :</span> {location.state.data.deficultyLevel}</p>
                                    <p><span>Category :</span> {location.state.data.category}</p>
                                </div>
                                <div>
                                <button type="button" onClick={ViewCourseDetail}>Update Course</button>
                                <button type="button" style={{"background-color":"#5500cb","color":"white","margin-left":".5rem"}} onClick={deleteCourse}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ViewCourse;