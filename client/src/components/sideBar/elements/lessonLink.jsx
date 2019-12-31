import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
/* Import:: Theme */

import styled from "styled-components";
import { textHeader, primaryDefault, primaryHover } from "../../../Theme/theme";

const LessonNavLinkSelect = "LessonNavLinkActive";
const LessonNavLink = styled(NavLink)`
  padding: 10px 14px;
  text-decoration: none;
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  :link,
  :visited {
    color: ${textHeader};
  }
  :hover {
    color: ${primaryHover};
  }
  :active {
    color: ${primaryDefault};
  }
  &.${LessonNavLinkSelect} {
    color: ${primaryDefault};
  }
`;

const lessonLink = props => {
  const { href, children } = props;
  return (
    <LessonNavLink exact to={href} activeClassName={LessonNavLinkSelect}>
      {children}
    </LessonNavLink>
  );
};

lessonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default lessonLink;
