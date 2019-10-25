import React from 'react';
import PropTypes from 'prop-types';

/* import:: Theme provider */
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
// import
/* import:: Theme */
import styled, { withTheme } from 'styled-components';
import { useTheme } from './Theme/ThemeContext';
import { buttonBackgroundColor, buttonTextColor } from './Theme/theme';

/* import:: Graphic elements */
import logo from './logo.svg';

/* import Style */
import './App.css';

/* import:: Components  */
import NavBar from './components/navBar/navBar';
// import Customers from './components/test-comp/customers';

function App(props) {
  const themeToggle = useTheme();

  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;

    :hover {
      background: #61dafb;
    }
  `;

  App.propTypes = {
    theme: PropTypes.objectOf(PropTypes.string).isRequired
  };

  return (
    <div className="Wrapper">
      <nav className="navbar">
        <NavBar />
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedHTMLMessage
            id="app.text"
            defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
            description="Welcome header on app main page"
            values={{ what: 'react-intl' }}
          />
        </p>
        <p>
          <Button onClick={() => themeToggle.toggle()}>
            {/* {props.theme.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'} */}
            {props.theme.mode === 'dark' ? (
              <FormattedMessage id="app.buttonLightMode" defaultMessage="Switch to Light Mode" />
            ) : (
              <FormattedMessage id="app.buttonDarkMode" defaultMessage="Switch to Dark Mode" />
            )}
          </Button>
        </p>
      </header>
      {/* <Customers /> */}
    </div>
  );
}

export default withTheme(App);
