import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './Component/Helpers/AuthContext';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [authState, setAuthState] = useState({
    id:null,
    username: "",
    email:"",
    first_name:"",
    last_name:"",
    points:"",
    registration_date:"",
    image_path:null,
    logged: false,
  });

  useEffect(()=> {


  }, []);

  return (
    <div>
      <AuthContext.Provider value={[ authState, setAuthState]}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </AuthContext.Provider>
    </div>
  )
}

export default App
