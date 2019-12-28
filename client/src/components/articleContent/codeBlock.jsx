import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import {
  textPrimary,
  paragraphInlineCodeBG,
  textInlineCode,
  paragraphMarker,
  textBold
} from "../../Theme/theme";

const CodeBlock = styled.div``;

const codeBlock = props => {
  const { children } = props;
  return <div>{children}</div>;
};

codeBlock.propTypes = {
  children: PropTypes.string.isRequired
};

export default codeBlock;
