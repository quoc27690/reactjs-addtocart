import React from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../contexts/Cart";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" class="navbar-brand">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" class="nav-link">
                Home<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/products" class="nav-link">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <CartContext.Consumer>
                {({ cartItems }) => (
                  <Link to="/products" class="nav-link">
                    Cart ({cartItems.length})
                  </Link>
                )}
              </CartContext.Consumer>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
