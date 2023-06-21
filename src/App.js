import { Route, Routes } from "react-router";
import Navbars from "./component/Navbar";
import HomeApp from "./component/Home";
import AboutApp from "./component/Aboutpage";
import ContactUsApp from "./component/Contact-UsPage";
import CartApp from "./component/CartPage";
import Details from "./component/Detailspage";
import Footer from "./component/Footer-home";
import ScrollToTop from "./component/Top";

function App() {
  return (
    <div className="App">
      <Navbars />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/about" element={<AboutApp />} />
        <Route path="/contact-us" element={<ContactUsApp />}></Route>
        <Route path="/my-cart" element={<CartApp />} />
        <Route path="/details/:productid" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
