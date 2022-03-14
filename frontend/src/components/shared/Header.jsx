import React from 'react'
import {Navbar,Nav , Container , } from 'react-bootstrap'
import Logo from '../Logo'


function Header() {
  return (
   <header>
        <Navbar bg="dark" variant='dark'  expand="lg">
        <Container>
            <Navbar.Brand href="#home" className='d-flex flex-row align-items-center'><Logo  /><div className="p-2">Sneakers-Shop</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home"><i className='fas fa-shopping-cart'></i>Shop</Nav.Link>
                <Nav.Link href="#link"><i className='fas fa-user'></i>Login</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
   </header>
  )
}

export default Header