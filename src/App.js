import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import About from './components/aboutcomps/About'
import GamesContainer from './containers/GamesContainer'
import SingleGame from './components/SingleGame'
import NavBarContainer from './containers/NavBarContainer';
import ListsGamesContainer from './containers/ListsGamesContainer';
// import { connect } from 'react-redux'

class App extends Component{
  render(){
    return (
      <Router>
      <NavBarContainer />
        <div className="App">
          <Switch>
              {/* switch allows for a route to render exclusively  */}
            <Route exact path="/" component={ Home }/>
            {/* route renders the appropriate UI when the path matches the URL */}
            <Route exact path="/games" component={ ListsGamesContainer }/> 
              {/* specifying with the 'exact' keyword since other routes share part of this URL */}
            <Route exact path="/games/new" component={ GamesContainer }/>
            <Route exact path='/games/:gameId' component={ SingleGame } />
            <Route  path="/about" component={ About }/>
          </Switch>  
        </div>
      </Router>
    )
  };
}

// const mapStateToProps = (state) =>{     
//   return{games: state} connect(mapStateToProps)
// }render={(routerProps) => <SingleGame {...routerProps} games={this.props.games}/>}

export default App;
