import React from 'react';
import Header from "./components/header/header";

/*import {Link, HashRouter as Router, Route} from "react-router-dom";*/

import './App.scss';

function App() {
  return (
    <section className="App">
      <Header/>
{/*      <Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
      </Router>*/}
    </section>
  );
}

export default App;
