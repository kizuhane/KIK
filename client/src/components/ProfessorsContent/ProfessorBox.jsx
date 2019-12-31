import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import styled from "styled-components";
/* import:: colors */
import {
  textBold,
  activeContent,
  textHeader,
  textHint,
  textHyperlink
} from "../../Theme/theme";

/* import:: icons */
import ButtonIcon from "../buttons/BtnIcon";

import { LINK, SectionArrows } from "../icons/ICONS";

/* import:: components */
import ProfessorInfo from "./professorInfo";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";
import { MobileContext } from "../../Pages/layout/mobileProvider";
import { copyStringToClipboard } from "../../function/copyStringToClipboard";
import { nameToUrl } from "../../function/nameToUrl";

const SectionContainer = styled.section`
  margin: 8px 0 18px 0;
  padding: 0;

  /* border  */
  background-image: linear-gradient(${textBold}, ${textBold}),
    linear-gradient(${textBold}, ${textBold}),
    linear-gradient(${textBold}, ${textBold}),
    linear-gradient(${textBold}, ${textBold});
  background-repeat: no-repeat;
  background-size: 3px 30px, 90px 3px, 3px 30px, 90px 3px;
  background-position: left top, left top, right bottom, right bottom;
`;

const SectionHeaderContainer = styled.div`
  display: flex;

  padding: 11px 20px;

  & button:nth-of-type(1) {
    :hover path {
      fill: ${textHyperlink};
    }
  }
`;

const SectionHeader = styled.h3.attrs(props => ({
  id: props.id
}))`
  position: relative;
  cursor: pointer;

  margin: 0;

  font-size: 24px;
  text-decoration: none;
  font-weight: bold;

  color: ${textBold};
  background: none;

  color: ${textHeader};

  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  ::before {
    content: "";
    position: absolute;
    height: 55%;
    ${props => (props.show ? "width: Calc(100% + 16px);" : "width: 0;")}

    top: 50%;
    ${props => (props.show ? "left: -8px;" : "left: 20%;")}
    ${props => (props.show ? "opacity: 1;" : "opacity: 0;")}
    
    background-color: ${activeContent};
    z-index: -1;
    
    transform: translate(0, -50%);
    transition: 0.1s;
  }
  :hover::before {
    width: Calc(100% + 16px);
    left: -8px;
    opacity: 1;
  }
`;

const SectionElements = styled.div`
  ${props => (props.show ? "" : "display:none")}
  padding: 3px 20px 11px 20px;

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    padding: 3px 15px 11px 15px;
  }
`;

const ProfessorBox = ({
  name,
  titles,
  photo,
  department,
  contactInfo,
  orcid
}) => {
  const history = useHistory();
  const mobileVersion = useContext(MobileContext);
  const elementID = nameToUrl(name);

  const defaultShowSection = () => {
    return !!(decodeURI(history.location.hash) === `#${elementID}`);
  };

  const [showSection, _setShowSection] = useState(defaultShowSection());

  const toggleShowSection = e => {
    _setShowSection(!showSection);
  };

  const updateHref = e => {
    history.push({
      hash: e.currentTarget.parentElement.parentElement.getAttribute("id")
    });
    copyStringToClipboard(window.location);
  };

  return (
    <SectionContainer id={elementID}>
      <SectionHeaderContainer>
        <SectionHeader show={showSection} onClick={toggleShowSection}>
          {mobileVersion ? name : `${titles} ${name}`}
        </SectionHeader>
        <ButtonIcon
          right
          padding="0 10px"
          name={LINK}
          size={24}
          color={textHint}
          events={{
            onClick: updateHref
          }}
        />
        <ButtonIcon
          padding="0 10px"
          toggle={showSection}
          name={
            showSection ? SectionArrows.CHEVRON_UP : SectionArrows.CHEVRON_DOWN
          }
          size={24}
          color={textHeader}
          events={{
            onClick: () => toggleShowSection()
          }}
        />
      </SectionHeaderContainer>
      <SectionElements show={showSection}>
        <ProfessorInfo
          name={name}
          photo={photo}
          department={department}
          contactInfo={contactInfo}
          orcid={orcid}
          mobileVersion={mobileVersion}
          MoreBtnLink={`${history.location.pathname}/${elementID}`}
        />
      </SectionElements>
    </SectionContainer>
  );
};

ProfessorBox.propTypes = {
  name: PropTypes.string.isRequired,
  titles: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  contactInfo: PropTypes.shape({
    address: PropTypes.string,
    mail: PropTypes.string,
    phone: PropTypes.string
  }).isRequired,
  orcid: PropTypes.string.isRequired
};

export default ProfessorBox;
