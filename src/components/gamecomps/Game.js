import React from 'react';
import { Card, CardDeck, ListGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteGame } from '../../actions/ActIndex';
import { Link } from 'react-router-dom';


const Game = ({game, deleteGame}) =>  {
    // debugger
        return (
            <>
                <Row>
                    <CardDeck style={{ width: '18rem'}}>  
                        <Card className="card-look" style={{ width: '17rem'}}  >      
                            <Card.Img variant="top" src={game.cover_art} alt=""  />
                            <Card.Body className="text-center" >
                            <Card.Title>{game.title}</Card.Title> 
                                <Card.Text className="justify-content-md-center" >{game.description}</Card.Text>
                            </Card.Body>    
                            <ListGroup>
                                <ListGroup.Item>Release Year: {game.release_year}</ListGroup.Item>
                                <ListGroup.Item>Console: {game.console}</ListGroup.Item>
                                <ListGroup.Item>Developer: {game.developer}</ListGroup.Item>
                                <ListGroup.Item>Game Genre: {game.genre}</ListGroup.Item>
                                    <ListGroup horizontal>
                                        <ListGroup.Item>
                                        <Link to={`/games/${game.id}`}>View Game</Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                        <button onClick={() => deleteGame(game.id)}>Delete Game</button>
                                        </ListGroup.Item>
                                    </ListGroup>
                            </ListGroup>
                        </Card>
                    </CardDeck>
                </Row>
            </>
        );
}

export default connect(null, { deleteGame })(Game);