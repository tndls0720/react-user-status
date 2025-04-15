import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <header>
      <h1>Cafe Lucy</h1>
      <nav>
        <a href="/">홈</a>
        <button onClick={handleCartClick}>장바구니</button>
      </nav>
    </header>
  );
}

export default Header;
