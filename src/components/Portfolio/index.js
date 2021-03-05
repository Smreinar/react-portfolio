import React from "react";
import "./portfoliostylesheet.css";

const Portfolio = props => (
    <div className="col-md-3">
    <div className="card mx-auto">
        <a href={props.link}>
        <img className="card-img-top" alt={props.name} src={props.image}/>
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