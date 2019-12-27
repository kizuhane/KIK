import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

/* import:: components */
import Paragraphs from "./paragraphs";

const ImageContainer = styled.div`
  & img {
    max-width: 100%;
  }
`;

const imageContainer = props => {
  const { image, description } = props;
  return (
    <ImageContainer>
      <img src={image} alt={image} />
      {description && <Paragraphs>{description}</Paragraphs>}
    </ImageContainer>
  );
};

imageContainer.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string
};
imageContainer.defaultProps = {
  description: ""
};

export default imageContainer;
