import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  id, image, price, title, removeItem,
}) => (
  <div className="shopping-cart_item">
    <img
      src={image}
      alt={`${title} book`}
    />

    <div>
      <h1>{title}</h1>
      <p>{`$${price}`}</p>
      <button
        type="button"
        onClick={() => removeItem(id)}
      >
          Remove from cart
      </button>
    </div>
  </div>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Item;
