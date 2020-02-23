/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";

import styled from "styled-components";

/* import:: components */
import Title from "../components/articleComponents/title";
import ProfessorInfo from "../components/ProfessorsContent/professorInfo";
import SubtitleHeader from "../components/articleComponents/subtitleHeader";
import ElementsHeader from "../components/articleComponents/ElementsHeader";

// section list components
import SectionHeader from "../components/lessonsList/sectionHeader";
import SectionChildrenHeader from "../components/lessonsList/sectionChildrenHeader";

// list components
import TextList from "../components/textList";
import LinkList from "../components/articleComponents/linkList";

/* import:: CONSTANT */
import { stringToPath } from "../function/stringToPath";
import { nameToUrl } from "../function/nameToUrl";

/* import:: CONFIG route names */
import { DEFAULT_ARTICLE_ROUTE_NAME as ARTICLE_NAME } from "../Config/routeName";

import Loading from "../components/Loading/LoadingCircleAnimation";
import Error404Page from "./errors/404";

/* import:: fetch Data function */
import UseFetch from "../hooks/UseFetch";

const ProfessorDetailsWrapper = styled.div`
  display: block;
  margin: 0 0 10px 0;
`;

const SectionChildren = styled.div`
  display: block;
  padding: 0 0 0 10px;
`;

const lessonListComponent = (data, location) => {
  const homeDepartment = `/${location.split("/")[1]}/${ARTICLE_NAME}`;

  const pushToArr = (arr, course, section) => {
    const ObjArr = [];
    arr.forEach(el =>
      ObjArr.push({
        text: el.name,
        href: `${homeDepartment}/${course}/${section}/${nameToUrl(el.name)}`
      })
    );
    return ObjArr;
  };

  return (
    <section>
      <SubtitleHeader>
        <FormattedMessage
          id="LessonsListHeader.LessonsList"
          defaultMessage="Full lessons list"
        />
      </SubtitleHeader>
      {data.map((section, index) => (
        <div key={index}>
          <SectionHeader href={`${homeDepartment}/${nameToUrl(section.name)}`}>
            {section.name}
          </SectionHeader>
          {section.elements.map((secEl, secElIndex) => (
            <SectionChildren key={secElIndex}>
              {secEl.type === "course" ? (
                <>
                  <SectionChildrenHeader
                    href={`${homeDepartment}/${nameToUrl(
                      section.name
                    )}#${stringToPath(secEl.name)}`}
                  >
                    {secEl.name}
                  </SectionChildrenHeader>
                  <LinkList>
                    {pushToArr(
                      secEl.lessons,
                      stringToPath(secEl.name),
                      nameToUrl(section.name)
                    )}
                  </LinkList>
                </>
              ) : (
                <SectionChildrenHeader
                  href={`${homeDepartment}/${nameToUrl(
                    section.name
                  )}#${stringToPath(secEl.name)}`}
                >
                  {secEl.name}
                </SectionChildrenHeader>
              )}
            </SectionChildren>
          ))}
        </div>
      ))}
    </section>
  );
};

const heldFunctionsSection = data => {
  return (
    <section>
      <SubtitleHeader>
        <FormattedMessage
          id="ProfessorDetails.heldFunction"
          defaultMessage="Held function"
        />
      </SubtitleHeader>
      {data.map((el, index) => (
        <div key={index}>
          <ElementsHeader>
            {el.header === "current" ? (
              <FormattedMessage
                id="ProfessorDetails.current"
                defaultMessage="Current"
              />
            ) : (
              <FormattedMessage
                id="ProfessorDetails.past"
                defaultMessage="Past"
              />
            )}
          </ElementsHeader>
          <TextList>{el.list}</TextList>
        </div>
      ))}
    </section>
  );
};

const activitiesListSection = data => {
  return (
    <section>
      {data.map((el, index) => (
        <div key={index}>
          <SubtitleHeader>{el.sectionName}</SubtitleHeader>
          {el.subsection ? (
            el.subsection.map((subS, subSecIndex) => (
              <div key={subSecIndex}>
                <ElementsHeader>{subS.name}</ElementsHeader>
                <TextList>{subS.list}</TextList>
              </div>
            ))
          ) : (
            <TextList>{el.list}</TextList>
          )}
        </div>
      ))}
    </section>
  );
};

const ProfessorPage = ({ match, history, location }) => {
  const { data, loading, fetchDataFromUrl } = UseFetch();

  useEffect(() => {
    let currentPage = true;
    if (currentPage) {
      fetchDataFromUrl(
        match
          ? `/api/professors/${match.params.department}/${match.params.name}`
          : null
      );
      if (!history.location.hash)
        document.getElementById("ContentPage").scrollIntoView();
    }
    return () => {
      currentPage = false;
    };
  }, [location.pathname]);

  return loading ? (
    <Loading />
  ) : data.type === "error" ? (
    <Error404Page message={data.msg} />
  ) : (
    <ProfessorDetailsWrapper>
      <Title ShowIcon={false}>
        {`${data.titles} ${data.name}
        ${data.surname}`}
      </Title>
      <ProfessorInfo
        name={data.name}
        photo={data.photo}
        department={data.department}
        contactInfo={data.contactInfo}
        orcid={data.ORCID}
      />
      {data.ArticlesList && lessonListComponent(data.ArticlesList, match.url)}
      {data.heldFunctions && heldFunctionsSection(data.heldFunctions)}
      {data.ActivitiesList && activitiesListSection(data.ActivitiesList)}
    </ProfessorDetailsWrapper>
  );
};

ProfessorPage.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
    action: PropTypes.string,
    location: PropTypes.object,
    createHref: PropTypes.func,
    push: PropTypes.func,
    replace: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    block: PropTypes.func,
    listen: PropTypes.func
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.bool,
    key: PropTypes.string
  }).isRequired
};

export default ProfessorPage;
