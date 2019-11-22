import React, { useContext } from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
/* import:: colors */
import { secondaryBackground, textPrimary } from "../../Theme/theme";

/* import:: CONSTANT VALUE */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";
import { MobileContext } from "../../Pages/layout/mobileProvider";

const SideBar = styled.nav`
  position: fixed;
  left: 0;

  display: flex;
  flex-direction: column;
  height: ${props => (props.show ? "calc(100% - 48px)" : "0")};
  ${props => (props.show ? "z-index: 99" : "")};

  width: 316px;

  overflow-y: scroll;

  background: ${secondaryBackground};
  color: ${textPrimary};

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    width: 100%;
    transition: 0.2s;
  }
`;

const SideBarContainer = props => {
  const { children, toggleSidebar } = props;
  const mobileVersion = useContext(MobileContext);
  return <SideBar show={toggleSidebar || !mobileVersion}>{children}</SideBar>;
};

SideBarContainer.propTypes = {
  children: PropTypes.node.isRequired,
  toggleSidebar: PropTypes.bool.isRequired
};

export default SideBarContainer;
