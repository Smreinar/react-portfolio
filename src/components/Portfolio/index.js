import React from "react";
import "./portfoliostylesheet.css";

const Portfolio = props => (
    <div className="column">
    <div className="card">
        <a href={props.link}>
        <img className="card-image" alt={props.name} src={props.image}/>
        <div className="card-body">
            <div className="card-title">
                {props.name}
            </div>
        </div>
        </a>
    </div>
    </div>
)

export default Portfolio;