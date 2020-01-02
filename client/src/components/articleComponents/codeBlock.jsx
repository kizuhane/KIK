import React from "react";
import PropTypes from "prop-types";

/* import  highlight.js  wrapper */
import Highlight from "react-highlight";

import styled from "styled-components";

const CodeBlock = styled.div`
  margin: 4px 0 4px 0;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  & pre {
    margin: 0;
  }
  & pre code {
    padding: 10px 0 10px 10px;
  }
`;

const codeBlock = props => {
  const { language, children } = props;
  return (
    <CodeBlock>
      <Highlight language={language}>{children}</Highlight>
    </CodeBlock>
  );
};

codeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default codeBlock;
