import React from "react";
import PropTypes from "prop-types";

/* import:: Router */
import { NavLink } from "react-router-dom";

/* Import:: Theme */
import styled from "styled-components";

import {
  textPrimary,
  primaryDefault,
  primaryHover
} from "../../../Theme/theme";

const NavLinkSelect = "navActive";
const MyNavLink = styled(NavLink)`
  padding: 10px 14px;
  text-decoration: none;
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  :link,
  :visited {
    color: ${textPrimary};
  }
  :hover {
    color: ${primaryHover};
  }
  :active {
    color: ${primaryDefault};
  }
  &.${NavLinkSelect} {
    color: ${primaryDefault};
  }
`;

const navLink = ({ to, children }) => {
  return (
    <MyNavLink exact to={to} activeClassName={NavLinkSelect}>
      {children}
    </MyNavLink>
  );
};

navLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
export default navLink;
