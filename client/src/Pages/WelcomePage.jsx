import React from "react";
import PropTypes from "prop-types";

/* import:: theme */
import styled from "styled-components";

/* import:: components */
import Paragraphs from "../components/articleComponents/paragraphs";
import ElementsHeader from "../components/articleComponents/ElementsHeader";
import BtnPrimary from "../components/buttons/btnPrimary";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../Constant/CONSTANT_STYLE_VALUE";

const WelcomePageContainer = styled.div`
  margin: 15% 10px;

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    text-align: center;
  }
`;

const GoToInfoPage = history => {
  const homeDepartment = `/${history.location.pathname.split("/")[1]}`;
  history.push(`${homeDepartment}/About`);
};

const WelcomePage = ({ history }) => {
  return (
    <WelcomePageContainer>
      <h1>Witam na stronie Bazy wiedzy Politechniki Koszalińskiej </h1>
      <Paragraphs>
        Jest to strona zawierające lekcje, dokumentacje oraz informacje dla
        studentów z poszczególnych katedr z Politechniki Koszalińskiej
      </Paragraphs>
      <ElementsHeader>Po więcej informacji zajrzyj tutaj</ElementsHeader>
      <BtnPrimary events={{ onClick: () => GoToInfoPage(history) }}>
        Informacje o stronie
      </BtnPrimary>
    </WelcomePageContainer>
  );
};

WelcomePage.propTypes = {
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
  }).isRequired
};

export default WelcomePage;
