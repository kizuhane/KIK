import React from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";

import styled from "styled-components";
/* import:: colors */
import {
  textBold,
  activeContent,
  textHeader,
  textHint,
  textHyperlink
} from "../../Theme/theme";

/* import:: components */
import ProfessorDetails from "./professorDetails";
import ProfessorPhoto from "./ProfessorPhoto";
import ProfessorMoreLink from "./professorMoreLink";
import StandardRenderErrorDiv from "../errors/standardRenderErrorDiv";

const InfoBox = styled.div`
  display: flex;
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
  console.log(MoreBtnLink);
  return (
    <InfoBox>
      {!mobileVersion && photo ? (
        <ProfessorPhoto image={photo} name={name} />
      ) : (
        <StandardRenderErrorDiv message={name} icon={false} />
      )}
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
  mobileVersion: PropTypes.bool.isRequired,
  MoreBtnLink: PropTypes.string
};
professorInfo.defaultProps = {
  MoreBtnLink: ""
};

export default professorInfo;
