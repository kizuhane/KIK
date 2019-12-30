import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import { textHeader } from "../../Theme/theme";

const SubtitleHeader = styled.h2`
  margin: 16px 0 8px 0;

  color: ${textHeader};

  font-style: normal;
  font-weight: normal;
  font-size: 32px;
`;

const subtitleHeader = ({ children }) => {
  return <SubtitleHeader>{children}</SubtitleHeader>;
};

subtitleHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired
};

export default subtitleHeader;
