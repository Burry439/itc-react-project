import React, {useContext} from 'react';
import Jumbotron from '../../reusable/jumbotron/jumbotron';
import SingleLineForm from '../../reusable/singleLineForm/singleLineForm';
import {UserContext} from "../../../contexts/userContext"

const Profile = () => {

    //get the user and the setUser function from the UserContext
    const {user, setUser} = useContext(UserContext)
    
    return ( 
        <div>
            {/* return a Jumbotron component */}
            <Jumbotron title="Profile Page" lead={`Hey there ${user} use the form bellow to change your username`} link="/messenger" linkText="back to messenger"/>
            {/* return a SingleLineForm component */}
            <SingleLineForm submitFunction={setUser} placeholder="Enter a new username" buttonText="Update username"/>
        </div>
     );
}
 
export default Profile;