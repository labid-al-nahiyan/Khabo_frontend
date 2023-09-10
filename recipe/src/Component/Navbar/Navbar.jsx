import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar_container">
                <div className='logo-container'>
                    <h1 className="logo">Khabo</h1>
                </div>
                <div className='menu'>
                    <ul className="menu">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search/byDescription">Recipe</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search/byIngredients">Ingredients</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create">Create</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;