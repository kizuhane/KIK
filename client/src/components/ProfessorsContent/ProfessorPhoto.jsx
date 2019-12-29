import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

/* import:: components */
import StandardRenderErrorDiv from "../errors/standardRenderErrorDiv";

/* import:: CONSTANT */
import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";

const Photo = styled.img`
  display: block;

  width: 150px;
  height: 200px;

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    width: 225px;
    height: 300px;
  }
`;

const ProfessorPhoto = ({ name, image }) => {
  const [imgError, _setImgError] = useState(false);

  const triggerError = () => {
    _setImgError(!imgError);
  };

  return (
    <>
      {!imgError ? (
        <Photo src={image} alt={name} onError={triggerError} />
      ) : (
        <StandardRenderErrorDiv message={`Image don't found:: ${image}`} />
      )}
    </>
  );
};

ProfessorPhoto.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ProfessorPhoto;
