import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = ({ cart }) => (
  <div className="navigation">
    <NavLink to="/">Products</NavLink>
    <NavLink to="/cart">
      Cart
      {' '}
      <span aria-label="cart-size">{cart.length}</span>
    </NavLink>
  </div>
);

Navigation.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    }),
  ).isRequired,
};

export default Navigation;
