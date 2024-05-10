import React, { Fragment } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Product from "./components/products";
import About from "./components/about";
import Shop from "./components/shop";
import Choose from "./components/choos";
import Footer from "./components/footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Product />
        <About />
        <Shop />
        <Choose />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
