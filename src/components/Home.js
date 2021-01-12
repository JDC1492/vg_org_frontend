import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
        <div>
        Welcome to VG_Organizer.
            <Accordion defaultActiveKey="1">
                <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        How to use?
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
            <Card.Body >
                If you have a new game that you want to place in the catalogue 
                you simply go to the new page by clicking the link in the navbar. 
                Fill out the form, press submit, and watch as your collection grows larger!
            </Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>
                
                 
            </div>
        );
    }
}


export default Home;