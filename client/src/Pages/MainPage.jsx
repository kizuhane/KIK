import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/* import:: Router */
import { Route, Switch } from "react-router-dom";

/* import:: Page  */
import Professors from "./Professors";
// error pages
import Error404Page from "./errors/404";

/* import:: Layout  */
import Content from "./layout/content";
import MobileProvider from "./layout/mobileProvider";
/* import:: Components  */
// nav components
import NavBar from "../components/navBar/navBar";
import SideBar from "../components/sideBar/sideBar";

// TEST COMPONENTS
import ChangeThemeTEST from "../Views/ChangeThemeTEST";
import ArticleTest from "../Views/route-test/ArticleTest";
/* import:: Views  */

const MainPage = ({ match }) => {
  const [displaySidebar, _setDisplaySidebar] = useState(true);
  return (
    <>
      <MobileProvider>
        <Route
          path={`${match.path}`}
          render={routeProps => (
            <NavBar
              {...routeProps}
              displaySidebar={displaySidebar}
              toggleSidebarEvent={e => _setDisplaySidebar(!displaySidebar)}
            />
          )}
        />
        <Route
          path={`${match.path}`}
          render={routeProps => (
            <SideBar {...routeProps} toggleSidebar={displaySidebar}>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
              <p>6</p>
            </SideBar>
          )}
        />
      </MobileProvider>
      <Content>
        <Switch>
          <Route exact path={`${match.path}`} component={ArticleTest} />
          <Route
            exact
            path={`${match.path}Professors`}
            component={Professors}
          />
          <Route path="*" component={Error404Page} />
        </Switch>
      </Content>
    </>
  );
};

MainPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default MainPage;
