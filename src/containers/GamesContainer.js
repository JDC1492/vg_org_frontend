import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import GameForm from '../components/gamecomps/GameForm';
import GameFormHead from '../components/gamecomps/GameFormHead';


class GamesContainer extends Component {

    
    render() {
        return (
            <div>
                <Container>
                    <GameFormHead />
                    <GameForm />
                </Container>    
            </div>
        );
    }
}

export default GamesContainer;
