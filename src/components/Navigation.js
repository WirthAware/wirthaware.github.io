import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
} from 'react-bootstrap';

const Navigation = () => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        {/* <a href="#">React-Bootstrap</a> */}
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Values</NavItem>
        <NavItem eventKey={2} href="#">Areas</NavItem>
        <NavItem eventKey={3} href="#">Expertice</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
