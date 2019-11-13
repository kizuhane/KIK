import React from 'react';
import PropTypes from 'prop-types';

/* import:: Router */
import { Route, Switch } from 'react-router-dom';

/* import:: Page  */
// error pages
import Error404Page from './errors/404';

/* import:: Components  */
import NavBar from '../components/navBar/navBar';
// TEST COMPONENTS
import ChangeThemeTEST from '../Views/ChangeThemeTEST';
import About from '../Views/route-test/About';
import Contact from '../Views/route-test/Contact';
/* import:: Views  */

const MainPage = ({ match }) => {
  return (
    <>
      <Route path={`${match.path}`} component={NavBar} />
      <div className="content">
        <Switch>
          <Route exact path={`${match.path}`} component={ChangeThemeTEST} />
          <Route exact path={`${match.path}About`} component={About} />
          <Route exact path={`${match.path}Contact`} component={Contact} />
          <Route path="*" component={Error404Page} />
        </Switch>
      </div>
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
