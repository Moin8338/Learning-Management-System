import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

function UserAuthGuard(props) {
    const { Component } = props;
    const navigate = useNavigate();
    const userService = new UserService();
    useEffect(() => {
        if (userService.isLoggedIn()) {
            if (userService.getUserRole() == 'NORMAL') {
                console.log(userService.getUserRole());
                navigate(localStorage.getItem('redirectURL')+'dashboard/');
            }
        }
        else {
            navigate("/");
        }
    });
    return (
        <Component />
    )
}

export default UserAuthGuard;