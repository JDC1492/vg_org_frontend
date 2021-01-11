import React, { Component } from 'react';
import GameForm from '../components/GameForm';
import Games from '../components/Games';
import { connect } from 'react-redux';

class GamesContainer extends Component {
    render() {
        return (
            <div>
                <GameForm />
                <Games games={this.props.games} />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{games: state}
}

export default connect(mapStateToProps)(GamesContainer);
