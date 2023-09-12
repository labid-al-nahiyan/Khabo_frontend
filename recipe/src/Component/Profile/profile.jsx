import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Helpers/AuthContext';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './profile.css'
import axios from 'axios';
function Profile() {
  const { state } = useLocation();
  
  const [authState,setAuthState] = useContext(AuthContext);

  let navigate=useNavigate();
  const logOut = () => {
      setAuthState({logged:false});
      axios.post("https://khabo.pythonanywhere.com/logout/");
      console.log("hello");  
      navigate("/");
  };
  return (
    <div>

  <div className="sidebar">
      <a href="#">Profile</a>
      <a href="#">Update Profile</a>
      <a href="#">Update Password</a>
      <button className='logoutButton' onClick={logOut}>Logout</button>
    </div>
    <div style={{ 'margin-left':'250px', padding: '20px'}}>
    <h1><b>Profile Page</b></h1>

    <div className="row">
    <div className="col text-center">
    <img  className="mx-auto" src={"https://khabo.pythonanywhere.com"+authState.image_path} alt="image" style={{ height:'300px', width: '300px',display: 'flex',
  'justify-content': 'center'}}/>
    </div>
  </div>
      <p>Name: {authState.username}</p>
      <p>Email: {authState.email}</p>
      <p>First Name: {authState.first_name}</p>
      <p>Last Name: {authState.last_name}</p>
      <p>Points: {authState.points}</p>
      <p>Registration Date: {authState.registration_date}</p>
      
    
    
              
      </div>         
    </div>
  );
}

export default Profile;
