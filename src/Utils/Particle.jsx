import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import ParticleConfig from "./ParticleConfig";
import { useLocation } from "react-router-dom";

const Particle = () => {
    const handleInit=async(main)=>{
        await loadFull(main)
      }
      const location=useLocation()
     

      const renderParticleHomePage=location.pathname==='/';
      
    return (

        <div>
            {
                renderParticleHomePage && 
                <Particles id="particles"init={handleInit} options={ParticleConfig}/> 
            }
              
        </div>
    );
};

export default Particle;