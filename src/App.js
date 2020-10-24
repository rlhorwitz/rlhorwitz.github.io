import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Nav,
  Navbar
} from "react-bootstrap";
import {
  StyledNavBar
} from './App.styled';
import Home from './components/views/home';


export default function App() {
  return (
    <Router>
        <StyledNavBar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/">Home</Nav.Link>
              {/* <Nav.Link className="ml-2 mr-2 text-nowrap" href="/blog">Blog</Nav.Link>
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/destinations">Destinations</Nav.Link>
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/travel-resources">Travel Resources</Nav.Link>
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/recipes">Recipes</Nav.Link>
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/contact">Contact</Nav.Link>
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/photos">Photo Album </Nav.Link>
              <Nav.Link className="ml-2 mr-2 text-nowrap" href="/recommendations">Recommendations</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </StyledNavBar>

        <Switch>
          <Route path="/blog">
            <Home />
          </Route>
          <Route path="/destinations">
            <Home />
          </Route>
          <Route path="/travel-resources">
            <Home />
          </Route>
          <Route path="/recipes">
            <Home />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
          <Route path="/photos">
            <Home />
          </Route>
          <Route path="/recommendations">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}