import React, { Component } from "react";

import { CartContext } from "../contexts/Cart";

const axios = require("axios");

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    return axios
      .get("https://nodejs-express-demo-quoc276.herokuapp.com/api/books")
      .then((res) => {
        this.setState({
          books: res.data,
        });
      });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="container">
        <div className="row">
          {books.map((book, index) => (
            <div className="col-3 mb-3">
              <div class="card">
                <img
                  src="https://loremflickr.com/320/240"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{book.title}</h5>
                  <p class="card-text">{book.description}</p>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <button
                        class="btn btn-primary"
                        onClick={() => addToCart(book)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </CartContext.Consumer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
