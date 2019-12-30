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
  return (
    <PathDirection>
      <PathLink to={`${baseRoute}/${stringToPath(section)}`}>
        {section}
      </PathLink>
      <Icons
        name={PathDirectionIcons.PATH_SECTION}
        size={16}
        color={textBold}
      />
      <PathLink
        to={`${baseRoute}/${stringToPath(section)}#${stringToPath(course)}`}
      >
        {course}
      </PathLink>
      <Icons
        name={PathDirectionIcons.PATH_LESSONS}
        size={16}
        color={textBold}
      />
      <PathLink
        to={`${baseRoute}/${stringToPath(section)}/${stringToPath(
          course
        )}/${stringToPath(lesson)}`}
      >
        {lesson}
      </PathLink>
      <Separator />
      <PathLink to={`${baseRoute}/Professors/${stringToPath(author)}`}>
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
