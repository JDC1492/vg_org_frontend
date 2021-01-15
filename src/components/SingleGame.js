import React from 'react';
import { useSelector } from 'react-redux'
import { Card, ListGroup, Row } from 'react-bootstrap';

export const SingleGame = ({ match }) => {
    const { gameId } = match.params
    const selGame = parseInt(gameId) - 1
    let game = useSelector(state => state[selGame])
    debugger

        if (!game) {
            return (
              <section>
                <h2>Doesn't Look  Like its Here</h2>
              </section>
            )
          }


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































// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getGame } from '../actions/ActIndex';
// import { Card, ListGroup, Row } from 'react-bootstrap';
// // const urlID = urlID
// //   useSelector(state => state.games.find(game => game.id === ));
// class SingleGame extends Component {
    

//     componentDidMount(){
//         const idInt = parseInt(window.location.href.charAt(window.location.href.length-1));    
//         this.props.getGame(idInt)
//         debugger       
//     }
            
//   render() {
        
//         const idInt = parseInt(window.location.href.charAt(window.location.href.length-1));
//             debugger
//         const game = this.props.games
//             debugger

       

//         if (!game) {
//             return (
//               <section>
//                 <h2>Uh oh! We could not find the game you wanted!</h2>
//               </section>
//             )
//           }

//             return (
//                 <div>
//                 
//                     
//                 </div>
//         );
//     }
// }

// const mapStateToProps = state =>{
//     return {games:state}
// }


// export default connect(mapStateToProps, { getGame })(SingleGame);