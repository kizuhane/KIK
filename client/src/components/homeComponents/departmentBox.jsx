import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styled from "styled-components";
/* import:: colors */
import {
  textHeader,
  textHint,
  primaryBackground,
  primaryHover
} from "../../Theme/theme";

const DepartmentBoxLink = styled(Link)`
  display: flex;
  align-items: center;

  height: 100%;
  padding: 10px 20px;

  color: ${textHeader};

  border-width: 2px 0 2px 0;
  border-style: solid;
  border-color: ${textHint};

  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  text-transform: uppercase;

  text-decoration: none;
  justify-self: center;
  z-index: 1;

  :link,
  :visited {
    color: ${textHeader};
  }
  :hover {
    color: ${primaryHover};
    background-color: ${primaryBackground};

    padding-left: 10%;
    transition: 0.3s;
  }
  :active {
    color: ${textHeader};
  }
`;

const departmentBox = props => {
  const { title, to, children } = props;
  return (
    <DepartmentBoxLink title={title} to={to}>
      {children}
    </DepartmentBoxLink>
  );
};

departmentBox.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default departmentBox;
