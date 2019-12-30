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

const Paragraphs = styled.p`
  margin: 0 0 8px 0;
  padding: 0;

  color: ${textPrimary};

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  code {
    font-family: "Fira Code", monospace;

    font-weight: 450;
    background: ${paragraphInlineCodeBG};
    color: ${textInlineCode};
    border-radius: 4px;
  }
  mark {
    background: ${paragraphMarker};
    color: ${textBold};
  }
`;
const paragraphs = ({ children }) => {
  return (
    <Paragraphs
      dangerouslySetInnerHTML={{
        __html: children
      }}
    />
  );
};

paragraphs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]).isRequired
};

export default paragraphs;
