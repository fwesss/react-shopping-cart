import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import App from '../App';

const AppWithRouter = withRouter(App);

it('renders without crashing', () => {
  render(
    <Router>
      <AppWithRouter />
    </Router>,
  );
});

describe('adding item to cart', () => {
  const {
    getAllByText, getByLabelText, getByText, queryByText,
  } = render(
    <Router>
      <AppWithRouter />
    </Router>,
  );

  it('increases the count of items in cart when Add to cart is clicked', () => {
    expect(getByLabelText(/cart-size/i).textContent).toBe('0');

    fireEvent.click(getAllByText(/Add to cart/i)[0]);

    expect(getByLabelText(/cart-size/i).textContent).toBe('1');
  });

  it('adds an item to the cart page when Add to cart is clicked', () => {
    fireEvent.click(getByText(/Product/i));
    fireEvent.click(getAllByText(/Add to cart/i)[0]);
    fireEvent.click(getByText(/Cart/));

    expect(queryByText(/Remove from cart/i)).toBeTruthy();
  });
});
