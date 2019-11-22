import React, { useEffect } from "react";
import PropTypes from "prop-types";

/* import:: IntlProvider */
import { IntlProvider } from "react-intl";

/* imports translations */
import en from "./language/en-US.json";
import pl from "./language/pl-PL.json";

/* import CONSTANT VALUE */
import { DEFAULT_LANGUAGE } from "../Constant/CONSTANT_STYLE_VALUE";
// add imported languages
const messages = {
  en,
  pl
};
// toggle language
const InitToggleContext = React.createContext();

export const useInit = () => React.useContext(InitToggleContext);

// specify default language
const defaultLanguage = { language: DEFAULT_LANGUAGE };

// TODO: map thru getBrowserLanguage and mach supported language

// get default language set by browser
function getDefaultLanguage() {
  const getBrowserLanguage = navigator.language.split(/[-_]/)[0];
  return getBrowserLanguage
    ? { language: getBrowserLanguage }
    : defaultLanguage;
}
// save language in local storage
function getInitialLanguage() {
  const savedIntl = localStorage.getItem("language");
  return savedIntl ? JSON.parse(savedIntl) : getDefaultLanguage();
}

export const KIKIntlProvider = ({ children }) => {
  const [intlState, _setIntlState] = React.useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(intlState));
  }, [intlState]);

  const toggle = () => {
    const language = intlState.mode === "en" ? `pl` : `en`;
    _setIntlState({ language });
  };

  KIKIntlProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

  return (
    <IntlProvider
      locale={intlState.language}
      messages={messages[intlState.language]}
    >
      {children}
    </IntlProvider>
  );
};

export default IntlProvider;
