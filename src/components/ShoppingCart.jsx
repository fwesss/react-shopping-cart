import React from 'react';
import PropTypes from 'prop-types';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = ({ cart }) => {
  const getCartTotal = () => cart.reduce((acc, value) => acc + value.price, 0).toFixed(2);

  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <Item key={item.id} image={item.image} price={item.price} title={item.title} />
      ))}

      <div className="shopping-cart__checkout">
        <p>
          Total: $
          {getCartTotal()}
        </p>
        <button type="button">Checkout</button>
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
  ).isRequired,
};

export default ShoppingCart;
