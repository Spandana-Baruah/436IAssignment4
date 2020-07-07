/*jshint esversion: 6 */

import React from 'react';
import AddMessage from '../containers/AddMessage';
import MessageList from './MessageList';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

const App = () => {
return (
    <div className="App">
      <Router>
        <div>
            <AddMessage />
            <Route path="/">
                <MessageList />
            </Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
