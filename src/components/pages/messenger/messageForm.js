import React, {useContext} from 'react';
import SingleLineForm from "../../reusable/singleLineForm/singleLineForm"
import {MessageContext} from "../../../contexts/messageContext"
import {UserContext} from "../../../contexts/userContext"

const MessageForm = () => {

    //get the addMessage function from the MessageContext
    const {addMessage} = useContext(MessageContext)

    //get the user from the UserContext
    const {user} = useContext(UserContext)
    
    const addNewMessage = (messageContent) =>{
        const date = new Date()

        //create a new message
        const message = {
            username : `${user}`,
            content : messageContent,
            date :  date.toLocaleDateString(),
            time : date.toLocaleTimeString()
        }

        //add the new message to the messageList in the MessageContext
        addMessage(message)       
    }

    return ( 
        //return a SingleLineForm form component 
        <SingleLineForm submitFunction={addNewMessage} placeholder="Whats on your mind?" buttonText="Add new message" inputType="textarea"/>
    )
}
 
export default MessageForm;