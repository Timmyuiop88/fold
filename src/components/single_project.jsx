import React from "react";

import east from './images/east.png'


function Singles (props){

const link = props.link
  return(
     <div data-aos="fade-up" className="single">
        <div className="programming">
          <ul>
       {props.tools.map((value) => {return(
        <li>{value} </li>
        
       )}
       
       
       )}
          
          </ul>
        </div>
        <div className="proj_image">
<img src={props.Image} alt="not found"/>

        </div>
        <div className="proj_name">
          <div className="name1">
            <div className="worr">
              {props.num}<span className="dot">.</span>
            </div>
            <p>
            {props.Name}
            </p>
            <br/>
           
          </div>
         
          <a href={link} className="name2">
            <img src={east} alt="not found"/>
          </a>
        </div>
        
    </div>
  )
}
export default Singles