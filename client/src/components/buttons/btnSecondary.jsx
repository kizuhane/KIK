import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
// colors
import { textBold, textInactive, activeContent } from "../../Theme/theme";

const BtnSecondary = styled.button.attrs({
  type: "button"
})`
  position: relative;

  border: none;
  cursor: pointer;
  outline: 0;

  margin: 6px 26px;
  padding: 0px 8px;

  font-size: 24px;
  text-decoration: none;
  font-weight: normal;
  text-align: center;

  color: ${textBold};
  background: none;

  ::before {
    content: "";
    position: absolute;
    height: 15px;
    width: 0;

    top: 50%;
    left: 10%;
    transform: translate(0, -50%);
    opacity: 0;

    background-color: ${activeContent};
    z-index: -1;

    transition: 0.1s;
  }
  :hover::before {
    width: 100%;
    left: 0;
    opacity: 1;
  }

  :disabled {
    cursor: default;
    color: ${textInactive};
    background: none;
  }
  :disabled:hover::before {
    display: none;
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  events: PropTypes.PropTypes.objectOf(PropTypes.func).isRequired,
  disabled: PropTypes.bool
};
btnSecondary.defaultProps = {
  disabled: false
};

export default btnSecondary;
