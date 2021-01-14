import React from 'react';
// import { Card, ListGroup, Row } from 'react-bootstrap';

// const urlID = parseInt(window.location.href.charAt(window.location.href.length-1))
// props.games.find(game => game.id === urlID)

const SingleGame = (props) => {
        // const game = props.games[props.match.params.id - 1]
        console.log(props)
        
            return (
                <div>
                    {/* <Row>
                        <div className='show-card'>
                            <Card>      
                                <Card.Img  max-width="auto" height="auto" style={{imageRendering:'pixelated'}}variant="bottom" src={game ? game.cover_art : null} alt="" />
                                    <Card.Body>
                                        <Card.Title>{game ? game.title : null}</Card.Title> 
                                        <ListGroup.Item>Release Year: {game ? game.release_year : null}</ListGroup.Item>
                                        <ListGroup.Item>Console: {game ? game.console : null}</ListGroup.Item>
                                        <ListGroup.Item>Developer: {game ? game.developer : null}</ListGroup.Item>
                                        <ListGroup.Item>Game Genre: {game ? game.genre : null}</ListGroup.Item> 
                                        <ListGroup.Item>{game ? game.description : null}</ListGroup.Item>
                                    </Card.Body>                   
                            </Card>
                        </div>
                    </Row> */}
                </div>
        );
}


export default SingleGame;