import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Helpers/AuthContext';
import { useLocation } from 'react-router-dom';

function Profile() {
  const { state } = useLocation();
  
  const [authState,setAuthState] = useContext(AuthContext);
  return (
    <div>
      <h1><b>Profile Page</b></h1>
      <p>Name: {authState.username}</p>
      <p>Email: {authState.email}</p>
      <p>First Name: {authState.first_name}</p>
      <p>Last Name: {authState.last_name}</p>
      <p>Points: {authState.points}</p>
      <p>Registration Date: {authState.registration_date}</p>
      <img src={"https://khabo.pythonanywhere.com"+authState.image_path} alt="image" />
      <p>image path:{authState.image_path} </p>
    </div>
  );
}

export default Profile;
