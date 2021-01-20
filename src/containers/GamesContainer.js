import React, { Component } from 'react';
import GameForm from '../components/gamecomps/GameForm';

// import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
// import { fetchGames } from '../actions/ActIndex';

class GamesContainer extends Component {

    
    render() {
        return (
            <div>
                <Container>
                    <GameForm />
               
                </Container>    
            </div>
        );
    }
}

export default GamesContainer;
