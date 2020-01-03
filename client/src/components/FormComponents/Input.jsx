import React from "react";
import PropTypes from "prop-types";

/* import:: Theme */
import styled from "styled-components";
import { primaryDefault, textHint, textPrimary } from "../../Theme/theme";

const InputBox = styled.div`
  position: relative;
  display: block;

  margin-bottom: 16px;

  width: 100%;

  color: ${textPrimary};

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  & input {
    position: relative;
    width: 100%;

    margin: 0;
    padding: 10px 10px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;

    border: solid 2px transparent;

    background-color: inherit;

    ::placeholder {
      color: ${textHint};
    }

    :focus,
    :active {
      border-bottom: solid 2px ${primaryDefault};
      outline: 0 solid ${primaryDefault};
      transition: 0.3s;
    }
  }
`;

const Input = ({ id, type, children, placeholder, required, formData }) => {
  return (
    <InputBox>
      <label htmlFor={id}>
        {children}
        <input
          type={type}
          name={id}
          placeholder={placeholder}
          required={required}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...formData}
        />
      </label>
    </InputBox>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  required: PropTypes.bool,
  formData: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func
  }).isRequired
};

Input.defaultProps = {
  required: true
};
export default Input;
