import React from 'react';
import {Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import UserMenu from "./Menus/UserMenu";
import AnonymousMenu from "./Menus/AnonymousMenu";

const Toolbar = ({user, logout}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/" exact><a>Places</a></LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>


      {user ? <UserMenu user={user} logout={logout}/> : <AnonymousMenu/>}
    </Navbar.Collapse>
  </Navbar>
);

export default Toolbar;