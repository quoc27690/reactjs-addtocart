import React from "react";

import Header from "./component/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { CartProvider } from "./contexts/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
