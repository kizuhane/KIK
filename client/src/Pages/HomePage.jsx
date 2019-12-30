/* eslint-disable react/no-array-index-key */
import React from "react";

/* import:: theme */
import styled from "styled-components";
import { secondaryBackground } from "../Theme/theme";
/* import:: components */
import DepartmentBox from "../components/homeComponents/departmentBox";

// TODO: create rest api for this
import { departments } from "../components/test-comp/DEPARTAMENTS_LIST";

const WelcomePageContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  justify-content: space-around;
  align-content: stretch;

  background-color: ${secondaryBackground};

  :hover > a {
    opacity: 0.1;
  }

  & > a:hover {
    opacity: 1;
  }
`;

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      {departments.map((el, index) => (
        <DepartmentBox key={index} title={el.descriptions} to={el.url}>
          {el.fullName}
        </DepartmentBox>
      ))}
    </WelcomePageContainer>
  );
};

export default WelcomePage;
