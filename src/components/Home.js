import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <div className="home">
        Welcome to VG_Organizer
            </div>
        <div className="homePara">
            <Accordion defaultActiveKey="1">
                <Card className="homeContainer">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        How to use?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
            <Card.Body >
                If you have a new game that you want to place in the catalogue 
                you simply go to the form page by clicking the "New Game" link in the navbar. 
                Fill out the form, press submit, and watch as your collection grows larger!
            </Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>  
        </div>  
    );
}

export default Home;