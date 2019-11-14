import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled, { css } from "styled-components";
// colors
import {
  textPrimary,
  textHint,
  primaryHover,
  primaryDefault
} from "../../Theme/theme";
/* import:: Icon */
import Icon from "../icons/Icon";

const NavBarIcon = styled.button.attrs({
  type: "button"
})`
  ${props => (props.right ? "margin-left:auto" : "")};
  background: inherit;
  padding: ${props => props.padding};
  line-height: 0;
  border: none;
  cursor: pointer;
  outline: 0;

  :hover path {
    fill: ${primaryHover};
  }
  :focus path {
    fill: ${primaryDefault};
  }
  :disabled {
    cursor: default;
    & path {
      fill: ${textHint};
    }
  }

  ${props =>
    props.toggle
      ? css`
          && path {
            fill: ${primaryDefault};
          }
        `
      : null}
`;

const navBarIcon = ({
  name,
  events,
  size,
  toggle,
  padding,
  right,
  disabled
}) => {
  return (
    <NavBarIcon
      {...events}
      toggle={toggle}
      right={right}
      disabled={disabled}
      padding={padding}
    >
      <Icon name={name} size={size} color={textPrimary} />
    </NavBarIcon>
  );
};

navBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  events: PropTypes.PropTypes.objectOf(PropTypes.func).isRequired,
  size: PropTypes.number,
  padding: PropTypes.string,
  toggle: PropTypes.bool,
  right: PropTypes.bool,
  disabled: PropTypes.bool
};
navBarIcon.defaultProps = {
  size: 24,
  padding: "12px 14px",
  right: false,
  disabled: false,
  toggle: false
};

export default navBarIcon;
