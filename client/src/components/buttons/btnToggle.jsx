import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
// colors
import { textHeader, primaryHover, textInactive } from "../../Theme/theme";

import Icons from "../icons/Icon";

const ButtonToggle = styled.button.attrs({
  type: "button"
})`
  display: flex;
  align-items: center;

  color: ${textHeader};
  background: none;

  margin: 12px 30px;
  padding: 0px;

  border: none;
  cursor: pointer;
  outline: 0;

  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  white-space: nowrap;

  && > svg {
    padding-right: 13px;
    min-width: 24px;
  }

  :hover {
    color: ${primaryHover};
  }
  :hover path {
    fill: ${primaryHover};
  }

  :disabled {
    cursor: default;
    color: ${textInactive};
    background: none;
  }
`;

const btnToggle = ({ children, icon, events, disabled }) => {
  return (
    <ButtonToggle {...events} disabled={disabled}>
      <Icons name={icon} size={24} />
      {children}
    </ButtonToggle>
  );
};

btnToggle.propTypes = {
  icon: PropTypes.string.isRequired,
  events: PropTypes.PropTypes.objectOf(PropTypes.func).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  disabled: PropTypes.bool
};
btnToggle.defaultProps = {
  disabled: false
};

export default btnToggle;
