import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Tickets from '../pages/tickets/Tickets';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path='/'
            render={(props) => (
              <h1>App</h1>
            )}
          />
          {/* <Route path='/tickets' component={Tickets} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
