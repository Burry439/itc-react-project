import React, { useContext } from 'react';
import Messagelist from "./messageList"
import MessageForm from "./messageForm"
import Jumbotron from '../../reusable/jumbotron/jumbotron';
import {UserContext} from "../../../contexts/userContext"

const Messenger = () => {
    
    const {user} = useContext(UserContext)

    return ( 
        <div> 
            <Jumbotron title="React Chat App" lead={`Welcome '${user}' let's Chat`} link="/profile" linkText="change username"/>
            <MessageForm/>
            <Messagelist/>
        </div>
     );
}
 
export default Messenger;