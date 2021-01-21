import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchGames } from '../actions/ActIndex';
import Games from '../components/gamecomps/Games';
import GamesHead from '../components/gamecomps/GamesHead';

class ListsGamesContainer extends Component {
    componentDidMount() {
            this.props.fetchGames()
        }


    render() {
        return (
            <div>
                <Container>
                    <GamesHead games={this.props.games} />
                    <Games games={this.props.games} />
                </Container> 
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{games: state}
}

export default connect(mapStateToProps, { fetchGames })(ListsGamesContainer);
