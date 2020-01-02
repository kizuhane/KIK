import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// login page
import LoginPage from "./LoginPage";
// login page
import AdminPanelPage from "./authPages/AdminPanelPage";

const AdminPage = props => {
  // NOTE: Props for testing change when implementing authorization
  const loggedIn = false;
  return (
    <Switch>
      <Route exact path="/admin/">
        {loggedIn ? <Redirect to="/admin/login" /> : <AdminPanelPage />}
      </Route>
      <Route exact path="/admin/login" component={LoginPage} />
    </Switch>
  );
};

export default AdminPage;
