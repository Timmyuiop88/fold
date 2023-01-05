import React from "react";
import logo from "./images/logo.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
function Footer(){
    return(
        <div className="footer">
            <div className="f_logo">
            <img src={logo} alt="not found" className=""/>
            </div>
            <div className="f_email">
            <a href="mailto:adedaratimilehin.gold@gmail.com">Adedaratimilehin.gold@gmail.com</a>
            </div>
            <div className="f_icons">
                <div>
                    <a href="https://github.com/Timmyuiop88">
                       <FaGithub/>  
                    </a>
               
                </div>
                <div className="g">
                    <a href="https://www.linkedin.com/in/timmyuiop88/">
                    <FaLinkedin/>
                    </a>
               
                </div>
              
            </div>
            <div className="download">
                    <a>
                    <FaDownload/> <p> Download resume</p>
                    </a>
                    </div>
        </div>
    )
}
export default Footer