import React from 'react';

/* import:: Theme */
import styled from 'styled-components';
// colors
import { inactive } from '../Theme/theme';

const Separator = styled.hr`
  border: 0;
  margin: 10px 35px;
  height: 1px;
  background: ${inactive};
`;

export const separator = color => {
  return <Separator />;
};
export default separator;
