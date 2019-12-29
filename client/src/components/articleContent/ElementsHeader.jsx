import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import { textHeader } from "../../Theme/theme";

const Header = styled.h5`
  margin: 10px 0 4px 0;
  padding: 0;

  color: ${textHeader};

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

const elementsHeader = ({ children }) => {
  return <Header>{children}</Header>;
};

elementsHeader.propTypes = {
  children: PropTypes.string.isRequired
};

export default elementsHeader;
