import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">Khabo</h1>
                <ul className="nav-links">
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;