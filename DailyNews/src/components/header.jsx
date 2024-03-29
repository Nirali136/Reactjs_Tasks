import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <div className='container'>
        <Navbar className='yellotail'>
          <LinkContainer to="/">
            <Navbar.Brand>DailyNews</Navbar.Brand>
          </LinkContainer>
        </Navbar>
        <Nav>
          <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          </Nav.Item>
          <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          </Nav.Item>
        </Nav>
    </div>

  )
}

export default Header
