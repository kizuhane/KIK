import React from "react";

/* import:: Router */
import { BrowserRouter, Route, Link } from "react-router-dom";

/* import Style */
import "./App.css";
import "simplebar/src/simplebar.css";

/* import:: Page  */
// auth page
import LoginPage from "./Pages/admin/LoginPage";
// landing page
import MainPage from "./Pages/MainPage";

// import Customers from './components/test-comp/customers';

function App(props) {
  return (
    <BrowserRouter>
      <Route path="/login/" component={LoginPage} />
      <Route path="/KIK/" component={MainPage} />
      <Route path="/NEXT/" component={MainPage} />

      <Route exact path="/">
        <Link to="/KIK">KIK</Link>
        <hr />
        <Link to="/NEXT">NEXT</Link>
      </Route>
    </BrowserRouter>
  );
}

export default App;
