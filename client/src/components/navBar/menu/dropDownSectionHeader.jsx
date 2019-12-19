import React from "react";
import PropTypes from "prop-types";

/* Import:: Theme */
import styled from "styled-components";

import { textPrimary } from "../../../Theme/theme";

const SectionHeader = styled.p`
  color: ${textPrimary};
  margin: 0;
  padding-top: 5px;

  text-align: center;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-transform: uppercase;
`;

const dropDownSectionHeader = ({ children }) => {
  return <SectionHeader>{children}</SectionHeader>;
};

dropDownSectionHeader.propTypes = {
  children: PropTypes.element.isRequired
};

export default dropDownSectionHeader;
