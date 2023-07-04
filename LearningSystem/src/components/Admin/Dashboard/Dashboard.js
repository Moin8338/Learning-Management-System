import './style.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import UserService from '../../services/UserService';
function Dashboard() {
    const userService = new UserService;
    const [user, setUsers] = new useState([]);
    useEffect(() => {
        userService.getAllUser().then((response) => {
            console.log(response.data);
            setUsers(response.data);
        }).catch((error) => {
            alert("error" + error);
        })
    }, []);
    return (
        <>
            <Header />
            <div class="main-container">
                <Navbar />
                <div class="main">
                    <div id="dashboard" class="box-container">

                        <div class="box box1">
                            <div class="text">
                                <h2 class="topic-heading">60.5k</h2>
                                <h2 class="topic">Article Views</h2>
                            </div>

                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                                alt="Views" />
                        </div>

                        <div class="box box2">
                            <div class="text">
                                <h2 class="topic-heading">150</h2>
                                <h2 class="topic">Likes</h2>
                            </div>

                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png" alt="likes" />
                        </div>

                        <div class="box box3">
                            <div class="text">
                                <h2 class="topic-heading">320</h2>
                                <h2 class="topic">Comments</h2>
                            </div>

                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                                alt="comments" />
                        </div>

                        <div class="box box4">
                            <div class="text">
                                <h2 class="topic-heading">70</h2>
                                <h2 class="topic">Published</h2>
                            </div>

                            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published" />
                        </div>
                    </div>

                    <div class="report-container">
                        <div class="report-header">
                            <h1 class="recent-Articles">Recent Users</h1>
                            <button class="view">View All</button>
                        </div>

                        <div class="report-body">
                            <div class="report-topic-heading">
                                <h3 class="t-op">ID</h3>
                                <h3 class="t-op">Username</h3>
                                <h3 class="t-op">Name</h3>
                                <h3 class="t-op">Email</h3>
                                <h3 class="t-op">Phone</h3>
                            </div>

                            <div class="items">

                                {user.map((dataObj, index) => {
                                    return (

                                        <div class="item1">
                                            <h3 class="t-op-nextlvl">{dataObj.id}</h3>
                                            <h3 class="t-op-nextlvl">{dataObj.username}</h3>
                                            <h3 class="t-op-nextlvl">{dataObj.firstname+' '+dataObj.lastname}</h3>
                                            <h3 class="t-op-nextlvl">{dataObj.email}</h3>
                                            <h3 class="t-op-nextlvl label-tag">{dataObj.phone}</h3>
                                        </div>

                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Dashboard;