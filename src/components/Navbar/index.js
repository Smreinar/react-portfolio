import React from "react";
import "./navbarstylesheet.css";

const Navbar = props => (

    <nav id="NavBarID" className="navbar navbar-expand-sm fixed-top pb-0">
        <div className="container">
            <button className="navbar-toggler" data-toggle="collapse" data-targets="#Navbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="nabar-brand p-0"><h1 className="p-2 px-4 mb-0 mt-2 text-dark">Steven Reinart</h1></a>
            <div className="collapse navbar-collapse" id="Navbar">
              <ul className="navbar-nav ml-auto mb-0 pb-0">
                <li className="nav-item"><a href="#" className="nav-link text-dark">About Me</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-dark">Portfolio</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-dark">Socail Media</a></li>
              </ul>
            </div>
        </div>
    </nav> 

)

export default Navbar;