import React, { useState } from "react";
import PropTypes from "prop-types";

import { useLocation } from "react-router-dom";

/* import:: Theme */
import styled from "styled-components";
/* import:: colors */
import {
  textPrimary,
  textBold,
  textHeader,
  textHint,
  activeNavigation
} from "../../../Theme/theme";

import { SideBarArrows } from "../../icons/ICONS";
import ButtonIcon from "../../buttons/BtnIcon";

/* import:: CONFIG route names */
import { DEFAULT_ARTICLE_ROUTE_NAME as ARTICLE_NAME } from "../../../Config/routeName";

const CourseBoxContainer = styled.div`
  display: block;
`;

const CourseBoxHeader = styled.div`
  display: flex;
  align-items: center;

  color: ${textHeader};

  padding: 5px 10px 5px 20px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  background: ${props => (props.active ? activeNavigation : "")};

  padding-bottom: ${props => (props.active ? "10px" : "5px")};

  :hover {
    background: ${activeNavigation}7f;
  }
  & button {
    background: none;
  }

  & button:hover path {
    background: inherit;
    fill: ${textHeader};
  }

  & > a {
    display: block;
    width: 100%;

    color: inherit;
    text-decoration: none;
  }

  & div {
    background: red;
    /* display: none; */
  }
`;
const QuantityNumber = styled.span`
  color: ${textHint};
  font-size: 12px;
`;

/** @description  children container */
const CourseBoxElements = styled.div`
  ${props => (props.show ? "" : "display:none")}
  padding: 0;

  & a {
    padding-left: 40px;
  }
`;

const CourseBox = ({ id, parentBox, name, quantity, children }) => {
  const location = useLocation();

  const currentParentUrl = `/${
    location.pathname.split("/")[1]
  }/${ARTICLE_NAME}/${parentBox}`;

  const defaultShowSection = () => {
    const pathHeader = location.pathname.split("/");
    return pathHeader[3] === parentBox && pathHeader[4] === id;
  };

  const [showCourseSectionBox, _setShowCourseSectionBox] = useState(
    defaultShowSection()
  );

  const toggleShowCourseSectionBox = () => {
    _setShowCourseSectionBox(!showCourseSectionBox);
  };

  return (
    <CourseBoxContainer>
      <CourseBoxHeader active={defaultShowSection()}>
        <ButtonIcon
          name={
            showCourseSectionBox
              ? SideBarArrows.CARET_DOWN
              : SideBarArrows.CARET_RIGHT
          }
          size={14}
          padding="0 5px 0 0"
          color={showCourseSectionBox ? textBold : textPrimary}
          events={{ onClick: () => toggleShowCourseSectionBox() }}
        />
        <a href={`${currentParentUrl}/${id}`}>{name}</a>
        <QuantityNumber>{quantity}</QuantityNumber>
      </CourseBoxHeader>
      <CourseBoxElements show={showCourseSectionBox}>
        {children}
      </CourseBoxElements>
    </CourseBoxContainer>
  );
};

CourseBox.propTypes = {
  id: PropTypes.string.isRequired,
  parentBox: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default CourseBox;
