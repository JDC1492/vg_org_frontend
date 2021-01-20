import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchGames } from '../actions/ActIndex';
import Games from '../components/gamecomps/Games';

class ListsGamesContainer extends Component {
    componentDidMount() {
            this.props.fetchGames()
        }


    render() {
        return (
            <div>
                <Container>

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
