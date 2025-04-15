interface CartPageProps {
  cart: string[];
}

function CartPage({ cart }: CartPageProps) {
  return (
    <div>
      <h2>장바구니</h2>
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
  );
}

export default CartPage;
