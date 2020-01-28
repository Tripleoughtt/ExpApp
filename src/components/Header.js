import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
    <h1>Memes</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Go Home plz</NavLink>
    <NavLink to="/create" activeClassName="is-active">Go create plz</NavLink>
    <NavLink to="/HelpPage" activeClassName="is-active">Go Help plz</NavLink>
    </header>
      )

export default Header;