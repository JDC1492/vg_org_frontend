import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import GamesContainer from './containers/GamesContainer'
import SingleGame from './components/SingleGame'
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
          <Route  path="/games/new" component={ GamesContainer }/>
          <Route  path='/games/:gameID' component={ SingleGame } />
          <Route  path="/about" component={ About }/>
        </Switch>  
      </div>
    </Router>
  )};
}



export default App;
