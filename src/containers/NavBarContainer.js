import React from 'react'
import HomeLink from '../components/navcomps/HomeLink'
import NewLink from '../components/navcomps/NewLink';
import AboutLink from '../components/aboutcomps/AboutLink'
import { Container, Row} from 'react-bootstrap';


const NavBarContainer = () =>
    <div>
      <Container style={{textAlign:"center"}}>
      <Row >
        <HomeLink />
        <NewLink />
        <AboutLink />
      </Row>
      </Container>
    </div>


export default NavBarContainer;