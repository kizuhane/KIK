/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import { textPrimary } from "../Theme/theme";

const textList = ({ color, children }) => {
  const TextList = styled.ul`
    margin: 0 0 4px 0;
    padding-inline-start: 10px;

    color: ${color};

    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    & li {
      list-style-type: none;
    }
    & p {
      margin: 0;
    }
  `;
  return (
    <TextList>
      {children.map((el, elIndex) => (
        <li key={elIndex}>
          <p>{el}</p>
        </li>
      ))}
    </TextList>
  );
};

textList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.func
};
textList.defaultProps = {
  color: textPrimary
};

export default textList;
