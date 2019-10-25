/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

/* import:: Internationalization provider */
import { KIKIntlProvider } from './Localization/language';

/* import:: Theme provider */
import { KIKThemeProvider } from './Theme/ThemeContext';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <KIKIntlProvider>
    <KIKThemeProvider>
      <App />
    </KIKThemeProvider>
  </KIKIntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
