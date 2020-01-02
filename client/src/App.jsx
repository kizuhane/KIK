import React from "react";
/* import:: Router */
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* import Style */
import "./App.css";
import "simplebar/src/simplebar.css";

/* import:: Page  */
// admin Page
import AdminPage from "./Pages/admin/AdminPage";
// landing page for department
import MainPage from "./Pages/MainPage";
// Home Page
import WelcomePage from "./Pages/HomePage";

// import Customers from './components/test-comp/customers';

function App(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={WelcomePage} />
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route path="/:department" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
