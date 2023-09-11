import  { useState } from 'react';
import './SignIn.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Helpers/AuthContext';
import { useContext } from 'react';
import { useEffect } from 'react';

function SignIn() {
    const [authState,setAuthState]= useContext(AuthContext);
    let navigate = useNavigate();  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [serverResponse,setServerResponse] =useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://khabo.pythonanywhere.com/login/", {
        username: formData.username, 
        password: formData.password
    })
      .then((response) => {
        if (response.status === 200) {
            // Handle successful login, e.g., redirect to another page
            console.log("Login successful");
            setServerResponse(response.data);
            console.log(response.data)
            setAuthState({ 
                            id:response.data.user.id,
                            username:response.data.user.username,
                            email:response.data.user.email,
                            first_name:response.data.user.first_name,
                            last_name:response.data.user.last_name,
                            points:response.data.user.points,
                            registration_date:response.data.user.registration_date,
                            image_path:response.data.user.image_path,
                            logged:true})
            navigate('/profile');
          } else {
            // Handle unexpected response (e.g., non-200 status code)
            console.log("Unexpected response:", response.status);
          }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
            // Unauthorized error: handle it, e.g., show an error message to the user
            console.error("Unauthorized access. Please check your credentials.");
          } else {
            // Handle other errors
            console.error("Error fetching data:", error);
          }
      });
     // navigate("/")
  };


  return (
    <div className="signup-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
