import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Particle from "../../Utils/Particle";





const Main = () => {
  
    return (
        <div> 
          
            <Navbar></Navbar>
            <Particle></Particle>
           <Outlet></Outlet> 
      
          
        </div>
    );
};

export default Main;