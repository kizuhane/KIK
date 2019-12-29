import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { secondaryBackground } from "../../Theme/theme";

/* import:: components */
import StandardRenderErrorDiv from "../errors/standardRenderErrorDiv";
import Paragraphs from "./paragraphs";

const ImageContainerWrapper = styled.div`
  & img {
    display: block;
    max-width: 100%;
  }
  & p {
    background-color: ${secondaryBackground};
    padding: 2px 0 5px 10px;
  }
`;

const ImageContainer = props => {
  const { image, description } = props;
  const [imgError, _setImgError] = useState(false);

  const triggerError = () => {
    _setImgError(!imgError);
  };

  return (
    <ImageContainerWrapper>
      {!imgError ? (
        <img src={image} onError={triggerError} alt={image} />
      ) : (
        <StandardRenderErrorDiv message={`Image don't found:: ${image}`} />
      )}
      {description && <Paragraphs>{description}</Paragraphs>}
    </ImageContainerWrapper>
  );
};

ImageContainer.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string
};
ImageContainer.defaultProps = {
  description: ""
};

export default ImageContainer;
