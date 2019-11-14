import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';

// Context
import CartContext from '../contexts/CartContext';

const ShoppingCart = () => {
  const { cart, removeItem } = useContext(CartContext);

  const getCartTotal = () => cart.reduce((acc, value) => acc + value.price, 0).toFixed(2);

  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          image={item.image}
          price={item.price}
          title={item.title}
          removeItem={removeItem}
        />
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

export default ShoppingCart;
