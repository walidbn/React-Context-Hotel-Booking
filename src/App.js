import React from 'react';
import Home from'./pages/Home';
import Rooms from'./pages/Rooms';
import SingleRoom from'./pages/SingleRoom';
import NavBar from './components/NavBar';
import Error from'./pages/Error';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
     <Route exact path="/" component={Home}/>
     <Route  exact path="/rooms/" component={Rooms}/>
     <Route  exact path="/rooms/:slug" component={SingleRoom}/>
     <Route component={Error} />
    </Switch>

    </Router>
  );
}

export default App;
