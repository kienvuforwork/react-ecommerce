import { useContext } from "react";
import { DropdrownContext } from "../../components/Contexts/dropdown.context";
import ProductCheckout from "../../components/product-checkout/product-checkout.componenet";
import "./checkout.styles.scss";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(DropdrownContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          {" "}
          <span>Desciption</span>
        </div>
        <div className="header-block">
          {" "}
          <span>Quantity</span>
        </div>
        <div className="header-block">
          {" "}
          <span>Price</span>
        </div>
        <div className="header-block">
          {" "}
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <ProductCheckout product={cartItem} key={cartItem.id}></ProductCheckout>
      ))}
      <span className="total">Total : {cartTotal}$</span>
    </div>
  );
};

export default Checkout;
