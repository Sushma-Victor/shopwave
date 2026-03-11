import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

function StarRating({ rating, reviews }) {
  const full  = Math.floor(rating);
  const empty = 5 - full;
  return (
    <div className="star-rating">
      <span className="stars">
        {'★'.repeat(full)}{'☆'.repeat(empty)}
      </span>
      <span className="reviews">({reviews})</span>
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Card className="product-card">
      {/* Emoji product image area */}
      <div className="product-img-area">
        <span className="product-emoji">{product.emoji}</span>
        <span className="product-category-badge">{product.category}</span>
      </div>

      <Card.Body className="product-body">
        <div className="product-name">{product.name}</div>
        <StarRating rating={product.rating} reviews={product.reviews} />

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <Button
            className={`add-btn ${inCart ? 'add-btn--added' : ''}`}
            onClick={handleAdd}
            disabled={added}
          >
            {added ? '✓ Added!' : inCart ? '+ Add Again' : 'Add to Cart'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}