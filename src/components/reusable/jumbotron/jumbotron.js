import React from 'react';
import { NavLink } from "react-router-dom";

const Jumbotron = ({title, lead , link, linkText}) => {
    
    return ( 
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-5">{title}</h1>
            <p className="lead">{lead}</p>
            <p className="lead">
                <NavLink className="btn btn-primary btn-lg" to={link}>{linkText}</NavLink>
            </p>
        </div>
    </div>
     );
}
 
export default Jumbotron;