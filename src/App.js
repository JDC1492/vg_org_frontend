import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import GamesContainer from './containers/GamesContainer'
import SingleGame from './components/SingleGame'
import NavBarContainer from './containers/NavBarContainer';
import './App.css';

class App extends Component{
  render(){
  return (
    <Router>
    <NavBarContainer />
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route  path="/games/new" component={ GamesContainer }/>
          <Route  path='/games/:gameId' component={ SingleGame } />
          <Route  path="/about" component={ About }/>
        </Switch>  
      </div>
    </Router>
  )};
}

// const mapStateToProps = (state) =>{     render={(routerProps) => <SingleGame {...routerProps} games={this.props.games}/>}
//   return{games: state} connect(mapStateToProps)
// }

export default App;
