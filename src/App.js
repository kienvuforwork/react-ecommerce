import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="" element={<Navigation></Navigation>}>
        <Route index path="/" element={<Home></Home>} />
        <Route path="auth" element={<Authentication></Authentication>} />
        <Route path="shop/*" element={<Shop></Shop>} />
        <Route path="checkout" element={<Checkout></Checkout>} />
      </Route>
    </Routes>
  );
};

export default App;
