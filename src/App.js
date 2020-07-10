import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Messenger from "./components/pages/messenger/messenger"
import Profile from "./components/pages/profile/profile"
import UserContextProvider from './contexts/userContext';
import MessageContextProvider from './contexts/messageContext';
import './App.css';

function App() {
  return (
    <div className="App container">

      {/* add a react router to our app to make it a single page app */}
      <Router>
      {/* add our User and Message context provider so there children can access there contexts */}
      <UserContextProvider>
        <MessageContextProvider>
          {/* add a switch to our routes so they will render exclusively */}
          <Switch>
            {/* add a route for the profile page */}
            <Route path="/profile" exact component={Profile}/>
            {/* add a route for the messenger page */}
            <Route path="/messenger" exact component={Messenger}/>
            {/* add a fallback route that takes the user to the messenger page */}
            <Route component={Messenger}/>
          </Switch>
        </MessageContextProvider>
      </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
