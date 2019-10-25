import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* Theme  */
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { backgroundColor, textColor, font } from './theme';

/* imports:: fonts */
/* Fira Code */

/* Open Dyslexic */
import { OpenDyslexic } from './fonts/OpenDyslexic';

const ThemeToggleContext = React.createContext();

const defaultTheme = { mode: 'light' };

export const useTheme = () => React.useContext(ThemeToggleContext);

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
}

export const KIKThemeProvider = ({ children }) => {
  const [themeState, _setThemeState] = React.useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeState));
  }, [themeState]);

  // create main colors and font holster
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${backgroundColor};
    color: ${textColor};
    ${OpenDyslexic}
  }
  `;
  // TODO: create wrapper style
  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
    font-family: ${font};
  `;

  const toggle = () => {
    const mode = themeState.mode === 'light' ? `dark` : `light`;
    _setThemeState({ mode });
  };

  KIKThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <GlobalStyle />
        <Wrapper id="Wrapper">{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
