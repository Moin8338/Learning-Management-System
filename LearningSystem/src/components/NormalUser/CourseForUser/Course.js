import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import team1 from "./team-1.jpg";
import './style.css';
import CourseService from "../../services/courseService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseForUser = () => {
    const [course,setCourse] =  useState({
        "title":"",
        "headline":"",
        "description":"",
        "deficulty_level":"",
        "category":""
    });
    const [Courses, setCourses] = useState([]);
    const courseService = new CourseService();
    const fetchInfo = () => {
        courseService.getAllCourses()
            .then((response) => {
                console.log(response.data);
                setCourses(response.data);
            })
            .catch((error) => {
                alert("Something Went Wrong !!");
                console.log(error);
            });
    }
    
    useEffect(() => {
        fetchInfo();
    }, []);


    // Send data from this Component to viewCourseDetasil
    const navigate = useNavigate();
    const ViewCourseDetail = (event, ObjData) =>{
        navigate("/user/viewCourse/",{state:{data : ObjData}});
    }


    return (
        <>
            <Header />
            <div class="main-container">
                <Navbar />
                <div class="main">
                    <div id="courses" class="course-container">
                        <div class="course-header">
                            <h1 class="recent-Articles">Recent Courses</h1>
                            <div>
                                <a href="/admin/addCourse" class="view">Create</a>
                                <button class="view">All</button>
                            </div>
                        </div>
                        <div class="course-list">
                            <div class="container">
                                <ul class="cards">
                                    {Courses.map((dataObj, index) => {
                                        return (

                                            <li class="cards_item">
                                                <div class="card">
                                                    <div class="card_image"><iframe src={dataObj.vedioLink} title='YouTube video player' frameborder='0'></iframe>
                                                    </div>
                                                    <div class="card_content">
                                                        <h2 class="card_title">{dataObj.title}</h2>
                                                        <p class="card_text">{dataObj.headline}</p>
                                                        <button class="btn card_btn" onClick={(event) => ViewCourseDetail(event, dataObj)}>Enroll Course</button>
                                                    </div>
                                                </div>
                                            </li>

                                        );
                                    })}

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default CourseForUser;