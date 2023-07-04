import { useEffect, useState } from "react";
import "../components/home.css";
import UserService from "./services/UserService";
import { useNavigate } from "react-router-dom";

// const user={
//     username:"",
//     email:"",
//     password:"",
//     confirmPassword:""
// }



const move = () => {
    const signupbtn = document.querySelector('.signupBtn');
    const signinbtn = document.querySelector('.signupBtn');
    const formBx = document.querySelector('.formBx');
    const body = document.querySelector('.container1');
    formBx.classList.add("active");
    body.classList.add('active');
}
const moveLeft = () => {
    const signupbtn = document.querySelector('.signupBtn');
    const signinbtn = document.querySelector('.signupBtn');
    const formBx = document.querySelector('.formBx');
    const body = document.querySelector('.container1');
    body.classList.remove('active');
    formBx.classList.remove("active");
}





const Home = () => {
    const userService = new UserService();
    const navigate =new useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const register = () => {
        console.log(user.username + " " + user.email);
        
        userService.addUser(user)
            .then((response) => {
                alert("Form is submitted");
                console.log(response);
            })
            .catch((error) => {
                alert("Something Went Wrong !!");
                console.log(error);
            });
    }


    const login = () => {
        console.log(user.username + " " + user.password);
        const userService = new UserService();
        userService.generateToken({ "username": user.username, "password": user.password }).then(
            (response) => {
                console.log("success");
                //token store in localStorage
                userService.loginUser(response.data.token);

                //get currentUser Details
                userService.getCurrentUser().then(
                    (user) => {
                        userService.setUser(user.data);

                        //redirect to ADMIN-Dashboard---------------
                        if (userService.getUserRole() == "ADMIN") {
                            navigate("/admin/dashboard/");
                            localStorage.setItem('redirectURL','/admin/');
                        }
                        //redirect to NORMAL-Dashboard---------------
                        else if (userService.getUserRole() == "NORMAL") {
                            navigate("/user/dashboard/");
                            localStorage.setItem('redirectURL','/user/');

                        }
                        //if no Role specified
                        else {
                            console.log("Role is not specified");
                            userService.logoutUser();
                            // location.reload();
                        }

                    },
                    (error) => {
                        console.log(error);
                    }
                );
            },
            (error) => {
                if (error.code == 500) {
                    alert("invalid Credential");
                }
                else {
                    alert("INTERNAL SERVER ERROR");
                }
            }
        );

    }

    useEffect(() => {
        if(userService.isLoggedIn()){
            navigate(localStorage.getItem('redirectURL')+'dashboard/');
        }
    }, []);
    return (
        <>
            <div className="container1">
                <div className="container2">
                    <div className="bluebg">
                        <div className="box signin">
                            <h2>Already Have an Account ? </h2>
                            <button className="signinbutton" onClick={moveLeft}>Sign in</button>
                        </div>
                        <div className="box signup">
                            <h2>Don't Have an Account ?</h2>
                            <button className="signupBtn" onClick={move}>Sign up</button>
                        </div>
                    </div>
                    <div className="formBx">
                        <div className="form signin">
                            <form>
                                <h3>Sign In</h3>
                                <input type="text" name="username" onChange={handleInputs} value={user.username} placeholder="Username" />
                                <input type="password" name="password" onChange={handleInputs} value={user.password} placeholder="Password" />
                                <input type="button" onClick={login} value="Login" />
                                <a href="#" className="forgot">Forgot Password</a>
                            </form>
                        </div>
                        <div className="form signup">
                            <form>
                                <h3>Sign Up</h3>
                                <input type="text" name="username" onChange={handleInputs} value={user.username} placeholder="Username" />
                                <input type="email" name="email" onChange={handleInputs} value={user.email} placeholder="Email Address" />
                                <input type="password" name="password" onChange={handleInputs} value={user.password} placeholder="Password" />
                                <input type="password" name="confirmPassword" onChange={handleInputs} value={user.confirmPassword} placeholder="Confirm Password" />
                                <input type="button" onClick={register} value="Register" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;