import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to VG_Organizer. The #1 gaming catalogue application! </h1> 
                <h3> How to use? </h3>
                <h4> If you have a new game that you want to place in the catalogue 
                you simply  </h4> 
                <ol> 
                <li>Go to tne new page by clicking the link in the navbar. </li>
                <li>fill out the form and press submit.</li>
                <li> watch as your collection grows larger!</li>
                </ol>
                 
            </div>
        );
    }
}


export default Home;