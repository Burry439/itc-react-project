import React, {createContext, useState} from 'react';

//create and export a new context 
export const UserContext = createContext();

const UserContextProvider  = (props) => {
    //create a new state for getting and setting a the user
    const [user, setUser] = useState("Default")
    
    return(
        // create a new context provider for the context we created above so we can access it in other parts of the app
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider ;