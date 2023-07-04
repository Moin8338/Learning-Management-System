import './profile.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import UserService from '../../services/UserService';

const NormalUserProfile = () => {
    const [user, setUser] = useState({});
    const userService = new UserService();
    const fetchInfo = () => {
        setUser(userService.getUser());
        console.log(user);
    }
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    useEffect(() => {
        fetchInfo();
        console.log(user);
    }, []);


    const updateProfileDetails = () =>{
        userService.updateUser(user).then((response) => {
            userService.setUser(response.data);
            console.log(response.data);
            alert("profile Updated");
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
            
        <div class="profile-container profile" id="profile">
                <div class="report-header">
                    <h1 class="recent-Articles">Profile</h1>
                </div>
<div class="container">
        <h1>Update Profile</h1>
        <p>Have any questions or suggestions? Drop us a message</p>
        <form>
            <div class="row">
            <div class="column">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" onChange={handleInputs} value={user.username} placeholder="Your Username" />
                </div>
                <div class="column">
                    <label for="firstname">Firstname</label>
                    <input type="text" id="firstname" name="firstname" onChange={handleInputs} value={user.firstname} placeholder="Your first name" />
                </div>
                <div class="column">
                    <label for="lastname">Lastname</label>
                    <input type="text" id="lastname" name="lastname" onChange={handleInputs} value={user.lastname} placeholder="Your last name" />
                </div>
                <div class="column">
                    <label for="phone">Phone</label>
                    <input type="number" id="phone" name="phone" onChange={handleInputs} value={user.phone} placeholder="Enter your Phone number" />
                </div>
            </div>
            <div class="column" style={{marginBottom : "1rem"}}>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" onChange={handleInputs} value={user.email} placeholder="Enter your Email" />
                </div>
            
            {/* <div class="row">
                <div class="column">
                    <label for="description">Describe your issue</label>
                    <textarea id="description" name="description" onChange={handleInputs} value={user.description} placeholder="Describe your issue in detail here" rows="3"></textarea>
                </div>
            </div> */}
            <button onClick={updateProfileDetails}>Update Profile</button>
        </form>
    </div>
        </div>
        </div>
        </div>
        </>
    );
}
export default NormalUserProfile ;