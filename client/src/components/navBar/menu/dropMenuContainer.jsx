import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
// colors
import { secondaryBackground, shadows } from "../../../Theme/theme";

const DropMenu = styled.div`
  display: block;
  position: absolute;
  background-color: ${secondaryBackground};
  padding: 10px 0;
  min-width: 160px;
  box-shadow: 0px 3px 5px ${shadows};
  right: 0;
  z-index: 1;
`;

const dropMenuContainer = ({ children }) => {
  return <DropMenu>{children}</DropMenu>;
};

dropMenuContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default dropMenuContainer;
