import React from "react";
import PropTypes from "prop-types";

/* import:: Router */
import { Link } from "react-router-dom";

/* import:: Theme */
import styled from "styled-components";
// colors
import { textBold, textPrimary } from "../../Theme/theme";

import Icons from "../icons/Icon";
/* import:: ICONS */
import { PathDirectionIcons } from "../icons/ICONS";

/* import:: functions */
import { stringToPath } from "../../function/stringToPath";

const PathDirection = styled.nav`
  margin: 14px 5px 4px 28px;
  padding: 0;

  display: flex;
`;
const PathLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
`;

const Separator = styled.samp`
  font-size: 14px;
  ::after {
    content: "|";
  }
`;

const pathDirection = props => {
  const { section, course, lesson, author } = props;
  stringToPath(section);
  return (
    <PathDirection>
      <PathLink to="#1">{section}</PathLink>
      <Icons
        name={PathDirectionIcons.PATH_SECTION}
        size={16}
        color={textBold}
      />
      <PathLink to="#2">{course}</PathLink>
      <Icons
        name={PathDirectionIcons.PATH_LESSONS}
        size={16}
        color={textBold}
      />
      <PathLink to="#3">{lesson}</PathLink>
      <Separator />
      <PathLink to="#4">{author}</PathLink>
    </PathDirection>
  );
};

pathDirection.propTypes = {
  section: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  lesson: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default pathDirection;
