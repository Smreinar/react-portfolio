import React, { Component } from 'react'; // Import react/component
import projects from "./portfolio.json"; // Import portfolio libary
import platforms from "./platforms.json";
import Navbar from './components/Navbar'; // Import Nvabarcomponent
import Aboutme from './components/Aboutme'; // Import Aboutme component
import Portfolio from "./components/Portfolio"; // Import Portfolio component
import Socailmedia from './components/Socialmedia'; // Import Socail media component
import './App.css';
class App extends Component{
  
  state = {
    projects,
    platforms
  };
 
  
  //SubClass render() return
  render() {
    return(
      <div className="container">
        <Navbar></Navbar>
        {/* Aboutme */}
        <Aboutme></Aboutme>
        {/* Portfolio */}
        <div className="row">
          <div className="card-deck">
            {this.state.projects.map(projects => (
              <Portfolio
          
              key={projects.id}
              id={projects.id}
              name={projects.name}
              image={projects.image}
              link={projects.link}
              ></Portfolio> 
            ))}
          </div>
        </div>
            {/* Socail Media */}
        <div className="row justify-content-md-center">
          <div className="card-deck">
            {this.state.platforms.map(platforms => (
            <Socailmedia
          
            key={platforms.id}
            id={platforms.id}
            name={platforms.name}
            image={platforms.image}
            link={platforms.link}
            ></Socailmedia> 
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
