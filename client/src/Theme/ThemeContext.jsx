import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* Theme */
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { backgroundColor, textColor } from './theme';
import { font } from './font';

/* import:: Font handlers */
import { OpenDyslexic } from './fonts/OpenDyslexic';
import { OpenSans } from './fonts/OpenSans';
import { RobotoCondensed } from './fonts/RobotoCondensed';
import { FiraCode } from './fonts/FiraCode';

/* create Theme context */
const ThemeToggleContext = React.createContext();

const defaultTheme = { mode: 'light' };
const defaultFont = { mode: 'normal' };

export const useTheme = () => React.useContext(ThemeToggleContext);

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
}
function getInitialFont() {
  const savedFont = localStorage.getItem('font');
  return savedFont ? JSON.parse(savedFont) : defaultFont;
}

export const KIKThemeProvider = ({ children }) => {
  const [themeState, _setThemeState] = React.useState(getInitialTheme);
  const [fontState, _setFontState] = React.useState(getInitialFont);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeState));
  }, [themeState]);

  useEffect(() => {
    localStorage.setItem('font', JSON.stringify(fontState));
  }, [fontState]);

  // create main colors and font holster
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${backgroundColor};
    color: ${textColor};
    ${[OpenSans, RobotoCondensed, OpenDyslexic, FiraCode]}
  }
  `;

  // TODO: create wrapper style
  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
    font-family: ${font};
    /* font-family: 'Open Sans', sans-serif; */
  `;

  const toggleTheme = () => {
    const mode = themeState.mode === 'light' ? `dark` : `light`;
    _setThemeState({ mode });
  };

  const toggleFont = () => {
    const type = fontState.type === 'normal' ? `dyslexia` : `normal`;
    _setFontState({ type });
  };

  KIKThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, toggleFont }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode,
          font: fontState.type
        }}
      >
        <GlobalStyle />
        <Wrapper id="Wrapper">{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
