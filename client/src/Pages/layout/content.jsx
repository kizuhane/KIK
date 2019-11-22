import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
/* import:: colors */
import { primaryBackground, textPrimary } from "../../Theme/theme";

/* import:: CONSTANT VALUE */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";

const Content = styled.div`
  position: fixed;
  left: 316px;
  right: 0;
  padding: 0 8px;
  height: Calc(100% - 48px);
  overflow-y: scroll;

  background: ${primaryBackground};
  color: ${textPrimary};

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    left: 0;
    width: 100%;
    z-index: 1;
  }
`;

const content = props => {
  const { children } = props;
  return <Content>{children}</Content>;
};

content.propTypes = {
  children: PropTypes.node.isRequired
};

export default content;
