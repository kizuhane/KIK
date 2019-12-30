/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";

import styled from "styled-components";

/* import:: components */
import Title from "../components/articleContent/title";
import ProfessorInfo from "../components/ProfessorsContent/professorInfo";
import SubtitleHeader from "../components/articleContent/subtitleHeader";
import ElementsHeader from "../components/articleContent/ElementsHeader";

// section list components
import SectionHeader from "../components/lessonsList/sectionHeader";
import SectionChildrenHeader from "../components/lessonsList/sectionChildrenHeader";

// list components
import TextList from "../components/textList";
import LinkList from "../components/articleContent/linkList";

/* import:: CONSTANT */
import { stringToPath } from "../function/stringToPath";

import ProfessorDetailsJSON from "../components/test-comp/PROFESSOR_DETAILS";

const ProfessorDetailsWrapper = styled.div`
  display: block;
  margin: 0 0 10px 0;
`;

const SectionChildren = styled.div`
  display: block;
  padding: 0 0 0 10px;
`;

const lessonListComponent = (data, location) => {
  const homeDepartment = `/${location.split("/")[1]}/articles`;

  const pushToArr = (arr, section) => {
    const a = [];
    arr.forEach(el =>
      a.push({
        text: el.name,
        href: `${homeDepartment}/${section}/${stringToPath(el.name)}`
      })
    );
    return a;
  };

  return (
    <section>
      <SubtitleHeader>
        <FormattedMessage
          id="ProfessorDetails.LessonsList"
          defaultMessage="Full lessons list"
        />
      </SubtitleHeader>
      {data.map((el, index) => (
        <div key={index}>
          <SectionHeader href={`${homeDepartment}/${stringToPath(el.section)}`}>
            {el.section}
          </SectionHeader>
          {el.elements.map((secEl, secElIndex) => (
            <SectionChildren key={secElIndex}>
              {secEl.type === "course" ? (
                <>
                  <SectionChildrenHeader
                    href={`${homeDepartment}/${stringToPath(
                      el.section
                    )}#${stringToPath(secEl.name)}`}
                  >
                    {secEl.name}
                  </SectionChildrenHeader>
                  <LinkList>{pushToArr(secEl.lessons, el.section)}</LinkList>
                </>
              ) : (
                <SectionChildrenHeader
                  href={`${homeDepartment}/${stringToPath(
                    el.section
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

const ProfessorPage = ({ location }) => {
  return (
    <ProfessorDetailsWrapper>
      <Title ShowIcon={false}>
        {`${ProfessorDetailsJSON.titles} ${ProfessorDetailsJSON.name}
        ${ProfessorDetailsJSON.surname}`}
      </Title>
      <ProfessorInfo
        name={ProfessorDetailsJSON.name}
        photo={ProfessorDetailsJSON.photo}
        department={ProfessorDetailsJSON.department}
        contactInfo={ProfessorDetailsJSON.contactInfo}
        orcid={ProfessorDetailsJSON.ORCID}
      />
      {lessonListComponent(
        ProfessorDetailsJSON.ArticlesList,
        location.pathname
      )}
      {heldFunctionsSection(ProfessorDetailsJSON.heldFunctions)}
      {activitiesListSection(ProfessorDetailsJSON.ActivitiesList)}
    </ProfessorDetailsWrapper>
  );
};

ProfessorPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string
  }).isRequired
};

export default ProfessorPage;