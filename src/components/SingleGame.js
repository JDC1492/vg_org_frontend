import React from 'react';
// import { connect } from 'react-redux';
import { Card, Container, ListGroup, Row } from 'react-bootstrap';

const SingleGame = (props) => {
        const urlID = parseInt(window.location.href.charAt(window.location.href.length-1))
         const game = props.games.find(game => game.id === urlID)

        return (
            <div>
                <Row>
                    <Container>
                        <Card className="card-look" style={{ width: '20rem'}}>      
                            <Card.Img  horizontal variant="top" src={game.cover_art} alt="" />
                            <Card.Body>
                                <Card.Title>{game.title}</Card.Title> 
                                <Card.Text className="justify-content-md-center" horizontal>{game.description}</Card.Text>
                            </Card.Body>    
                        </Card>
                    </Container>
                </Row>
            </div>
        );
}


export default SingleGame;

                             
