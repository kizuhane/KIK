/* eslint-disable react/no-array-index-key */
import React from "react";

import { FormattedMessage } from "react-intl";

/* import:: theme */
import styled from "styled-components";
import { secondaryBackground } from "../Theme/theme";
/* import:: components */
import DepartmentBox from "../components/homeComponents/departmentBox";
import Loading from "../components/Loading/LoadingCircleAnimation";
import StandardRenderErrorDiv from "../components/errors/standardRenderErrorDiv";

/* import:: fetch Data function */
import useFetch from "../hooks/FetchData";

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
  const [data, loading] = useFetch("/api/departments");

  return loading ? (
    <Loading />
  ) : (
    <WelcomePageContainer>
      {data.length ? (
        data.map((el, index) => (
          <DepartmentBox key={index} title={el.descriptions} to={el.url}>
            {el.fullName}
          </DepartmentBox>
        ))
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
    </WelcomePageContainer>
  );
};

export default WelcomePage;
