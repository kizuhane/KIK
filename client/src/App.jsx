import React from 'react';

/* import:: Router */
import { BrowserRouter, Route } from 'react-router-dom';

/* import Style */
import './App.css';

/* import:: Components  */
import NavBar from './components/navBar/navBar';
import Home from './components/Home';
import About from './components/route-test/About';
import Contact from './components/route-test/Contact';
// import Customers from './components/test-comp/customers';

function App(props) {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="Container">
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        {/* <Customers /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
