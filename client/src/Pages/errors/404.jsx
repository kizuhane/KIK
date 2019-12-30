import React from "react";

import { FormattedMessage } from "react-intl";

import styled from "styled-components";
/* import:: colors */
import { textHeader, textPrimary } from "../../Theme/theme";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";
import { errorsEmoticons } from "../../Constant/alertsEmoticons";
import { getRandomInt } from "../../function/getRandomInt";

const ErrorWrapper = styled.div`
  margin: 10% 5% 10% 5%;
  color: ${textPrimary};

  & h1 {
    margin: 10px 0;
    color: ${textHeader};
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
  }
  & h2 {
    margin: 10px 0;
    color: ${textHeader};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }
  & p {
    margin: 10px 0;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
`;
const ErrorEmoticon = styled.div`
  color: ${textHeader};

  margin: 0;
  padding: 0;

  font-style: normal;
  font-weight: bold;
  font-size: 100px;

  white-space: nowrap;
  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    font-size: 64px;
  }
`;

const Error404 = () => {
  return (
    <ErrorWrapper>
      <ErrorEmoticon>
        {errorsEmoticons[getRandomInt(errorsEmoticons.length)]}
      </ErrorEmoticon>
      <h1>
        <FormattedMessage
          id="error.404_Header"
          defaultMessage="Something happened </br> Something goes wrong and you’re special page of choice can't be found, whats is weird because it works for me"
        />
      </h1>
      <h2>
        <FormattedMessage
          id="error.404_Message"
          defaultMessage="Something happened </br> Something goes wrong and you’re special page of choice can't be found, whats is weird because it works for me"
        />
      </h2>
      <p>
        <FormattedMessage
          id="error.404_Help"
          defaultMessage="If you'd like to know more, you can search online for this error: 404_PAGE_NOT_FOUND"
        />
      </p>
    </ErrorWrapper>
  );
};

export default Error404;
