import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
// colors
import { secondaryBackground, shadows } from "../../../Theme/theme";

/* import:: CONSTANT VALUE */
import { MOBILE_WIDTH_VALUE } from "../../../Constant/CONSTANT_STYLE_VALUE";

const DropMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${secondaryBackground};
  padding: 20px 0;
  min-width: 300px;
  box-shadow: -3px 2px 5px ${shadows};
  right: 0;
  z-index: 1;

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    width: 100vw;
    height: Calc(100vh - 68px);
    transition: 0.2s;
  }
`;

const dropMenuContainer = ({ children }) => {
  return <DropMenu>{children}</DropMenu>;
};

dropMenuContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default dropMenuContainer;
