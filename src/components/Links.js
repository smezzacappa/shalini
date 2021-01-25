// import { Breadcrumb } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from "react";
import { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Parfum from './pages/Parfum';
import Clothing from './pages/Clothing';


export default class Links extends Component{
    render(){
        return(
            <div>
<Navbar expand="sm">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/products">All Products</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/parfum">Parfum</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/clothing">Clothing</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div>

     <Switch>
     <Route exact path='/' component={Home}/>
      <Route exact path='/products' component={Products} />   
      <Route  exact path="/about" component = {About}/>  
      <Route exact path="/parfum" component={Parfum}/>
      <Route  exact path="/clothing" component = {Clothing}/>  
      </Switch>
      
      </div>
      <style jsx>
            {`
            .navbar-light .navbar-toggler{
                border: none;
            }
            .navbar-toggler.collapsed{
                padding: .1em;
            }
            `}
          </style>
      </div>
        )
    }
};