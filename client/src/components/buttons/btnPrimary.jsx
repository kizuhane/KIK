import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
// colors
import { textBold, textInactive, activeContent } from "../../Theme/theme";

const ButtonPrimary = styled.button.attrs(props => ({
  type: props.type
}))`
  position: relative;

  border: none;
  cursor: pointer;
  outline: 0;

  margin: 4px 12px;
  padding: 11px 27px;

  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  text-align: center;

  color: ${textBold};
  background: none;

  /* border  */
  background-image: linear-gradient(${textBold}, ${textBold}),
    linear-gradient(${textBold}, ${textBold}),
    linear-gradient(${textBold}, ${textBold}),
    linear-gradient(${textBold}, ${textBold});
  background-repeat: no-repeat;
  background-size: 3px 30px, 30px 3px, 3px 30px, 30px 3px;
  background-position: left top, left top, right bottom, right bottom;

  ::before {
    content: "";
    position: absolute;
    height: 15px;
    width: 0;

    top: 50%;
    left: 20%;
    transform: translate(0, -50%);
    opacity: 0;

    background-color: ${activeContent};
    z-index: -1;

    transition: 0.1s;
  }
  :hover::before {
    width: Calc(100% - 38px);
    left: 19px;
    opacity: 1;
  }

  :disabled {
    cursor: default;
    color: ${textInactive};
    background: none;

    background-image: linear-gradient(${textInactive}, ${textInactive}),
      linear-gradient(${textInactive}, ${textInactive}),
      linear-gradient(${textInactive}, ${textInactive}),
      linear-gradient(${textInactive}, ${textInactive});
    background-repeat: no-repeat;
    background-size: 3px 30px, 30px 3px, 3px 30px, 30px 3px;
    background-position: left top, left top, right bottom, right bottom;
  }
  :disabled:hover::before {
    display: none;
  }
`;

const btnPrimary = ({ children, events, disabled, type }) => {
  return (
    <ButtonPrimary {...events} disabled={disabled} type={type}>
      {children}
    </ButtonPrimary>
  );
};

btnPrimary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  events: PropTypes.PropTypes.objectOf(PropTypes.func).isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
};
btnPrimary.defaultProps = {
  type: "button",
  disabled: false
};

export default btnPrimary;
