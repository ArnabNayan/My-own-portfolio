import HeaderContainer from "../../Components/HeaderContainer/Index";
import { FaHeart } from 'react-icons/fa';
import './styles.css';
const Skills = () => {
    return (
        <section id="about"className="experience-section">
        <HeaderContainer
         headerText="My Skills"
         icon={<FaHeart size={40}/> }
        />
           <h2 className="header">My Experience Area</h2>
        <div className="skill-main">
      
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">HTML</p>
                 <p className="percent">90%</p>  
              </div>
              <div className="bar">
                <span className="html"></span>
              </div>
          </div>
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">CSS</p>
                 <p className="percent">80%</p>  
              </div>
              <div className="bar">
                <span className="css"></span>
              </div>
          </div>
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">JavaScript</p>
                 <p className="percent">70%</p>  
              </div>
              <div className="bar">
                <span className="js"></span>
              </div>
          </div>
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">Tailwind CSS</p>
                 <p className="percent">90%</p>  
              </div>
              <div className="bar">
                <span className="tailwind"></span>
              </div>
          </div>
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">Bootstrap</p>
                 <p className="percent">80%</p>  
              </div>
              <div className="bar">
                <span className="bootstrap"></span>
              </div>
          </div>
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">React Js</p>
                 <p className="percent">80%</p>  
              </div>
              <div className="bar">
                <span className="react"></span>
              </div>
          </div>
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">Mongo DB</p>
                 <p className="percent">60%</p>  
              </div>
              <div className="bar">
                <span className="mongo"></span>
              </div>
          </div>
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">Node Js</p>
                 <p className="percent">65%</p>  
              </div>
              <div className="bar">
                <span className="node"></span>
              </div>
          </div>
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">Express Js</p>
                 <p className="percent">60%</p>  
              </div>
              <div className="bar">
                <span className="express"></span>
              </div>
          </div>
          <div className="skill-bar">
              <div className="info">
                 <p className="paragraph">Firebase</p>
                 <p className="percent">75%</p>  
              </div>
              <div className="bar">
                <span className="firebase"></span>
              </div>
          </div>
         </div>
        
       </section>
    );
};

export default Skills;