import React, {useContext} from 'react';
import SingleLineForm from "../../reusable/singleLineForm/singleLineForm"
import {MessageContext} from "../../../contexts/messageContext"
import {UserContext} from "../../../contexts/userContext"

const MessageForm = () => {

    const {addMessage} = useContext(MessageContext)
    const {user} = useContext(UserContext)
   
    const addNewMessage = (messageContent) =>{
        const date = new Date()
        const message = {
            username : `${user}`,
            content : messageContent,
            date :  date.toLocaleDateString(),
            time : date.toLocaleTimeString()
        }
        addMessage(message)       
    }

    return ( 
        <SingleLineForm submitFunction={addNewMessage} placeholder="Whats on your mind?" buttonText="Add new message" inputType="textarea"/>
    )
}
 
export default MessageForm;