import React, { Component } from 'react';
import axios from 'axios';

class UserService {
  token="";
  constructor() {
    this.axios = axios;
  }

  addUser(user){
    return this.axios.post('http://localhost:8080/user/',user);
  }

  updateUser(user){
    console.log(user);
    return this.axios.put('http://localhost:8080/user/',user);
  }

  generateToken(loginData) {
    return this.axios.post(`http://localhost:8080/generate-token/`, loginData);
  }
      
  //get current user
  getCurrentUser(){
    return this.axios.get("http://localhost:8080/current-user");
   }

  //loginUser method store an authentication_token in local storage
  loginUser(token) {
    localStorage.setItem("token", token);
    return true;
  }

  //Check the user is loggged in or not
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token == '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  //logoutUser method Remove an authentication_token from local storage
  logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return false;
  }

  //getToken
  getToken() {
    return localStorage.getItem("token");
  }

  //set User Details
  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  }

  //get User Details
  getUser() {
    let userData = localStorage.getItem("user");
    if (userData != null) {
      return JSON.parse(userData);
    } else {
      this.logoutUser();
      return null;
    }
  }

  //get User Role
  getUserRole() {
    let user = this.getUser();
    if (user != null) {
      return user.authorities[0].authority;
    }
  }

  getAllUser(){
    return this.axios.get("http://localhost:8080/user/");
  }
 
}

export default UserService;
