import HeaderContainer from "../../Components/HeaderContainer/Index";
import { FaEnvelope,FaWhatsapp } from 'react-icons/fa';
import { Animate } from "react-simple-animate";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aiadwli', 'template_vwcdrlm', form.current,'edjBakxBlXXcURjJw')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <section id="about"className="myclass">
        <HeaderContainer
         headerText="Contact Me"
         icon={<FaEnvelope size={40}/> }
        />
        <h5 className="headers">Get In Touch</h5>
        <div className="containercontact_container">
            <div className="contact_options">
            <Animate 
            play
            duration={2}
            deley={2}
            start={{
                transform:"translateX(-500px)",
            }
            }
            end={{
                transform:"translatex(0px)",
            }
            }>
              <article className="contact_option">
              <FaEnvelope className="col"/>
                <h4>Email</h4>
                <h5>arnabnayan5@gmail.com</h5>
                <a className="text-sky-400 hover:text-red-600" href="mailto:arnabnayan5@gmail.com">Send a message</a>
              </article>
              <article className="contact_option">
           
              <FaWhatsapp className="col"/>
                <h4>Whatsapp</h4>
                <h5>01630299817</h5>
                <a className="text-sky-400 hover:text-red-600" href="https://wa.me/01630299817"target="blank">Send a message</a>
              </article>
              </Animate>
            </div>
           
            <form ref={form}onSubmit={sendEmail}>
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
              <input type="text" name="name"placeholder="Your Name"required />
              <input type="email" name="email"placeholder="Your Email"required />
              <textarea name="message"rows="7"placeholder="Your message"required></textarea>
              <div className="btn-text">
              <button type="submit"className="btn">Send Message</button>
              </div>
              </Animate>
            </form>
        
        </div>
       </section>
    );
};

export default Contact;