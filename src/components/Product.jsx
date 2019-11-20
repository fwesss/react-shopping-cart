import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ addItem, product }) => (
  <div className="product">
    <img src={product.image} alt={`${product.title} book`} />

    <h1 className="title">{product.title}</h1>

    <p className="price">
      {`$${product.price}`}
    </p>

    <button type="button" onClick={() => addItem(product)}>Add to cart</button>
  </div>
);

Product.propTypes = {
  addItem: PropTypes.func.isRequired,
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Product;
