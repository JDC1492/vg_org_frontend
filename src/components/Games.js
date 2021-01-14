import React, { Component } from 'react';
import Game from '../components/Game';
import { Col, Row} from 'react-bootstrap';
import { connect } from 'react-redux';
// import { fetchGames } from '../actions/ActIndex';


class Games extends Component {


    // componentDidMount() {
    //     this.props.fetchGames()
    // }
    
    render() {
        // console.log(this.props)
        const eachGame = this.props.games.map((game,i) => 
            <Col key={i} xs={6} md={4}><Game key={i} game={game} /></Col> )
        return (
            <div>
                <Row>   
                    {eachGame}
                </Row>    
            </div>
        );
    }
}

export default  connect(null)(Games);
