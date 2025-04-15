import { useNavigate } from "react-router-dom";
import MenuItem from "../components/MenuItem";

interface MainPageProps {
  cart: string[];
  setCart: React.Dispatch<React.SetStateAction<string[]>>;
}

function Mainpage({ cart, setCart }: MainPageProps) {
  const navigate = useNavigate();

  const handleOrder = (menuName: string) => {
    setCart((prev) => [...prev, menuName]);
    alert(`${menuName}가 장바구니에 담겼습니다!`);
  };

  const handlePurchase = () => {
    if (cart.length === 0) {
      alert("장바구니가 비었습니다.");
      return;
    }
    navigate("/cart");
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
      <button onClick={handlePurchase} style={{ marginTop: "20px" }}>
        구매하기
      </button>
    </div>
  );
}

export default Mainpage;
