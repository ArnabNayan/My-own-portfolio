import { Link } from 'react-router-dom';
import './styles.css';
import { Animate } from "react-simple-animate";
import { FaDownload,FaFacebook, FaLinkedin } from 'react-icons/fa';
import resume from '../../assets/Image/Untitled document (1) (2).pdf'
import Footer from '../Footer/Index';
const Home = () => {
    return (
        
        <section id="home"className="home">
         
            <div className="home_text">
               <h1>
                Hello,I am Arnab
                <br/>
                Front End Developer 
                
               </h1>
            </div>
            {/* <div className='img'>
                <img className='image' src="/src/assets/Image/IMG-20220519-WA0000.png" alt="" />
            </div> */}
            
            <Animate 
            play
            duration={2}
            deley={2}
            start={{
                transform:"translateX(550px)",
            }
            }
            end={{
                transform:"translatex(0px)",
            }
            }>
                <div className='homes'>
            <div className='home-contact-me'>
                <Link to='/contact'><button>Hire me</button></Link>  
            </div>
            <div className='home-contact-me'>
               <div className='icon'>
               <div>
                <a href={resume}download="resume" target='blank'>Resume</a>
                </div>
                <div><FaDownload size={24} /></div>
               </div>
               
            </div>
            </div>
            <div className='contact-links'>
                <button className='buttons'>
              <a href="https://www.facebook.com/arnabdas.nayan"target="blank"><FaFacebook /></a>
                </button>
                <div>
                <button className='buttons'>
               <a href="https://www.linkedin.com/in/arnab-das-945ba2280/"target='blank'><FaLinkedin /></a>
                </button>
                </div>
            </div>
            </Animate>
       
            <Footer></Footer>
        </section>
        
        
    );
};

export default Home;