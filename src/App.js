import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import GameForm from './components/GameForm'
import Games from './components/Games'
import NavBar from './NavBar';
import './App.css';

class App extends Component{
  render(){
  return (
    <Router>
    <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/games/new" component={ GameForm }/>
          <Route exact path="games" component={ Games }/>
        </Switch>  
      </div>
    </Router>
  )};
}

export default App;
