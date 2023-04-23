import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/trout_logo.jpg';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../index.css';
import styles from '../styles.module.css';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" className={styles['navbar']}>
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand >
              <img src={Logo}
                alt='logo'
                width="50"
                height="50"
                className="d-inline-block align-top"></img>
            </Navbar.Brand>
            <NavLink className={styles['navbar']}to="/home">Home</NavLink>
            <NavLink className={styles['navbar']} to="flies">Flies</NavLink>
            <NavLink className={styles['navbar']} to="comments">Comments</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;