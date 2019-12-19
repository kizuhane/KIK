import React, { useContext } from "react";
import PropTypes from "prop-types";

import SimpleBarReact from "simplebar-react";

/* import:: Theme */
import styled from "styled-components";
/* import:: colors */
import { secondaryBackground, textPrimary } from "../../Theme/theme";

/* import:: CONSTANT VALUE */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";
import { MobileContext } from "../../Pages/layout/mobileProvider";

// const SideBar = styled.div`
const SideBar = styled(SimpleBarReact)`
  position: fixed;
  left: 0;

  display: flex;
  flex-direction: column;
  height: ${props => (props.show === "true" ? "calc(100% - 48px)" : "0")};
  ${props => (props.show === "true" ? "z-index: 99" : "")};

  width: 316px;
  /* overflow-y: scroll; */

  background: ${secondaryBackground};
  color: ${textPrimary};

  && .simplebar-scrollbar::before {
    background: ${textPrimary};
  }

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    width: 100%;
    transition: 0.2s;
  }
`;

// TODO: search bar LOGIC
const SideBarContainer = props => {
  const { children, toggleSidebar } = props;
  const mobileVersion = useContext(MobileContext);
  return (
    <SideBar
      show={(toggleSidebar || !mobileVersion).toString()}
      scrollbarMinSize={100}
    >
      {children}
    </SideBar>
  );
};

SideBarContainer.propTypes = {
  children: PropTypes.node.isRequired,
  toggleSidebar: PropTypes.bool.isRequired
};

export default SideBarContainer;
