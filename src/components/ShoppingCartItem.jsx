import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ image, price, title }) => (
  <div className="shopping-cart_item">
    <img src={image} alt={`${title} book`} />

    <div>
      <h1>{title}</h1>
      <p>{`$${price}`}</p>
      <button type="button">Remove from cart</button>
    </div>
  </div>
);

Item.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
