import React, { Component } from 'react';
import Game from '../components/Game';
import { Col, Row} from 'react-bootstrap';


class Games extends Component {
    render() {
        const eachGame = this.props.games.map((game, i) => <Col xs={6} md={4}><Game key={i} game={game} /></Col>)
        return (
            <div>
                <Row>
                {eachGame}
                </Row>
            </div>
        );
    }
}

export default Games;
