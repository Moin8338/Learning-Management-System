import './style.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NormalUserViewCourse = () => {
    const location = useLocation();


    return (
        <>
            <Header />
            <div class="main-container">
                <Navbar />
                <div class="main">

                    <div class="viewCourseDetail-container " id="profile">

                        <div className="container">
                            <div className="course-vedio">
                                <iframe allowfullscreen='true' src={location.state.data.vedioLink} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
                                    </div>
                                    <div className="course-content">
                                        <h1 class="course-title">{location.state.data.title}</h1>
                                        <h4>{location.state.data.headline}</h4>
                                        <p>{location.state.data.description}</p>
                                        <div style={{ display: "flex" }}>
                                            <p style={{ margin: "0 50px 0 0" }}><span>Defficulty Level :</span> {location.state.data.deficultyLevel}</p>
                                            <p><span>Category :</span> {location.state.data.category}</p>
                                        </div>
                                        <button type="button">FullScreen Enable</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            );
}
            export default NormalUserViewCourse;