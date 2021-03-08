import React, { Component } from 'react';
import projects from "./portfolio.json"; // Import portfolio libary
import Portfolio from "./components/Portfolio"; // Import Portfolio
// Import Socail medai
// Import react/component
import './App.css';
import Navbar from './components/Navbar'; // Import Nvabar
import Aboutme from './components/Aboutme'; // Import Aboutme

class App extends Component{
  
  state = {
    projects
  };
 
  
  //SubClass render() return
  render() {
    return(
      <div className="container">
        <Navbar></Navbar>
      {/* Aboutme */}
      <Aboutme></Aboutme>
      {/* Portfolio */}
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
     
    )
  }
}

export default App;
