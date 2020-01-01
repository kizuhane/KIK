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

/* import:: components */
import Icon from "../../icons/Icon";

const LessonNavLinkSelect = "LessonNavLinkActive";
const LessonNavLink = styled(NavLink)`
  display: flex;
  padding: 5px 10px;
  align-items: center;

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

  & > span:nth-child(1) {
    display: block;
    padding-right: 5px;
  }
`;

const searchLink = ({ icon, href, children }) => {
  return (
    <LessonNavLink exact to={href} activeClassName={LessonNavLinkSelect}>
      {icon && (
        <span>
          <Icon name={icon} size={18} color={textBold} />
        </span>
      )}
      {children}
    </LessonNavLink>
  );
};

searchLink.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
};

export default searchLink;
