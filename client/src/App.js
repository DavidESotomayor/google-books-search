import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Saved from './pages/Saved'
import './App.css';
import './style.css'

function App() {
    return (
      <Router>
        <div >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
