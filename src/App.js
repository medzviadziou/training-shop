import React from 'react';
import Header from "./components/header/header";
import Preview from "./components/preview/preview";

import './App.scss';
import Advantage from "./components/advantage/advantage";
import Catalog from "./components/catalog/catalog";

function App() {
  return (
    <section className="App">
      <Header/>
      <Preview />
      <Advantage />
      <Catalog name="Men"/>
    </section>
  );
}

export default App;
