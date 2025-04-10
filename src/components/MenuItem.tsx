import React from "react";

interface MenuItemProps {
  name: string;
  price: number;
  onOrder: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, onOrder }) => {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{price.toLocaleString()}원</p>
      <button onClick={onOrder}>주문하기</button>
    </div>
  );
};

export default MenuItem;
