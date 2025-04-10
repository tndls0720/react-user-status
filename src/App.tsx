import "./App.css";
import MenuItem from "./components/MenuItem";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState<string[]>([]);

  const handleOrder = (menuName: string) => {
    setCart((prev) => [...prev, menuName]);
  };

  return (
    <div className="app-container">
      <h1>☕ 오늘의 카페 메뉴</h1>
      <MenuItem
        name="아메리카노"
        price={3000}
        onOrder={() => handleOrder("아메리카노")}
      />
      <MenuItem
        name="카페라떼"
        price={3500}
        onOrder={() => handleOrder("카페라떼")}
      />
      <MenuItem
        name="바닐라라떼"
        price={4000}
        onOrder={() => handleOrder("바닐라라떼")}
      />

      <div className="cart">
        <h2>🛒 장바구니</h2>
        {cart.length === 0 ? (
          <p>주문한 메뉴가 없습니다.</p>
        ) : (
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
