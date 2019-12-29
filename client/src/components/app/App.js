import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tickets from '../pages/tickets/Tickets';
// import Halls from '../pages/halls/Halls';
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
          <Route path='/tickets' component={Tickets} />
          {/* <Route path='/halls' component={Halls} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
