import React from 'react';
import "./messenger.css"
const Message = ({username,date,time,content}) => {

    return (    
        <div className="card message">
            <div className="card-body">
                <h6 className="card-subtitle mb-1 text-muted">From: <strong>{username}</strong></h6>
                <h6 className="card-subtitle mb-1 text-muted">Posted on: <strong>{date}</strong> at <strong>{time}</strong></h6>
                <hr/>
                <p className="card-text">{content}</p>
            </div>
        </div>
     );
}
 
export default Message;