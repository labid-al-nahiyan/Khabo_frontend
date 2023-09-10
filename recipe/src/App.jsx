import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
