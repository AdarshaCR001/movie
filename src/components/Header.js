import React from 'react'
import { Navbar, Form, Button, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { Router, Link } from "@reach/router"
import { logIn, logOut } from '../redux/login/LoginAction'
import { connect } from 'react-redux'

function Header(props) {
    
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                    <Link to="/"><Nav.Link href="#home">Home</Nav.Link> </Link>
                    <Link to="/hoblist"><Nav.Link href="#hoblist">Hoblist</Nav.Link></Link>
                    <Link to="/signup"><Nav.Link href="#signin">Signup</Nav.Link></Link>
                    {!props.loginstate.islogIn ? <Link to="/signin"><Nav.Link href="#signin">Signin</Nav.Link></Link> : 
                    <Link to="/signin" onClick={()=>props.logOut()}><Nav.Link href="#signin">Signout</Nav.Link></Link> } 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        loginstate: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: (name) => dispatch(logIn(name)),
        logOut: (name) => dispatch(logOut(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
