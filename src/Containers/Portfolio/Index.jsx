
import HeaderContainer from "../../Components/HeaderContainer/Index";
import { FaTasks } from 'react-icons/fa';
import { Animate } from "react-simple-animate";
import IMG1 from '../../assets/Image/img1.png'
import IMG2 from '../../assets/Image/img2.png'
import IMG3 from '../../assets/Image/img3.png'
import './styles.css'
import { useState } from "react";
const portfolioData=[
    {
        id:1,
        name:"Food Master",
        image:IMG1,
        client_side:"https://github.com/ArnabNayan/chef-recipe-hunter-client",
        server_side:"https://github.com/ArnabNayan/chef-recipe-hunter-server-side",
        demo:"https://chef-recipe-client-side-9e263.web.app/"
    },
    {
        id:2,
        name:"Toy-Marketplace",
        image:IMG3,
        client_side:"https://github.com/ArnabNayan/toy-marketplace-client-side",
        server_side:"https://github.com/ArnabNayan/toy-merketplace-server-sides",
        demo:"https://toy-marketplace-client-s-2bc21.web.app/"
    },
    {
        id:3,
        name:"Sports Academy",
        image:IMG2,
        client_side:"https://github.com/ArnabNayan/summer-camp-client-side",
        server_side:"https://github.com/ArnabNayan/summer-camp-server-side",
        demo:"https://sports-academy-1aef2.web.app/"
    }
]
const Portfolio = () => {
    const [hoveredValue,setHoveredValue]=useState(null)
    function handleHover(index){
       setHoveredValue(index)
    }
    return (
        <section id="about"className="about">
        <HeaderContainer
         headerText="My Portfolio"
         icon={<FaTasks size={40}/> }
        />
       <h5 className="headers">My Works</h5>
       <div className="portfolio_content">
       <Animate 
            play
            duration={2}
            deley={2}
            start={{
                transform:"translatey(500px)",
            }
            }
            end={{
                transform:"translatex(0px)",
            }
            }>
          <div className="portfolio_content_cards">
           {
            portfolioData.map((item,index)=>(
            <div className="portfolio_content_cards_item" key={item.id}
            onMouseEnter={()=>handleHover(index)}
            onMouseLeave={()=>handleHover(null)}>
              <div className="portfolio_content_cards_item_img-wrapper">
                <a>
                    <img src={item.image} alt="name" />
                </a>
              </div>
              <div className="overlay">
                 {
                    index === hoveredValue && (
                        <div>
                            <p>{item.name}</p>
                      
                     <a href={item.client_side} target="blank">  github-client</a>
                       <a href={item.server_side}target="blank">github-server</a>
                      <a href={item.demo}target="blank">Live demo</a>
                      </div>
                          
                        
                    )
                 }
              </div>
            </div>
            ))
           }
          </div>
          </Animate>
       </div>
       </section>
    );
};

export default Portfolio;