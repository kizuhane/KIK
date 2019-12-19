import React from "react";
import PropTypes from "prop-types";

/* import:: Router */
import { Link } from "react-router-dom";

/* import:: Theme */
import styled from "styled-components";
// colors
import {
  textPrimary,
  primaryHover,
  primaryDefault
} from "../../../Theme/theme";

// TODO: DELETE THIS LATER

const MenuChildren = styled(Link)`
  display: block;
  padding: 6px 30px;

  font-size: 24px;
  text-decoration: none;
  font-weight: normal;
  text-align: center;

  :link,
  :visited {
    color: ${textPrimary};
  }
  :hover {
    background: ${primaryHover};
  }
  :active {
    background: ${primaryDefault};
  }
`;

const navMenuChildren = ({ to, children }) => {
  return <MenuChildren to={to}>{children}</MenuChildren>;
};

navMenuChildren.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default navMenuChildren;
