import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div>
            <ul><h1>About Page</h1></ul>
            <br/>
            <p>
                <Container>
                My name is Jonathan Cohen. I reccently completed the curriculum of the Flatiron School and am preparing for 
                my final project review. My goal has always been to somehow fuse the love I have for music and video games with 
                this new found interest and enjoyment of coding. This final project is a start of something that I plan to grow
                after graduation.  
                <br/><br/>
                VG_organizer has been a project idea that I've used for both my Ruby on Rails project and My React Project. 
                While this project currently showcases basic react knowledge, the plan is to continue to allow this platform
                to grow with features as I become a better and more knowledgeable developer. My plan for this is to watch the 
                progress that the site has gone through as I've grow as a developer. While this will be used for personal use
                for myself I would like to imagine that at one point I can release this on heroku and get real user feedback.
                </Container>

            </p>
                
            </div>
        );
    }
}

export default About;
