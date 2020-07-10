import React, {useContext} from 'react';
import Message from "./message"
import {MessageContext} from "../../../contexts/messageContext"

const MessageList = () => {

    //get the list of messages from the MessageContext
    const {messageList} = useContext(MessageContext)

    return (      
        <ul className="list-group">
            {/*for every message in the message list return a new message component */}
            {messageList.map((message) =>{
               return  <Message key={message.time}  username={message.username} date={message.date} time={message.time} content={message.content}/>
            })}
        </ul>
    );
}
 
export default MessageList;