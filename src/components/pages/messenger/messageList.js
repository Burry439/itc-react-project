import React, {useContext} from 'react';
import Message from "./message"
import {MessageContext} from "../../../contexts/messageContext"

const MessageList = () => {
    
    const {messageList} = useContext(MessageContext)

    return (      
        <ul className="list-group">
            {messageList.map((message) =>{
               return  <Message key={message.time}  username={message.username} date={message.date} time={message.time} content={message.content}/>
            })}
        </ul>
    );
}
 
export default MessageList;