import React from "react";
import PropTypes from "prop-types";

/* Import:: Theme */
import styled, { css } from "styled-components";

import { textHeader, primaryHover, primaryDefault } from "../../../Theme/theme";

import Icons from "../../icons/Icon";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../../Constant/CONSTANT_STYLE_VALUE";

const ToggleBtn = styled.button.attrs({
  type: "button"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${textHeader};
  background: inherit;

  padding: 12px 30px;

  border: none;
  cursor: pointer;
  outline: 0;

  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  ${props =>
    props.toggle
      ? css`
          && path {
            fill: ${primaryDefault};
          }
        `
      : null}

  :hover {
    color: ${primaryHover};
  }
  :hover path {
    fill: ${primaryHover};
  }

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    padding: 12px 85px;
  }
`;

const dropDownToggleBtn = ({ children, icon, events, toggle }) => {
  return (
    <ToggleBtn {...events} toggle={toggle}>
      {children}
      <Icons name={icon} size={24} />
    </ToggleBtn>
  );
};

dropDownToggleBtn.propTypes = {
  icon: PropTypes.string.isRequired,
  events: PropTypes.PropTypes.objectOf(PropTypes.func).isRequired,
  children: PropTypes.element.isRequired,
  toggle: PropTypes.bool
};

dropDownToggleBtn.defaultProps = {
  toggle: false
};

export default dropDownToggleBtn;
