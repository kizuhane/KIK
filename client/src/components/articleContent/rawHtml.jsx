import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const RawHtml = styled.div`
  margin: 10px 0;
  padding: 0;
`;

const rawHtml = ({ children }) => {
  return (
    <RawHtml
      dangerouslySetInnerHTML={{
        __html: children
      }}
    />
  );
};

rawHtml.propTypes = {
  children: PropTypes.string.isRequired
};

export default rawHtml;
