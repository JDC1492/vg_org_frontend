import React from 'react';
import Game from './Game';
import { Col, Row} from 'react-bootstrap';
 
 const Games = (props) => {

    const eachGame = props.games.map((game,i) => 
    <Col key={i} xs={6} md={4}><Game key={i} game={game} /></Col> )   
        
     return (
          <div>
               <Row>   
                    {eachGame}
               </Row>  
          </div>
     );
}
 
 export default Games;
 