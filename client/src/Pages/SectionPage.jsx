/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";

/* import:: components */
import Title from "../components/articleContents/title";
import SubtitleHeader from "../components/articleContents/subtitleHeader";
import ElementsHeader from "../components/articleContents/ElementsHeader";

import SectionChildrenHeader from "../components/lessonsList/sectionChildrenHeader";
import LinkList from "../components/articleContents/linkList";

/* import:: CONSTANT */
import { stringToPath } from "../function/stringToPath";
import { nameToUrl } from "../function/nameToUrl";
import { hashLinkScroll } from "../function/hashLinkScroll";

// TODO: create request for json file using props from react router and create rest api
import sectionList from "../components/test-comp/SECTION_LIST";

const pushToArr = (arr, section) => {
  const ObjArr = [];
  arr.forEach(el =>
    ObjArr.push({
      text: el.name,
      href: `${section}/${nameToUrl(el.name)}`
    })
  );
  return ObjArr;
};

const SectionPage = props => {
  const { location } = props;
  /** @description jump do id from hash from link */
  useEffect(() => {
    hashLinkScroll(location.hash);
  });
  return (
    <>
      <Title ShowIcon={false}>{sectionList.name}</Title>
      <SubtitleHeader>
        <FormattedMessage
          id="LessonsListHeader.LessonsList"
          defaultMessage="Full lessons list"
        />
      </SubtitleHeader>
      {sectionList.elements.map((el, index) =>
        el.type === "lesson" ? (
          <div key={index}>
            <SectionChildrenHeader
              key={el.id}
              href={`${location.pathname}/${nameToUrl(el.name)}`}
            >
              {el.name}
            </SectionChildrenHeader>
          </div>
        ) : (
          <div key={index} id={stringToPath(el.name)}>
            <ElementsHeader key={el.id}>{el.name}</ElementsHeader>
            <LinkList>{pushToArr(el.lessons, location.pathname)}</LinkList>
          </div>
        )
      )}
    </>
  );
};

/* <LinkList>{pushToArr(secEl.lessons, section.name)}</LinkList> */

SectionPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string
  }).isRequired
};

export default SectionPage;

/* {lessonListComponent()} */
