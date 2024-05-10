import React, { Fragment } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Product from "./components/products";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Product />
      </main>
    </Fragment>
  );
};

export default App;
