import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
import {
  textPrimary,
  primaryHover,
  secondaryBackground,
  primaryDefault,
  alertWarning
} from "../../Theme/theme";

const CheckBox = styled.label`
  display: flex;
  justify-content: center;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: ${textPrimary};

  :hover {
    color: ${primaryHover};
  }

  & > input {
    display: block;
    margin: auto;

    height: 20px;
    width: 20px;

    outline-color: ${primaryDefault};

    color: ${primaryHover};
    background-color: ${secondaryBackground};
    :hover {
      background-color: #ccc;
    }
    :after {
      border: solid red;
      border-width: 0 3px 3px 0;
    }
    :focus,
    :active {
      background: ${primaryDefault};
    }

    :checked {
      background-color: ${alertWarning};
    }
  }
`;

const checkBox = ({ id, children, name }) => {
  return (
    <CheckBox htmlFor={id}>
      <input id={id} type="checkbox" name={name} />
      {children}
    </CheckBox>
  );
};

checkBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired
};

export default checkBox;
