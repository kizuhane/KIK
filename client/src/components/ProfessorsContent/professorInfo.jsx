import React from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";

import styled from "styled-components";

/* import:: components */
import ProfessorDetails from "./professorDetails";
import ProfessorPhoto from "./ProfessorPhoto";
import ProfessorMoreLink from "./professorMoreLink";
import StandardRenderErrorDiv from "../errors/standardRenderErrorDiv";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";

const InfoBox = styled.div`
  display: flex;
  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    & img {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
    }
  }
`;

const professorInfo = ({
  name,
  photo,
  department,
  contactInfo,
  orcid,
  MoreBtnLink,
  mobileVersion
}) => {
  return (
    <InfoBox>
      {!mobileVersion &&
        (photo ? (
          <ProfessorPhoto image={photo} name={name} />
        ) : (
          <StandardRenderErrorDiv message={name} icon={false} />
        ))}
      <ProfessorDetails
        department={department}
        contactInfo={contactInfo}
        orcid={orcid}
      >
        {MoreBtnLink && (
          <ProfessorMoreLink href={MoreBtnLink}>
            <FormattedMessage
              id="ProfessorBox.moreLink"
              defaultMessage="More..."
            />
          </ProfessorMoreLink>
        )}
      </ProfessorDetails>
    </InfoBox>
  );
};

professorInfo.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  contactInfo: PropTypes.shape({
    address: PropTypes.string,
    mail: PropTypes.string,
    phone: PropTypes.string
  }).isRequired,
  orcid: PropTypes.string.isRequired,
  mobileVersion: PropTypes.bool,
  MoreBtnLink: PropTypes.string
};
professorInfo.defaultProps = {
  mobileVersion: false,
  MoreBtnLink: ""
};

export default professorInfo;
