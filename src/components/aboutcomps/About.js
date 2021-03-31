import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <>{/* Using JSX fragments to cut down uneccessary divs */}
            <h1 className='aboutTitle'>About Page</h1>
            <br/>
                <Container>
                <p className='para'>
                My name is Jonathan. I reccently completed the curriculum of the Flatiron School and am preparing for 
                my final project review. My goal has always been to somehow fuse the love I have for music and video games with 
                this new found interest and enjoyment of coding. This final project is a start of something that I plan to grow
                after graduation.
                </p>   
                <br/><br/>
                <p className='paraII'>
                VG_organizer has been a project idea that I've used for both my Ruby on Rails project and My React Project. 
                While this project currently showcases basic react knowledge, the plan is to continue to allow this platform
                to grow with features as I become a better and more knowledgeable developer. My plan for this is to watch the 
                progress that the site has gone through as I've grow as a developer. While this will be used for personal use
                for myself I would like to imagine that at one point I can release this on heroku and get real user feedback.  
                Currently the list of games mean something personally to me. All have given me memories that I'll keep forever,
                some through the story-telling and others through the beautiful music that aided in the creation of teh wolrds
                that I had a chance to experience.
                </p> 
                <br/><br/>
                <p className='paraIII'>
                I appreciate my time at the Flatiron School. I've met some great individuals in my time here and have learned so much. 
                Im excited to go forward and grow as a developer.
                </p>
                </Container>
            </>
        );
    }
}

export default About;
