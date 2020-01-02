import React from "react";
import PropTypes from "prop-types";

/* import:: Router */
import { Link } from "react-router-dom";

/* import:: Theme */
import styled from "styled-components";
// colors
import { textBold, textPrimary, textHyperlink } from "../../Theme/theme";

import Icons from "../icons/Icon";
/* import:: ICONS */
import { PathDirectionIcons } from "../icons/ICONS";

/* import:: functions */
import { stringToPath } from "../../function/stringToPath";
import { nameToUrl } from "../../function/nameToUrl";

/* import:: CONFIG route path name */
import {
  DEFAULT_ARTICLE_ROUTE_NAME as ARTICLE_ROUTE,
  DEFAULT_PROFESSORS_ROUTE_NAME as PROFESSOR_ROUTE
} from "../../Config/routeName";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";

// TODO: FIX wrapping and spacing between elements
const PathDirection = styled.nav`
  margin: 14px 5px 4px 28px;
  padding: 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  && svg {
    display: block;
    padding: 0 5px;
  }

  && svg:nth-of-type(2) {
    padding-right: 20px;
  }

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    margin: 14px 5px 4px 5px;
  }
`;

const PathLink = styled(Link)`
  font-size: 14px;
  padding: 0;

  float: left;

  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  :link,
  :visited {
    color: ${textPrimary};
  }
  :hover {
    color: ${textHyperlink};
  }

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    width: min-content;
  }
`;

const Separator = styled.span`
  font-size: 14px;
  ::after {
    content: "|";
    padding: 0 5px;
  }
`;
const pathDirection = ({ baseRoute, section, course, lesson, author }) => {
  const homeDepartment = `/${baseRoute.split("/")[1]}`;
  return (
    <PathDirection>
      <PathLink to={`${homeDepartment}/${ARTICLE_ROUTE}/${nameToUrl(section)}`}>
        {section}
      </PathLink>
      <Icons
        name={PathDirectionIcons.PATH_SECTION}
        size={16}
        color={textBold}
      />
      {course && (
        <PathLink
          to={`${homeDepartment}/${ARTICLE_ROUTE}/${nameToUrl(
            section
          )}#${stringToPath(course)}`}
        >
          {course}
        </PathLink>
      )}
      <Icons
        name={PathDirectionIcons.PATH_LESSONS}
        size={16}
        color={textBold}
      />
      <PathLink
        to={`${homeDepartment}/${ARTICLE_ROUTE}/${nameToUrl(
          section
        )}/${nameToUrl(lesson)}`}
      >
        {lesson}
      </PathLink>
      <Separator />
      <PathLink
        to={`${homeDepartment}/${PROFESSOR_ROUTE}/${nameToUrl(author)}`}
      >
        {author}
      </PathLink>
    </PathDirection>
  );
};

pathDirection.propTypes = {
  baseRoute: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  lesson: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default pathDirection;
