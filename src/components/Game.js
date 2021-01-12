import React from 'react';
import { Card } from 'react-bootstrap';
import { CardDeck, ListGroup, Row} from 'react-bootstrap';

const Game = ({game}) =>  {
    // debugger
        return (
            <div>
            <Row>
                <CardDeck style={{ width: '18rem' }}>  
                <Card className="text-left" style={{ width: '17rem' }} >      
                    <Card.Img fluid variant="top" src={game.cover_art} alt="" />
                    <Card.Body className="text-center">
                        <Card.Title>{game.title}</Card.Title> 
                        <Card.Text>{game.description}</Card.Text>
                    </Card.Body>    
                    <ListGroup>
                        <ListGroup.Item>Release Year: {game.release_year}</ListGroup.Item>
                        <ListGroup.Item>Console: {game.console}</ListGroup.Item>
                        <ListGroup.Item>Developer: {game.developer}</ListGroup.Item>
                        <ListGroup.Item>Game Genre: {game.genre}</ListGroup.Item>
                    </ListGroup>
                </Card>
                </CardDeck>
                </Row>
            </div>
        );
}

export default Game;
