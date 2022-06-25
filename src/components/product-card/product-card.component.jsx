import "./product-card.styles.scss";
import { useContext } from "react";
import { DropdrownContext } from "../Contexts/dropdown.context";
import Button from "../button/button.component";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { cartItems, addItemToCart } = useContext(DropdrownContext);
  const addProductToCard = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCard}>
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
