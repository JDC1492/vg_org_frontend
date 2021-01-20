import React, { Component } from 'react';
import Game from './Game';
import { Col, Row} from 'react-bootstrap';
class Games extends Component {    
    render() {
        // console.log(this.props)
        const eachGame = this.props.games.map((game,i) => 
            <Col key={i} xs={6} md={4}><Game key={i} game={game} /></Col> )
        return (
            <>
                <Row>   
                    {eachGame}
                </Row>    
            </>
        );
    }
}
export default Games;