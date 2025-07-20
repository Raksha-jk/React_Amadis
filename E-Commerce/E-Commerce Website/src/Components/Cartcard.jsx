// src/Cartcard.jsx
export default function Cartcard({ product, onRemove, onQuantityChange }) {
  return (
    <div className="cart-items">
      <img src={product.img} width="100" height="100" alt={product.Name} />
      <span className="item-name">{product.Name}</span>
      <span className="item-price">₹{product.Price}</span>
      <input type="number" className="item-quantity" value={product.qty} min="1" onChange={(e) => onQuantityChange(product.id, parseInt(e.target.value))}/>
      <button className="del-btn" onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
}
