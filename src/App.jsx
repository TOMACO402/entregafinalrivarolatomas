import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Politicas from "./components/Politicas";
import Quienes from "./components/Quienes";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import CartContextProvider from "./components/context/CartContext";
import Swipe from "./components/Swipe";



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <Navbar/>
          
          <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/thankyou/:orderId"} element={<ThankYou />} /> 
            <Route path={"/Quienes"} element={<Quienes/>} />
            <Route path={"/Politicas"} element={<Politicas />} />
            <Route path={"*"} element={<Error404 />} />
            <Route path={"/Swipe"} element={<Swipe/>} />
        
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
