import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

/* Import:: Theme */
import styled from "styled-components";

import { textHyperlink, primaryDark } from "../../Theme/theme";

const MyLink = styled(Link)`
  text-decoration: none;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  :link,
  :visited {
    color: ${textHyperlink};
  }
  :hover {
    color: ${primaryDark};
  }
  :active {
    color: ${textHyperlink};
  }
`;

const professorMoreLink = ({ href, children }) => {
  return <MyLink to={href}>{children}</MyLink>;
};

professorMoreLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired
};

export default professorMoreLink;
