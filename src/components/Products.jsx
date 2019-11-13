import React from 'react';
import PropTypes from 'prop-types';

// Components
import Product from './Product';

const Products = ({ addItem, products }) => (
  <div className="products-container">
    {products.map((product) => (
      <Product
        key={product.id}
        product={product}
        addItem={addItem}
      />
    ))}
  </div>
);

Products.propTypes = {
  addItem: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default Products;
