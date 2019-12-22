import React from "react";
import { FormattedMessage } from "react-intl";

import styled from "styled-components";

import BtnSecondary from "../../buttons/btnSecondary";

const LoginBtn = styled.div`
  text-align: center;
`;

const loginLogic = () => {
  console.log("login");
};

const loginBtn = props => {
  const login = false;
  return (
    <LoginBtn>
      <BtnSecondary to="#6" events={{ onClick: loginLogic }}>
        {!login ? (
          <FormattedMessage id="navMenu.LogIn" defaultMessage="Log In" />
        ) : (
          <FormattedMessage id="navMenu.LogOut" defaultMessage="Log Out" />
        )}
      </BtnSecondary>
    </LoginBtn>
  );
};

export default loginBtn;
