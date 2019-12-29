import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { useTheme } from "../../Theme/ThemeContext";
import { secondaryBackground } from "../../Theme/theme";

/* import:: components */
import StandardRenderErrorDiv from "../errors/standardRenderErrorDiv";
import Paragraphs from "./paragraphs";

const EmbedContainer = styled.div`
  position: relative;
  margin: 8px 0;
  padding: 0;

  max-width: 1000px;

  & p {
    background-color: ${secondaryBackground};
    padding: 2px 0 5px 10px;
  }
`;

const YoutubeContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 */

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CodesandboxContainer = styled.div`
  display: block;
  position: relative;
`;

const CodepenContainer = styled.div`
  display: block;
  position: relative;
  & iframe {
    width: 100%;
    height: 500px;
  }
`;

const availableServices = (service, data, theme) => {
  switch (service) {
    case "youtube":
      return (
        <YoutubeContainer>
          <iframe
            title={service}
            src={data.embed}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </YoutubeContainer>
      );
    case "codesandbox":
      return (
        <CodesandboxContainer>
          <iframe
            title={`${service} - code editor`}
            src={`${data.embed}?fontsize=14&hidenavigation=1&theme=${theme.mode}`}
            style={{
              width: "100%",
              height: "500px",
              border: "0",
              borderRadius: "0",
              overflow: "hidden"
            }}
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </CodesandboxContainer>
      );
    case "codepen":
      return (
        <CodepenContainer>
          <iframe
            title={`${service} - code editor`}
            src={`${data.embed}?theme-id=${theme.mode}&default-tab=css,result`}
            scrolling="no"
            frameBorder="no"
            allowFullScreen
          />
        </CodepenContainer>
      );
    default:
      return (
        <StandardRenderErrorDiv message={`Cannot render media ${service}`} />
      );
  }
};

const Embed = ({ service, source, embed, description }) => {
  const themeToggle = useTheme();
  return (
    <EmbedContainer cite={source}>
      {availableServices(service, { embed }, themeToggle.themeState)}
      {description && (
        <div>
          <Paragraphs>{description}</Paragraphs>
        </div>
      )}
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
