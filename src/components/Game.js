import React from 'react';
import { Card } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';

const Game = ({game}) =>  {
    // debugger
        return (
            <div>
                <CardDeck style={{ width: '18rem' }}>  
                <Card className="text-center" style={{ width: '18rem' }} >      
                    <Card.Img variant="top" src={game.cover_art} alt="" />
                    
                    <Card.Body>
                    <Card.Text>    
                    Game Title: <h4>{game.title}</h4>
                    Release Year: <h4>{game.release_year}</h4>
                    Console: <h4>{game.console}</h4>
                    Developer: <h4>{game.developer}</h4>
                    Game Genre: <h4>{game.genre}</h4>
                    Game Description: <p>{game.description}</p>
                    </Card.Text>
                    </Card.Body>    
                    
                </Card>
                </CardDeck>
            </div>
        );
}

export default Game;
