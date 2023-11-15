import { Link, Navigate } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../Helpers/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Navbar = () => {


    const [authState,setAuthState] = useContext(AuthContext);
    return (
        <nav className="navbar-container">
            <div className="navbar_container_menu">
                <div className='logo-container'>
                    <h1 className="logo">Khabo</h1>
                </div>
                <div className='menu'>
                    <ul className="menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-item">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search/byDescription" className="nav-item">Recipe</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search/byIngredients" className="nav-item">Ingredients</Link>
                        </li>
                        {(authState.logged) && 
                        <li className="nav-item">
                            <Link to="/create" className="nav-item">Create</Link>
                        </li>}
                        {(authState.logged==false) && 
                            <li className='nav-item'>
                                <Link to='/signin'><button>Login</button></Link>
                            </li>}
                        {(authState.logged==true) && 
                            <li className='nav-item'>
                                <Link to='/profile'><button>Profile</button></Link>
                            </li>}
                        
                    </ul>
                </div>
            </div>
        </nav>
    

    );
};

export default Navbar;