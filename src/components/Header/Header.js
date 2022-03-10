import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
import { Navbar, Nav, Container } from 'react-bootstrap'

// These are the links you'll see if you're signed in
const authenticatedOptions = (
  <>
    <NavLink to='/mylistings' className='nav-link'>
My Listings
    </NavLink>
    <NavLink to='/listings' className='nav-link'>
All Listings
    </NavLink>
    <NavLink to='/listings/create' className='nav-link'>
Make a Listing
    </NavLink>
    {/* <NavDropdown> */}
    <NavLink to='/change-password' className='nav-link'>
Change Password
    </NavLink>
    <NavLink to='/sign-out' className='nav-link'>
Sign Out
    </NavLink>
    {/* </NavDropdown> */}
  </>
)

// These are the links you'll see if you're signed out
const unauthenticatedOptions = (
  // <>
  //   <NavDropdown>
  //     <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
  //     <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  //   </NavDropdown>
  // </>

  <>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

// These are the navigation links that will always show
const alwaysOptions = (
  <>
    <NavLink to='/' className='nav-link'>Home</NavLink>
  </>
)

const Header = ({ user }) => (
  <Navbar bg='info' expand='md' variant='dark'>
    <Container>
      <Navbar.Brand>
        {/* Text decoration: none, will remove the underline text decoration
            from the link */}
        <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>Private Listings
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        {/* Add margin to the start (left) automatically
            So that the links are pushed to the right side of the screen. */}
        <Nav className='ms-auto'>
          {/* If we have a user, show the span component */}
          {user && (
          /* Add some margin after the welcome message to separate it from the following links */
            <span className='navbar-text me-2'>Welcome, {user.email}</span>
          )}
          {alwaysOptions}
          {/* If we have a user (it isnt null), show the authenticated links
              otherwise show the unauthenticated links */}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
