import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className='home_container'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;