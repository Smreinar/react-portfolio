import React from "react";
import "./socialmstylesheet.css";


const Socailmedia = props => (
    <div className="col" >
    <div className="card mx-auto" style={{height: 50, width: 50}}>
        <a href={props.link}>
        <img className="card-img-top" alt={props.name} src={props.image}/>
        <div className="card-body">
        </div>
        </a>
    </div>
    </div>
)

export default Socailmedia;