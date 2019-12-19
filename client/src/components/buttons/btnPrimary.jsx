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

// TODO: Style THIS
const ButtonPrimary = styled.button.attrs({
  type: "button"
})`
  ${props => (props.hide ? "display:auto" : "")};
  ${props => (props.right ? "margin-left:auto" : "")};
  color: ${textPrimary};
  background: inherit;
  padding: ${props => props.padding};
  line-height: 0;
  border: none;
  cursor: pointer;
  outline: 0;

  :hover path {
    fill: ${primaryHover};
  }
  /* :focus path {
    fill: ${primaryDefault};
  } */
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

const btnPrimary = ({ children, events }) => {
  return <ButtonPrimary {...events}>{children}</ButtonPrimary>;
};

btnPrimary.propTypes = {
  children: PropTypes.element.isRequired,
  events: PropTypes.PropTypes.objectOf(PropTypes.func).isRequired
};

export default btnPrimary;
