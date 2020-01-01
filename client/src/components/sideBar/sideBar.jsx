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
// Searched List components
import SearchedListBox from "./elements/searchedListBox";
import SearchLink from "./elements/searchLink";

import StandardRenderErrorDiv from "../errors/standardRenderErrorDiv";

/* import:: Function */
import { stringToPath } from "../../function/stringToPath";
import { nameToUrl } from "../../function/nameToUrl";

/* import:: SearchBar value Context form Provider  */
import { SearchBarContext } from "../navBar/elements/SearchBarProvider";

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
/:department/:section/:course/:lesson || don't allow have wild lesson
/:department/:section#course/:lesson || don't allow have lined nav

TEST: THIS WORK
/:department/:section//:lesson || add wild route

router.get("/:id//:name", (req, res) => {
  res.json({
    msg: `hello from wild route req: ${req.params.id} ${req.params.name}`
  });
});
*/
const DrawSideBarElements = (data, location, SearchValue) => {
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
            href={`${homeDepartment}/${nameToUrl(section.name)}//${nameToUrl(
              el.name
            )}`}
          >
            {el.name}
          </LessonLink>
        ) : (
          <CourseBox
            key={elIndex}
            id={stringToPath(el.name)}
            parentBox={nameToUrl(section.name)}
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

const DrawSearchListBarElements = (data, location) => {
  const homeDepartment = `${location}/${ARTICLE_ROUTE}`;

  return (
    <SearchedListBox>
      {data.map(section =>
        section.elements.map(el =>
          el.type === "lesson" ? (
            <SearchLink
              key={el.id}
              icon={section.icon}
              href={`${homeDepartment}/${nameToUrl(section.name)}//${nameToUrl(
                el.name
              )}`}
            >
              {section.name} / {el.name}
            </SearchLink>
          ) : (
            el.lessons.map(lesson => (
              <SearchLink
                key={lesson.id}
                icon={section.icon}
                href={`${homeDepartment}/${nameToUrl(
                  section.name
                )}/${stringToPath(el.name)}/${nameToUrl(lesson.name)}`}
              >
                {section.name} / {el.name} / {lesson.name}
              </SearchLink>
            ))
          )
        )
      )}
    </SearchedListBox>
  );
};
// TODO: name of rest app call if empty [articlesList]
const SideBarContainer = props => {
  const { toggleSidebar, match } = props;

  const mobileVersion = useContext(MobileContext);
  const SearchBarContextValue = useContext(SearchBarContext);

  return (
    <SideBar
      id="SideBar"
      show={(toggleSidebar || !mobileVersion).toString()}
      scrollbarMinSize={100}
    >
      {articlesList ? (
        <SideBarChildren>
          {!SearchBarContextValue.SearchValue
            ? DrawSideBarElements(articlesList, match.url)
            : DrawSearchListBarElements(
                articlesList,
                match.url,
                SearchBarContextValue.SearchValue
              )}
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
