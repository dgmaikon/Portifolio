import React from "react";
import MyPage from "./nav";

const Navbar = () => {
    return (
        <nav id="navbarId">
            <div className="nav">
                <a className="nav-item" href="#header">Home</a>
                <a className="nav-item" href="#about" >About</a>
                <a className="nav-item" href="#skills" >Skills</a>
                <a className="nav-item" href="#projects" >Projects</a>
            </div>
        </nav>
    );
}

export default Navbar;