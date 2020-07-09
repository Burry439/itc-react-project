import React, {createContext, useState} from 'react';

export const MessageContext = createContext();

const MessageContextProvider = (props) => {
    const [messageList, setMessageList] = useState([])

    const addMessage = (message) =>{
        setMessageList([ message, ...messageList])
    }

    return(
        <MessageContext.Provider value={{messageList, addMessage}}>
            {props.children}
        </MessageContext.Provider>
    )
}

export default MessageContextProvider;