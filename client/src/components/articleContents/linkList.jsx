/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import ATag from "../aTag";

const LinkList = styled.ul`
  margin: 8px 0 4px 0;
  padding-inline-start: 20px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  & li {
    list-style-type: none;
  }
`;

const linkList = ({ children }) => {
  return (
    <LinkList>
      {children.map((el, elIndex) => (
        <li key={elIndex}>
          <ATag href={el.href}>{el.text}</ATag>
        </li>
      ))}
    </LinkList>
  );
};

linkList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string
      })
    ),
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string
    })
  ]).isRequired
};

export default linkList;
