import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
/* import:: colors */
import { textPrimary, secondaryBackground } from "../../Theme/theme";

/* import:: CONSTANT */
import { errorsEmoticons } from "../../Constant/alertsEmoticons";
import { getRandomInt } from "../../function/getRandomInt";

const ErrorEmoticon = styled.p`
  margin: 0;
  padding: 0;

  font-weight: bold;
  font-size: 42px;
`;

const ErrorMessage = styled.p`
  margin: 20px 0 10px 0;

  font-size: 16px;
`;

const StandardRenderErrorContainer = styled.div`
  display: block;
  margin: 0;
  padding: 20px;

  color: ${textPrimary};
  background: ${secondaryBackground};

  max-width: 800px;

  text-align: center;
`;

const standardRenderErrorDiv = ({ message }) => {
  return (
    <StandardRenderErrorContainer>
      <ErrorEmoticon>
        {errorsEmoticons[getRandomInt(errorsEmoticons.length)]}
      </ErrorEmoticon>
      <ErrorMessage>{message}</ErrorMessage>
    </StandardRenderErrorContainer>
  );
};

export default standardRenderErrorDiv;

standardRenderErrorDiv.propTypes = {
  message: PropTypes.string
};
standardRenderErrorDiv.defaultProps = {
  message: "Element failed to render"
};
