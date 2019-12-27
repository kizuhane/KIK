import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

/*
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hHW1oY26kxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
/* import:: components */
import Paragraphs from "./paragraphs";

const EmbedContainer = styled.div`
  position: relative;
  margin: 8px 0;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */

  & embed {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
  }
  & p {
    position: relative;
  }
`;

const Embed = props => {
  const { service, source, embed, description } = props;
  console.log(props);
  return (
    <EmbedContainer>
      <embed src={embed} />
      <Paragraphs>{description}</Paragraphs>
    </EmbedContainer>
  );
};

Embed.propTypes = {
  service: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  embed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Embed;
