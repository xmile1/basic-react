import React from 'react';
import '../styles/checkout.css';

const Checkout = ({ addedProducts, onCheckout }) => (
  <div className="checkout">
    <div className="category-header">
            Basket <span className="badge" data-badge={addedProducts.length} />
    </div>
    <ul className="cart-items">
      {addedProducts.length === 0 ? 'You Do not Have any Items In your Cart' : addedProducts.map(addedProduct => (
              <li> {addedProduct} </li>))}
    </ul>
    <button
      className="btn"
      onClick={() => { onCheckout(addedProducts); }}
    >Checkout
    </button>
  </div>
    );

export default Checkout;
