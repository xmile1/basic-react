import React from 'react';

const Confrimation = ({ addedProducts, onChangeRoute }) => (
  <div>
    Confirmation Page
    <ul>
      {addedProducts.map(addedProduct => (
        <li> {addedProduct} </li>
    ))}
    </ul>
    <button onClick={() => { onChangeRoute(false); }}>Goto Products </button>
  </div>
        );

export default Confrimation;
