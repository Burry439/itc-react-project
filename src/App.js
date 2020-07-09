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
      <Router>
      <UserContextProvider>
        <MessageContextProvider>
          <Switch>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/messenger" exact component={Messenger}/>
            <Route component={Messenger}/>
          </Switch>
        </MessageContextProvider>
      </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
