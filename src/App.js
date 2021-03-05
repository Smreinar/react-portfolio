import React, { Component } from 'react';
import projects from "./portfolio.json";
import Portfolio from "./components/Portfolio"; // Import Portfolio
// Import Nvabar
// Import Aboutme
// Import Socail medai
// Import react/component
import './App.css';

class App extends Component{
  
  state = {
    projects
  };
 
  
  //SubClass render() return
  render() {
    return(
      <div className="container">
      {/* Navbar */}
      {/* Aboutme */}
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
