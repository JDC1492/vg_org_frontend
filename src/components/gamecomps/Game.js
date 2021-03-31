// import React from 'react';
import React, { Component } from "react";
import { Card, CardDeck, ListGroup, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteGame } from "../../actions/ActIndex";
import { Link } from "react-router-dom";
// The primary way to allow users to navigate around your application
class Game extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
  }

  liked = () => {
    this.setState((previousState) => ({ likes: previousState.likes + 1 }));
  };

  render() {
    const { game, deleteGame } = this.props;
    return (
      <>
        <Row>
          <CardDeck style={{ width: "19.5rem" }}>
            <Card id="card-look">
              <Card.Img variant="top" src={game.cover_art} alt="" />
              <Card.Body className="text-center">
                <Card.Title>{game.title}</Card.Title>
                <Card.Text className="justify-content-md-center">
                  {game.description}
                </Card.Text>
              </Card.Body>
              <ListGroup>
                <ListGroup.Item id="card-year">
                  Release Year: {game.release_year}
                </ListGroup.Item>
                <ListGroup.Item id="card-console">
                  Console: {game.console}
                </ListGroup.Item>
                <ListGroup.Item id="card-dev">
                  Developer: {game.developer}
                </ListGroup.Item>
                <ListGroup.Item id="card-genre">
                  Game Genre: {game.genre}
                </ListGroup.Item>
                <ListGroup.Item id="card-like">
                  Game Likes: {this.state.likes}
                </ListGroup.Item>
                <ListGroup horizontal>
                  <ListGroup.Item>
                    <Link to={`/games/${game.id}`}>View Game</Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <button onClick={() => deleteGame(game.id)}>
                      Delete Game
                    </button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <button onClick={this.liked}>Like Me!</button>
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup>
            </Card>
          </CardDeck>
        </Row>
      </>
    );
  }
}

export default connect(null, { deleteGame })(Game);

// const Game = ({game, deleteGame}) =>  {
//     // destructuring with our props,  allowing me to call on my props by name rather than with the prefix of 'props.'
//     //fragments
//         return (
//             <>
//                 <Row>
//                     <CardDeck style={{ width: '18rem'}}>
//                         <Card className="card-look" style={{ width: '17rem'}}  >
//                             <Card.Img variant="top" src={game.cover_art} alt=""  />
//                             <Card.Body className="text-center" >
//                             <Card.Title>{game.title}</Card.Title>
//                                 <Card.Text className="justify-content-md-center" >{game.description}</Card.Text>
//                             </Card.Body>
//                             <ListGroup >
//                                 <ListGroup.Item className="card-year">Release Year: {game.release_year}</ListGroup.Item>
//                                 <ListGroup.Item className="card-console">Console: {game.console}</ListGroup.Item>
//                                 <ListGroup.Item className="card-dev">Developer: {game.developer}</ListGroup.Item>
//                                 <ListGroup.Item className="card-genre">Game Genre: {game.genre}</ListGroup.Item>
//                                     <ListGroup horizontal>
//                                         <ListGroup.Item>
//                                         <Link to={`/games/${game.id}`}>View Game</Link>
//                                         </ListGroup.Item>
//                                         <ListGroup.Item>
//                                         <button onClick={() => deleteGame(game.id)}>Delete Game</button>
//                                         </ListGroup.Item>
//                                         <ListGroup.Item>
//                                         <button>Like Me!</button>
//                                         </ListGroup.Item>
//                     export default ;                </ListGroup>
//                             </ListGroup>
//                         </Card>
//                     </CardDeck>
//                 </Row>
//             </>
//         );
// }

//
