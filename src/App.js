import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import GamesContainer from './containers/GamesContainer'
import GameShowContainer from './containers/GameShowContainer'
// import Game from './components/Game'
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
          <Route exact path="/about" component={ About }/>
          <Route exact path="/games/new" component={ GamesContainer }/>
          <Route exact path='/games/:gameId' component={ GameShowContainer }/>
        </Switch>  
      </div>
    </Router>
  )};
}

export default App;
