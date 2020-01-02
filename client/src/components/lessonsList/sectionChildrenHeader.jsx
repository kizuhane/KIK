import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { textHyperlink, primaryDark, textHeader } from "../../Theme/theme";

const LinkSubHeder = styled(Link)`
  display: block;
  margin: 10px 0 4px 0;
  padding: 0;

  color: ${textHeader};
  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;

  :link,
  :visited {
    color: ${textHeader};
  }
  :hover {
    color: ${textHyperlink};
  }
  :active {
    color: ${primaryDark};
  }
`;

const sectionChildrenHeader = ({ href, children }) => {
  return <LinkSubHeder to={href}>{children}</LinkSubHeder>;
};

sectionChildrenHeader.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default sectionChildrenHeader;
