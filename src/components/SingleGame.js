import React from 'react';
import { Card, ListGroup, Row } from 'react-bootstrap';


// const urlID = parseInt(window.location.href.charAt(window.location.href.length-1))

const SingleGame = (props) => {
        const paramID = props.games[props.match.params.id - 1]

        const game = props.games.find(game => game.id === urlID)
        console.log(props.games)
            return (
                <div>
                    <Row>
                        <div className='show-card'>
                            <Card>      
                                <Card.Img  max-width="auto" height="auto" style={{imageRendering:'pixelated'}}variant="bottom" src={game.cover_art} alt="" />
                                    <Card.Body>
                                        <Card.Title>{game.title}</Card.Title> 
                                        <ListGroup.Item>Release Year: {game.release_year}</ListGroup.Item>
                                        <ListGroup.Item>Console: {game.console}</ListGroup.Item>
                                        <ListGroup.Item>Developer: {game.developer}</ListGroup.Item>
                                        <ListGroup.Item>Game Genre: {game.genre}</ListGroup.Item> 
                                        <ListGroup.Item>{game.description}</ListGroup.Item>
                                    </Card.Body>                   
                            </Card>
                        </div>
                    </Row>
                </div>
        );
}


export default SingleGame;