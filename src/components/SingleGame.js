import React, { Component } from 'react';
import Game from '../components/Game';
import { connect } from 'react-redux';
import { getGame } from '../actions/ActIndex';

class SingleGame extends Component {



    // componentDidMount(){
    //     this.props.getGame()
    // }
    render() {
        // const singleGame = this.props.games.find(game => )
        return (
            <div>
                {/* {singleGame} */} SingleGame shows here.
            </div>
        );
    }
}


export default connect(null, {getGame})(SingleGame);
