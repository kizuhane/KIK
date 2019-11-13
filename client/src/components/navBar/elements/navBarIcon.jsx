import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
// colors
import {
  textPrimary,
  primaryHover,
  primaryDefault
} from "../../../Theme/theme";
/* import:: Icon */
import Icon from "../../icons/Icon";

const navMenuIcon = ({ name }) => {
  const DropDownButton = styled.button`
    margin-left: auto;
    background: inherit;
    padding: 12px 14px;
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
  `;
  return (
    <DropDownButton>
      <Icon name={name} size={24} color={textPrimary} />
    </DropDownButton>
  );
};
navMenuIcon.propTypes = {
  name: PropTypes.string.isRequired
};
export default navMenuIcon;
