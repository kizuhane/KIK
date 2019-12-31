import React from "react";

/* import:: Router */
import { BrowserRouter, Route } from "react-router-dom";

/* import Style */
import "./App.css";
import "simplebar/src/simplebar.css";

/* import:: Page  */
// auth page
import LoginPage from "./Pages/admin/LoginPage";
// landing page
import MainPage from "./Pages/MainPage";
// Home Page
import WelcomePage from "./Pages/HomePage";

// import Customers from './components/test-comp/customers';

function App(props) {
  return (
    <BrowserRouter>
      <Route path="/login/" component={LoginPage} />
      <Route path="/:department" component={MainPage} />

      <Route exact path="/" component={WelcomePage} />
    </BrowserRouter>
  );
}

export default App;
