import React, { useState } from "react";
import PropTypes from "prop-types";

/* import:: Router */
import { Route, Switch } from "react-router-dom";

/* import:: Page  */
// Landing Page
import WelcomePage from "./WelcomePage";
// Article Page
import ArticlePage from "./ArticlePage";
// Professors Page
import Professors from "./Professors";
import ProfessorPage from "./ProfessorPage";
// Info Page
import AboutPage from "./AboutPage";

// error pages
import Error404Page from "./errors/404";

/* import:: Layout  */
import Content from "./layout/content";
import MobileProvider from "./layout/mobileProvider";

/* import:: Components  */
// nav components
import NavBar from "../components/navBar/navBar";
import SideBar from "../components/sideBar/sideBar";

/* import:: Views  */
// TODO: rest api to search amiable departments

import { AvailablePages } from "../components/test-comp/DEPARTAMENTS_LIST";

// TODO: END SIDEBAR
const MainPage = props => {
  const { match } = props;
  console.log(props);
  const [displaySidebar, _setDisplaySidebar] = useState(true);

  return (
    <>
      {AvailablePages.find(page => page === match.params.department) ? (
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
          <Content>
            <Switch>
              <Route exact path={`${match.path}`} component={WelcomePage} />
              <Route exact path={`${match.path}/About`} component={AboutPage} />
              <Route
                exact
                path={`${match.path}articles`}
                component={ArticlePage}
              />
              <Route
                exact
                path={`${match.path}/article/:section`}
                component={ArticlePage}
              />
              <Route
                exact
                path={`${match.path}/article/:section/:lesson`}
                component={ArticlePage}
              />
              <Route
                exact
                path={`${match.path}/Professors`}
                component={Professors}
              />
              <Route
                exact
                path={`${match.path}/Professors/:name`}
                component={ProfessorPage}
              />
              <Route path="*" component={Error404Page} />
            </Switch>
          </Content>
        </MobileProvider>
      ) : (
        <Error404Page />
      )}
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
