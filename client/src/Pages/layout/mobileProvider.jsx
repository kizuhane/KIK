import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

import { MOBILE_WIDTH_VALUE } from "../../Constant/CONSTANT_STYLE_VALUE";

const translateWindowWidth = widthValue =>
  !!(widthValue() < MOBILE_WIDTH_VALUE);

const useWindowWidth = query => {
  const [width, setWidth] = useState(translateWindowWidth(query));

  useEffect(() => {
    const handleResize = () => setWidth(translateWindowWidth(query));
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [query]);
  return width;
};

export const MobileContext = createContext();

const MobileProvider = ({ children }) => {
  const mobileVersion = useWindowWidth(() => window.innerWidth);
  return (
    <MobileContext.Provider value={mobileVersion}>
      {children}
    </MobileContext.Provider>
  );
};

MobileProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default MobileProvider;
