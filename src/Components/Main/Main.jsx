import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import Particle from "../../Utils/Particle";
// import Footer from '../../Containers/Footer/Index';




const Main = () => {
  
    return (
        <div> 
          
            <Navbar></Navbar>
            {/* <Particle></Particle> */}
           
           <Outlet></Outlet> 
            {/* <Footer></Footer>       */}
        </div>
    );
};

export default Main;