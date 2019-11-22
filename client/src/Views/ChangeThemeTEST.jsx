import React from "react";
import PropTypes from "prop-types";

/* import:: localization provider */
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

/* import:: Theme */
import styled, { withTheme } from "styled-components";
import { useTheme } from "../Theme/ThemeContext";
import { buttonBackgroundColor, buttonTextColor } from "../Theme/theme";

/* import:: Graphic elements */
import logo from "../logo.svg";

const Home = props => {
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

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <FormattedHTMLMessage
          id="app.text"
          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
          description="Welcome header on app main page"
          values={{ what: "react-intl" }}
        />
      </p>
      <p>
        <Button onClick={() => themeToggle.toggleTheme()}>
          {props.theme.mode === "dark" ? (
            <FormattedMessage
              id="app.buttonLightMode"
              defaultMessage="Switch to Light Mode"
            />
          ) : (
            <FormattedMessage
              id="app.buttonDarkMode"
              defaultMessage="Switch to Dark Mode"
            />
          )}
        </Button>
      </p>
      <div>
        <Button onClick={() => themeToggle.toggleFont()}>
          {props.theme.font === "normal"
            ? "Switch to openDyslexic"
            : "Switch to roboto"}
        </Button>
      </div>
    </div>
  );
};

Home.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired
};

export default withTheme(Home);
