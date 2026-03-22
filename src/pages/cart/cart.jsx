import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../components/shopContext/shopContext.jsx";
import CartDetails from "./cartDetails.jsx";
import { FiTrash2 } from "react-icons/fi";
import "./cart.css";

const Cart = () => {
  const { cart, total, clearCart, quantity } = useContext(ShopContext);
  return (
    <div>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <h1>Items:({quantity})</h1>
            <FiTrash2 onClick={clearCart} className="delete-cart" />
          </div>
          <div className="cart-header">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>

          <div className="cart-detail">
            {cart.length > 0 ? (
              cart.map((item) => <CartDetails item={item} key={item.id} />)
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>

        <div className="cart-right">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Items:</span>
            <span>{quantity}</span>
          </div>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${total}</span>
          </div>
          <div className="summary-item total-cost">
            <span>Shipping Fee:</span>
            <span> Free</span>
          </div>
          <div className="summary-item">
            <span>Total Cost:</span>
            <span>${total}</span>
          </div>
          <button className="checkout"> CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
