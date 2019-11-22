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

const MenuChildren = styled(Link)`
  display: block;
  padding: 9px 0;
  line-height: 22px;
  text-decoration: none;
  font-weight: bold;
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
  // TODO: Proper validation for navMenu children
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired
};

export default navMenuChildren;
