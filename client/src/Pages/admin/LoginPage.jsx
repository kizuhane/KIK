import React, { useState } from "react";
/* import:: Localization */
import { FormattedMessage } from "react-intl";

/* import:: Theme */
import styled from "styled-components";

import ATag from "../../components/aTag";
import CheckBox from "../../components/FormComponents/checkBox";
import Input from "../../components/FormComponents/Input";

import BtnPrimary from "../../components/buttons/btnPrimary";

const LoginPageContainer = styled.div`
  position: absolute;
  display: block;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginPageBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    margin-top: 20px;
  }
`;

const LoginFormHeader = styled.h1`
  margin: 0 auto;
  padding: 5px 0 25px 0;
  text-transform: uppercase;
  text-align: center;
`;

const HelpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
`;

const useFormInput = initialState => {
  const [value, setValue] = useState(initialState);

  const handleChange = e => setValue(e.target.value);

  return {
    value,
    onChange: handleChange
  };
};

const LoginPage = () => {
  const name = useFormInput("");
  const surname = useFormInput("");
  return (
    <LoginPageContainer action="#" method="post">
      <LoginPageBox>
        <LoginFormHeader>
          <FormattedMessage id="navMenu.LogIn" defaultMessage="Log In" />
        </LoginFormHeader>

        <Input
          id="username-form"
          type="text"
          placeholder="Username"
          required
          formData={name}
        >
          <FormattedMessage id="form.Username" defaultMessage="Username" />
        </Input>

        <Input
          id="password-form"
          type="password"
          placeholder="Password"
          required
          formData={surname}
        >
          <FormattedMessage id="form.Password" defaultMessage="Password" />
        </Input>

        <HelpWrapper>
          <CheckBox id="rememberMeCKB1" name="remember-me">
            <FormattedMessage
              id="form.RememberMe"
              defaultMessage="Remember Me"
            />
          </CheckBox>
          <div>
            <ATag href="#">Forgot?</ATag>
          </div>
        </HelpWrapper>

        <BtnPrimary
          type="submit"
          events={{ onClick: () => console.log("log IN") }}
        >
          <FormattedMessage id="navMenu.LogIn" defaultMessage="Log In" />
        </BtnPrimary>
      </LoginPageBox>
    </LoginPageContainer>
  );
};

export default LoginPage;
