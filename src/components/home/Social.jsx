import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://twitter.com/AdityaGhode2" className="home__social-icon" rel="noreferrer" target="_blank">
                <FiTwitter />
            </a>
            <a href="https://github.com/adityaghode92" className="home__social-icon" rel="noreferrer" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/adityaghode92/" className="home__social-icon" rel="noreferrer" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;