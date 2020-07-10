import React, {createContext, useState} from 'react';

//create and export a new context 
export const MessageContext = createContext();

const MessageContextProvider = (props) => {
    //create a new state for getting and setting a list of messages
    const [messageList, setMessageList] = useState([])

    const addMessage = (message) =>{
        //add a new message in the messageList
        setMessageList([ message, ...messageList])
    }

    return(
        // create a new context provider for the context we created above so we can access it in other parts of the app
        <MessageContext.Provider value={{messageList, addMessage}}>
            {props.children}
        </MessageContext.Provider>
    )
}

export default MessageContextProvider;