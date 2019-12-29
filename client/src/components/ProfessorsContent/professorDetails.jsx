import React, { Children } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import { textBold, textHeader, textPrimary } from "../../Theme/theme";

/* import:: icons */
import Icon from "../icons/Icon";
import { contact } from "../icons/ICONS";

const ProfessorDetails = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  padding: 0 0 0 10px;
`;

const DepartmentHeader = styled.h4`
  color: ${textHeader};

  margin: 4px 0 10px 0;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;

const Address = styled.address`
  color: ${textPrimary};

  margin: 10px 0 15px 0;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  & div {
    position: relative;
    display: flex;

    align-items: center;
    align-content: center;
    margin: 0 0 10px 0;

    & div {
      display: block;
      margin: 0;
      padding-right: 8px;
    }
    & p {
      margin: 0;
      padding: 0;
    }
  }
`;

const Orcid = styled.p`
  margin: 0 0 10px 0;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;

const professorDetails = ({ department, contactInfo, orcid, children }) => {
  return (
    <ProfessorDetails>
      <DepartmentHeader>{department}</DepartmentHeader>
      <Address>
        <div>
          <div>
            <Icon name={contact.BUILDING} size={16} color={textBold} />
          </div>
          <p>{contactInfo.address}</p>
        </div>

        <div>
          <div>
            <Icon name={contact.ENVELOPE} size={16} color={textBold} />
          </div>
          <p>{contactInfo.mail}</p>
        </div>

        <div>
          <div>
            <Icon name={contact.PHONE} size={16} color={textBold} />
          </div>
          <p>{contactInfo.phone}</p>
        </div>
      </Address>
      <Orcid>{orcid}</Orcid>
      {children}
    </ProfessorDetails>
  );
};

professorDetails.propTypes = {
  department: PropTypes.string.isRequired,
  contactInfo: PropTypes.shape({
    address: PropTypes.string,
    mail: PropTypes.string,
    phone: PropTypes.string
  }).isRequired,
  orcid: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default professorDetails;
