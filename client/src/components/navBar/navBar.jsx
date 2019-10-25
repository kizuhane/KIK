import React from 'react';
/* import:: Router */
import { NavLink } from 'react-router-dom';
/* import:: Theme */
import styled, { withTheme } from 'styled-components';
import { buttonBackgroundColor, buttonTextColor } from '../../Theme/theme';

function navBar() {
  const Nav = styled.nav`
    display: flex;
    justify-content: center;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/">Start</NavLink>
        </li>
        <li>
          <NavLink to="/About">Professors</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Options</NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default navBar;
