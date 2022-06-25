import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { DropdrownContext } from "../../components/Contexts/dropdown.context";
import { UserContext } from "../../components/Contexts/user-context.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.jsx";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { show } = useContext(DropdrownContext);
  return (
    <Fragment>
      <NavigationContainer>
        <NavLink className="logo-container" to="/">
          <div>
            <CrwnLogo></CrwnLogo>
          </div>
        </NavLink>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>
              Sign out
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              Sign in
            </NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinks>
        {show && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
