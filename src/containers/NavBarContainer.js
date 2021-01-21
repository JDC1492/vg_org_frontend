import React from 'react'
import HomeLink from '../components/navcomps/HomeLink'
import NewLink from '../components/navcomps/NewLink';
import AboutLink from '../components/navcomps/AboutLink'
import GamesLink from '../components/navcomps/GamesLink'
import { Container, Row} from 'react-bootstrap';


const NavBarContainer = () =>
    <div>
      <Container style={{textAlign:"center"}}>
      <Row >
        <HomeLink />
        <NewLink />
        <GamesLink />
        <AboutLink />
      </Row>
      </Container>
    </div>


export default NavBarContainer;