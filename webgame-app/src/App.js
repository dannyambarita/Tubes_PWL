import React from 'react';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import ListGame from './components/ListGame';
import Konten from './components/Konten';
import NavbarComponents from './components/NavbarComponents';
import Sidebar from './components/Sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

function App() {
  const [ showNav, setShowNav] = useState(false)
  return (
    <div className='App'>
      <navbar><NavbarComponents /></navbar>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
      </header>
      <Sidebar show={showNav}/>
      

      <div className="mt-3">
        <Container fluid>
          <Row>
            <Col>
              <h4><strong>List Game</strong></h4>
            </Col>
            <Konten />
          </Row>
        </Container>
      </div>
      </div>
  );
}

export default App;
