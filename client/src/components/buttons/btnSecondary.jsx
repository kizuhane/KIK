import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
// colors
import { textBold, textHint, activeContent } from "../../Theme/theme";

// TODO: Style THIS
const BtnSecondary = styled.button.attrs({
  type: "button"
})`
  position: relative;
  border: none;
  cursor: pointer;
  outline: 0;

  margin: 6px 34px;

  font-size: 24px;
  text-decoration: none;
  font-weight: normal;
  text-align: center;

  color: ${textBold};
  background: inherit;

  ::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 8px;
    width: 100%;
    height: 50%;
    background: ${activeContent};
  }

  /* :hover {
    color: ${activeContent};
  }
  :active {
    color: ${activeContent};
  } */

  :disabled {
    cursor: default;
    color: ${textHint};
    background: inherit;
  }
`;

const btnSecondary = ({ children, events, disabled }) => {
  return (
    <BtnSecondary {...events} disabled={disabled}>
      {children}
    </BtnSecondary>
  );
};

btnSecondary.propTypes = {
  children: PropTypes.element.isRequired,
  events: PropTypes.PropTypes.objectOf(PropTypes.func).isRequired,
  disabled: PropTypes.bool
};
btnSecondary.defaultProps = {
  disabled: false
};

export default btnSecondary;
