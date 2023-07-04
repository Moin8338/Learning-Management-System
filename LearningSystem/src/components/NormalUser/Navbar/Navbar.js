import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

const Navbar = ()=>{
    const navigate=new useNavigate();
    const logout = () => {
        const userService = new UserService();
        if(!userService.logoutUser()){
            alert("logout Successfully");
            navigate("/");
        }else{
            alert("something Went Wrong");
        }

    }
    return (
        <>
            <div class="navcontainer">
            <nav class="nav">
                <div class="nav-upper-options">
                    <a href="/user/dashboard">
                        <div class="nav-option option1">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                class="nav-img" alt="dashboard" />
                            <h3> Dashboard</h3>
                        </div>
                    </a>

                    <a href="/user/course">
                        <div class="option2 nav-option">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                                class="nav-img" alt="articles" />
                            <h3> Courses</h3>
                        </div>
                    </a>

                    {/* <a href="/user/addCourse">
                        <div class="nav-option option3">
                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                                class="nav-img" alt="report" />
                            <h3> Add Course</h3>
                        </div>
                    </a> */}

                    <a href="/user/profile">
                    <div class="nav-option option4">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                            class="nav-img" alt="institution" />
                        <h3>Profile</h3>
                    </div>
                    </a>
                  <div class="nav-option logout" onClick={logout}>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                            class="nav-img" alt="logout" />
                        <h3>Logout</h3>
                    </div>

                </div>
            </nav>
        </div>
        </>
    );
}
export default Navbar;