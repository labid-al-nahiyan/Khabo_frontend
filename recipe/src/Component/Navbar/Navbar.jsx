import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
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
                        <li className="nav-item">
                            <Link to="/create" className="nav-item">Create</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/signup' className="nav-item"><button>Sign Up</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    

    );
};

export default Navbar;