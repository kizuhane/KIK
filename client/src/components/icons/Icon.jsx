import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
/* import:: colors */
import { textPrimary } from '../../Theme/theme';

const Icon = ({ name, size, color }) => {
  const MySvg = styled.svg.attrs({
    viewBox: '0 0 512 512'
  })`
    display: inline-block;
    width: ${size}px;
    height: ${size}px;

    path {
      fill: ${color};
    }
  `;

  return (
    <MySvg>
      <path d={name} />
    </MySvg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.func
};

Icon.defaultProps = {
  size: 16,
  color: textPrimary
};

export default Icon;
