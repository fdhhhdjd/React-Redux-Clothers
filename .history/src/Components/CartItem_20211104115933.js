import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Actions";
import "../Styles/Cart.css";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const deleteCart = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <>
      <div className="cartItem">
        <img className="cartItem__image" src={item.image} alt={item.title} />
        <div className="cartItem__details">
          <p className="details__title">{item.title}</p>
          <p className="details__desc">{item.description}</p>
          <p className="details__price">$ {item.price}</p>
        </div>
        <div className="cartItem__actions">
          <div className="cartIte">
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              //   value={input}
              //   onChange={onChangeHandler}
            />
          </div>
          <button className="actions__deleteItemBtn" onClick={deleteCart}>
            <img
              src="https://image.flaticon.com/icons/svg/709/709519.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
