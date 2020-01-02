import React from "react";
import { FormattedMessage } from "react-intl";

/* import:: Router */
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import BtnSecondary from "../../buttons/btnSecondary";

const LoginBtnContainer = styled.div`
  text-align: center;
`;

const LoginBtn = () => {
  const history = useHistory();
  // NOTE: Login logic
  const login = false;
  return (
    <LoginBtnContainer>
      <BtnSecondary
        to="#6"
        events={{ onClick: () => history.push("/admin/login") }}
      >
        {!login ? (
          <FormattedMessage id="navMenu.LogIn" defaultMessage="Log In" />
        ) : (
          <FormattedMessage id="navMenu.LogOut" defaultMessage="Log Out" />
        )}
      </BtnSecondary>
    </LoginBtnContainer>
  );
};

export default LoginBtn;
