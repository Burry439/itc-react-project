import React, { useContext } from 'react';
import Messagelist from "./messageList"
import MessageForm from "./messageForm"
import Jumbotron from '../../reusable/jumbotron/jumbotron';
import {UserContext} from "../../../contexts/userContext"

const Messenger = () => {

    //get the user from the UserContext
    const {user} = useContext(UserContext)

    return ( 
        <div> 
            {/* return a Jumbotron component */}
            <Jumbotron title="React Chat App" lead={`Welcome ${user} let's chat`} link="/profile" linkText="change username"/>
            {/* return a MessageForm component */}
            <MessageForm/>
            {/* return a Messagelist component */}
            <Messagelist/>
        </div>
     );
}
 
export default Messenger;