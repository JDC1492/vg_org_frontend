import React, { Component } from 'react';
import GameForm from '../components/gamecomps/GameForm';
import Games from '../components/gamecomps/Games';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchGames } from '../actions/ActIndex';

class GamesContainer extends Component {
    componentDidMount() {
        this.props.fetchGames()
    }
    
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

export default connect(mapStateToProps, { fetchGames } )(GamesContainer);
