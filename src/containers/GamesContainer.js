import React, { Component } from 'react';
import GameForm from '../components/GameForm';
import Games from '../components/Games';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

class GamesContainer extends Component {
    
    render() {
        return (
            <div>
                <Container>
                    <GameForm />
                    <Games games={this.props.games} />
                </Container>    
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{games: state}
}

export default connect(mapStateToProps)(GamesContainer);
