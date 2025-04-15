import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./page/MainPage";
import Header from "./components/Header";
import CartPage from "./page/CartPage";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState<string[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
