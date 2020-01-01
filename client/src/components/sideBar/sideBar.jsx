/* eslint-disable react/no-array-index-key */
import React, { useContext } from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";

import SimpleBarReact from "simplebar-react";

/* import:: Theme */
import styled from "styled-components";
/* import:: colors */
import { secondaryBackground, textPrimary } from "../../Theme/theme";

/* import:: components */
import SectionBox from "./elements/SectionBox";
import CourseBox from "./elements/CourseBox";
import LessonLink from "./elements/lessonLink";

import StandardRenderErrorDiv from "../errors/standardRenderErrorDiv";

/* import:: Function */
import { stringToPath } from "../../function/stringToPath";
import { nameToUrl } from "../../function/nameToUrl";

/* import:: CONFIG route names */
import { DEFAULT_ARTICLE_ROUTE_NAME as ARTICLE_ROUTE } from "../../Config/routeName";

/* import:: CONSTANT VALUE */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";
import { MobileContext } from "../../Pages/layout/mobileProvider";

// TODO: create request for json file using props from react router and create rest api
import articlesList from "../test-comp/FULL_ARTICLE_LIST";

// const SideBar = styled.div`
const SideBar = styled(SimpleBarReact)`
  position: fixed;
  left: 0;

  display: flex;
  flex-direction: column;
  height: ${props => (props.show === "true" ? "calc(100% - 48px)" : "0")};
  ${props => (props.show === "true" ? "z-index: 99" : "")};

  width: 316px;
  /* overflow-y: scroll; */

  background: ${secondaryBackground};
  color: ${textPrimary};

  && .simplebar-scrollbar::before {
    background: ${textPrimary};
  }

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    width: 100%;
    transition: 0.2s;
  }
`;
const SideBarChildren = styled.div`
  position: relative;
  display: block;

  margin: 0;
`;
/* 
TODO: FIXME: ERROR: pat don't work if lesson don't have course
/:department/:section/:course/:lesson don't allow have wild lesson
/:department/:section#course/:lesson don't allow have lined nav
*/
const drawSideBarElements = (data, location) => {
  const homeDepartment = `${location}/${ARTICLE_ROUTE}`;

  return data.map((section, sectionIndex) => (
    <SectionBox
      key={sectionIndex}
      id={nameToUrl(section.name)}
      icon={section.icon}
      quantity={section.elements.length}
      name={section.name}
    >
      {section.elements.map((el, elIndex) =>
        el.type === "lesson" ? (
          <LessonLink
            key={el.id}
            href={`${homeDepartment}/${nameToUrl(el.name)}`}
          >
            {el.name}
          </LessonLink>
        ) : (
          <CourseBox
            key={elIndex}
            id={stringToPath(el.name)}
            parentBox={nameToUrl(el.name)}
            quantity={el.lessons.length}
            name={el.name}
          >
            {el.lessons.map(lesson => (
              <LessonLink
                key={lesson.id}
                href={`${homeDepartment}/${nameToUrl(
                  section.name
                )}/${stringToPath(el.name)}/${nameToUrl(lesson.name)}`}
              >
                {lesson.name}
              </LessonLink>
            ))}
          </CourseBox>
        )
      )}
    </SectionBox>
  ));
};

// TODO: search bar LOGIC
// TODO: name of rest app call if empty
const SideBarContainer = props => {
  const { toggleSidebar, match } = props;
  console.log("SideBarContainer", props);
  const mobileVersion = useContext(MobileContext);

  const _1stElement = articlesList[1];
  return (
    <SideBar
      id="SideBar"
      show={(toggleSidebar || !mobileVersion).toString()}
      scrollbarMinSize={100}
    >
      {articlesList ? (
        <SideBarChildren>
          {drawSideBarElements(articlesList, match.url)}
        </SideBarChildren>
      ) : (
        <StandardRenderErrorDiv
          message={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <FormattedMessage
              id="error.SideBarEmpty"
              defaultMessage="Sadly there is nothing here"
            />
          }
        />
      )}
    </SideBar>
  );
};

SideBarContainer.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default SideBarContainer;

/*
<SideBarChildren>
          <SectionBox
            id={nameToUrl(_1stElement.name)}
            icon={_1stElement.icon}
            quantity={_1stElement.elements.length}
            name={_1stElement.name}
          >
            <LessonLink href="/">Lorem 1</LessonLink>
            <LessonLink href="/">Lorem 1</LessonLink>
            <CourseBox
              id={stringToPath(_1stElement.elements[1].name)}
              parentBox={nameToUrl(_1stElement.name)}
              quantity={_1stElement.elements[1].lessons.length}
              name={_1stElement.elements[1].name}
            >
              <LessonLink href="/KIK/article/Java/instalacja/c">
                Lorem 1
              </LessonLink>
              <LessonLink href="/">Lorem 2</LessonLink>
              <LessonLink href="/">Lorem 3</LessonLink>
              <LessonLink href="/">Lorem ipsum dolor sit amet.</LessonLink>
              <LessonLink href="/">Lorem ipsum dolor sit amet.</LessonLink>
            </CourseBox>
          </SectionBox>
          <SectionBox
            id="XD"
            icon={_1stElement.icon}
            quantity={_1stElement.elements.length}
            name="XD"
          >
            <LessonLink href="/">Lorem ipsum dolor sit amet.</LessonLink>
          </SectionBox>
          <SectionBox
            id="BLA"
            icon=""
            quantity={_1stElement.elements.length}
            name="BLA"
          >
            <>
              <LessonLink href="/KIK/article/BLA/a">Lorem 1</LessonLink>
              <LessonLink href="/">Lorem 2</LessonLink>
              <LessonLink href="/">Lorem 3</LessonLink>
              <LessonLink href="/">Lorem ipsum dolor sit amet.</LessonLink>
            </>
          </SectionBox>
        </SideBarChildren>

*/
