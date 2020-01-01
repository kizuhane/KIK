import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
/* Import:: Theme */

import styled from "styled-components";
import {
  textPrimary,
  textBold,
  primaryDefault,
  activeNavigation,
  textHyperlink,
  primaryBackground
} from "../../../Theme/theme";

const LessonNavLinkSelect = "LessonNavLinkActive";
const LessonNavLink = styled(NavLink)`
  display: block;
  padding: 5px 10px;

  color: ${textPrimary};

  text-decoration: none;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  :link,
  :visited {
    color: ${textPrimary};
  }
  :hover {
    color: ${textBold};
    background-color: ${activeNavigation}7F;
  }
  :active {
    color: ${primaryDefault};
  }
  &.${LessonNavLinkSelect} {
    color: ${textHyperlink};
    background-color: ${primaryBackground};
  }
`;

const lessonLink = ({ href, children }) => {
  return (
    <LessonNavLink exact to={href} activeClassName={LessonNavLinkSelect}>
      {children}
    </LessonNavLink>
  );
};

lessonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default lessonLink;
