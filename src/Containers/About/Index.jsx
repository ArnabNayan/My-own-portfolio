import HeaderContainer from "../../Components/HeaderContainer/Index";
import { FaInfoCircle } from 'react-icons/fa';
import { Animate } from "react-simple-animate";
import image from '../../assets/Image/IMG-20220519-WA0000-removebg-preview (6).png';
import './styles.css'
// const personalDetails=[
//     {
//         label:"Name",
//         value:"Arnab Das",
//     },
//     {
//         label:"Age",
//         value:"23",
//     },
//     {
//         label:"Address",
//         value:"Bangladesh",
//     },
//     {
//         label:"Email",
//         value:"arnabnayan5@gmail.com",
//     },
//     {
//         label:"Contact me",
//         value:"+8801630299817",
//     },
// ]
const jobSummary='I am Arnab Das, a dedicated student pursuing a BSc in Computer Science and Engineering from Port City International University. Over the past year, I have been honing my skills in web development, focusing primarily on front-end development.My journey in web development has been an exciting one, filled with continuous learning and growth. Through my studies and practical experience, I have gained proficiency in HTML, CSS, and JavaScript, enabling me to build dynamic and responsive websites that adapt seamlessly across different devices.As a front-end developer, I am driven by the desire to create meaningful and impactful digital experiences.Ultimately, my goal is to contribute to the development of innovative and user-friendly web applications that make a positive difference in peoples lives.'
const About = () => {
    return (
       <section id="about"className="about">
        <HeaderContainer
         headerText="About Me"
         icon={<FaInfoCircle size={40}/> }
        />
        
        
        <div className="about_contact">
            <div className="personalContent">
            <Animate 
            play
            duration={2}
            deley={2}
            start={{
                transform:"translateX(-900px)",
            }
            }
            end={{
                transform:"translatex(0px)",
            }
            }>
          <h3>Front-End Developer</h3>
          <p>{jobSummary}</p>
          
          </Animate>

          <Animate 
            play
            duration={2}
            deley={2}
            start={{
                transform:"translateX(500px)",
            }
            }
            end={{
                transform:"translatex(0px)",
            }
            }>
          <h4>Personal Information</h4>
          <ul>
            <li>
                <h2>Name : Arnab Das</h2>
                <h2>Age : 23</h2>
                <h2>Address : Bangladesh</h2>
                <h2>Email : arnabnayan5@gmail.com</h2>
                <h2>Contact me : 01630299817</h2>

            </li>
          </ul>
          </Animate>
            </div>
            <div className="image">
            <Animate 
            play
            duration={2}
            deley={2}
            start={{
                transform:"translateX(500px)",
            }
            }
            end={{
                transform:"translatex(0px)",
            }
            }>
                <img src={image}alt="" />
                </Animate>
            </div>
    
        </div>
       </section>
    );
};

export default About;