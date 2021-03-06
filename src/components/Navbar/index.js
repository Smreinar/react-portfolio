import React from "react";
import "./navbarstylesheet.css";

const Navbar = props => (

    <nav class="navbar navbar-expand-sm navbar-light bg-white fixed-top pb-0">
        <div class="container">
            <button class="navbar-toggler" data-toggle="collapse" data-targets="#Navbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="nabar-brand p-0"><h1 class="p-2 px-4 mb-0 mt-2 text-dark">Steven Reinart</h1></a>
            <div class="collapse navbar-collapse" id="Navbar">
              <ul class="navbar-nav ml-auto mb-0 pb-0">
                <li class="nav-item"><a href="#" class="nav-link">About Me</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Socail Media</a></li>
              </ul>
            </div>
        </div>
    </nav> 

)

export default Navbar;