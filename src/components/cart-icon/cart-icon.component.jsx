import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { useContext } from "react";

import { DropdrownContext } from "../Contexts/dropdown.context";
const CartIcon = () => {
  const { show, setShow, itemsCount } = useContext(DropdrownContext);
  const showDropdownHandler = () => {
    setShow(!show);
  };

  return (
    <CartIconContainer onClick={showDropdownHandler}>
      <ShoppingIcon></ShoppingIcon>
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
