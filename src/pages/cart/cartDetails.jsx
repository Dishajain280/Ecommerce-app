import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../components/shopContext/shopContext.jsx";
import { FiTrash2 } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const CartDetails = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShopContext);

  const { id, name, image, price, amount } = item;

  return (
    <div>
      <div className="cart_items">
        <div className="cart-product-detail">
          <img src={image} alt={name} />
          <div className="product-info">
            <h3>{name}</h3>

            <FiTrash2 onClick={() => removeFromCart(id)} />
          </div>
        </div>
        <div className="quantity">
          <button onClick={() => decreaseQuantity(id)}>
            <IoMdRemove />
          </button>
          <span>{amount}</span>
          <button onClick={() => increaseQuantity(id)}>
            <IoMdAdd />
          </button>
        </div>
        <div className="price">${price}</div>
        <div className="total">${price * amount}</div>
      </div>
    </div>
  );
};

export default CartDetails;
