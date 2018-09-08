import React from 'react';
import {LinkContainer} from "react-router-bootstrap";
import {Nav, NavItem} from "react-bootstrap";

const AnonymousMenu = () => (
  <Nav pullRight>
    <LinkContainer to="/register" exact>
      <NavItem>Sign up</NavItem>
    </LinkContainer>
    <LinkContainer to="/login" exact>
      <NavItem>Login</NavItem>
    </LinkContainer>
  </Nav>
);

export default AnonymousMenu;