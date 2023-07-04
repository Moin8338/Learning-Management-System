import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import CourseService from "../../services/courseService";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const [Course, setCourse] = useState({
        "id":'',
        "title":'',
        "headline":'',
        "deficultyLevel":'',
        "category":'',
        "description":'',
        "vedioLink":'',
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setCourse({ ...Course, [name]: value })
    }

    useEffect(() => {
            setCourse(location.state.data);
    }, []);

    const courseService = new CourseService();

    const updateCourse = () =>{
        courseService.updateCourse(Course).then((response) => {
            alert("Course is update");
            navigate("/admin/viewCourse/",{state:{data : response.data}});
        })
        .catch((error) => {
            alert("Something Went Wrong !!");
            console.log(error);
        });
    }

    return(
        <>
        <Header />
        <div class="main-container">
        <Navbar />
        <div class="main">
            
        <div class="add-course-container add-course" id="add-course">
                <div class="report-header">
                    <h1 class="recent-Articles">Create Course</h1>
                </div>
<div class="container">
        <h1>Update Course</h1>
        <p>Have any questions or suggestions? Drop us a message</p>
        <form>
            <div class="row">
                <div class="column">
                    <label for="course-name">Course Name</label>
                    <input type="text" id="course-name" name="title" onChange={handleInputs} value={Course.title} placeholder="Course name here" />
                </div>
                <div class="column">
                    <label for="headline">Headline</label>
                    <input type="text" id="headline" name="headline" onChange={handleInputs} value={Course.headline} placeholder="Headline here" />
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="category">Category</label>
                    <select  defaultValue="Select category" name="category" onChange={handleInputs} value={Course.category} id="category">
                        <option disabled value="">Select category</option>
                        <option value="Programming">Programming</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Soft Skill">Soft Skill</option>
                    </select>
                </div>
                <div class="column">
                    <label for="difficulty">difficulty Level</label>
                    <select defaultValue="select difficulty Level" name="deficultyLevel" onChange={handleInputs} value={Course.deficultyLevel} id="difficulty">
                        <option  disabled value="">select difficulty Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advance">Advance</option>
                    </select>
                </div>
            </div>
            <div class="column">
                    <label for="vedio">Vedio link</label>
                    <input type="text" id="vedio" name="vedioLink" onChange={handleInputs} value={Course.vedioLink} placeholder="Paste it here your course vedio link" />
                </div>
            <div class="row">
                <div class="column">
                    <label for="description">Describe your issue</label>
                    <textarea id="description" name="description" onChange={handleInputs} value={Course.description} placeholder="Describe your Course here" rows="3"></textarea>
                </div>
            </div>
            <button onClick={updateCourse}>update</button>
        </form>
    </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default Update;