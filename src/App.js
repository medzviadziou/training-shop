import React from 'react';
import Header from "./components/header/header";
import Preview from "./components/preview/preview";

import './App.scss';
import Advantage from "./components/advantage/advantage";

function App() {
  return (
    <section className="App">
      <Header/>
      <Preview />
      <Advantage />
    </section>
  );
}

export default App;
