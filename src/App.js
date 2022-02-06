import React from 'react';
import Header from "./components/header/header";
import Preview from "./components/preview/preview";

import './App.scss';

function App() {
  return (
    <section className="App">
      <Header/>
      <Preview />
    </section>
  );
}

export default App;
