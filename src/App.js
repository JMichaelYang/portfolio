import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

class App extends React.Component {
  // TODO: Update 404 path to a 404 page.
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/'>
            <Home/>
          </Route>
          <Route path='*'>
            <Home/>
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
