import { useContext } from "react";
import { DropdrownContext } from "../Contexts/dropdown.context";
import "./checkout-item.styles.scss";
const ProductCheckout = ({ product }) => {
  const { imageUrl, name, price, quantity } = product;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(DropdrownContext);
  const addItem = () => addItemToCart(product);
  const removeItem = () => removeItemFromCart(product);
  const deleteItem = () => deleteItemFromCart(product);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={`${imageUrl}`} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default ProductCheckout;
