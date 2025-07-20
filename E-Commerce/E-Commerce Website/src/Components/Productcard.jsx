// src/Productcard.jsx
export default function Productcard({ product, onAddtoCart }) {
  return (
    <div className="book">
      <img src={product.img} className="book-img" alt={product.Name} />
      <h2 className="book-name">{product.Name}</h2>
      <p className="book-author">Author: {product.Author}</p>
      <p className="book-price">Price: ₹{product.Price}</p>
      <p className="book-genre">Genre: {product.Genre}</p>
      <button onClick={() => onAddtoCart(product)} className="crt-btn">Add to Cart</button>
    </div>
  );
}
