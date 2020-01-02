import React from "react";

import styled from "styled-components";
/* import:: colors */
import { primaryDefault } from "../../Theme/theme";

const Delimiter = styled.hr`
  margin: 10px 0;
  width: 100%;
  border: 1px solid ${primaryDefault};
`;

const delimiter = () => {
  return <Delimiter />;
};

export default delimiter;
