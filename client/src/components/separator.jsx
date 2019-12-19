import React from "react";

/* import:: Theme */
import styled from "styled-components";
// colors
import { inactive } from "../Theme/theme";

/* import:: CONSTANT VALUE */
import { MOBILE_WIDTH_VALUE } from "../Constant/CONSTANT_STYLE_VALUE";

const Separator = styled.hr`
  border: 0;
  margin: 10px 35px;
  height: 1px;
  background: ${inactive};

  @media (max-width: ${MOBILE_WIDTH_VALUE}px) {
    margin: 10px 90px;
  }
`;

export const separator = () => {
  return <Separator />;
};

export default separator;
