import { useContext } from "react";
import { CartContext } from "./CartContext";
import Cartcard from "./Cartcard";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQtyChange = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  const total = cart.reduce((acc, item) => acc + item.Price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((product) => (
          <Cartcard
            key={product.id}
            product={product}
            onRemove={handleRemove}
            onQuantityChange={handleQtyChange}
          />
        ))
      )}
      <h3 id="total">Total: ₹{total}</h3>
    </div>
  );
}
