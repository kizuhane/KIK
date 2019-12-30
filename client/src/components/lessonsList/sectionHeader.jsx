import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styled from "styled-components";
import { textHeader, textHyperlink, primaryDark } from "../../Theme/theme";

const LinkHeder = styled(Link)`
  display: block;
  margin: 18px 0 14px 0;
  padding: 0;

  color: ${textHeader};
  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;

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

const sectionHeader = ({ href, children }) => {
  return <LinkHeder to={href}>{children}</LinkHeder>;
};

sectionHeader.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default sectionHeader;
