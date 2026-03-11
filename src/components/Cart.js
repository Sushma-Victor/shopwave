import { Offcanvas, ListGroup, Button, Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import './Cart.css';

function CartItem({ item }) {
  const { removeFromCart, changeQty } = useCart();
  return (
    <ListGroup.Item className="cart-item">
      <div className="cart-item-top">
        <span className="cart-item-emoji">{item.emoji}</span>
        <div className="cart-item-info">
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-unit">${item.price.toFixed(2)} each</div>
        </div>
        <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
      </div>

      <div className="cart-item-bottom">
        <div className="qty-control">
          <button onClick={() => changeQty(item.id, item.qty - 1)}>−</button>
          <span>{item.qty}</span>
          <button onClick={() => changeQty(item.id, item.qty + 1)}>+</button>
        </div>
        <span className="cart-item-subtotal">${(item.price * item.qty).toFixed(2)}</span>
      </div>
    </ListGroup.Item>
  );
}

export default function Cart({ show, onHide }) {
  const { cart, totalItems, totalPrice, clearCart } = useCart();

  return (
    <Offcanvas show={show} onHide={onHide} placement="end" className="cart-canvas">
      <Offcanvas.Header closeButton className="cart-header">
        <Offcanvas.Title className="cart-title">
          🛒 Your Cart{' '}
          {totalItems > 0 && (
            <Badge className="cart-count-badge" pill>{totalItems}</Badge>
          )}
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="cart-body">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛍️</div>
            <p className="cart-empty-title">Your cart is empty</p>
            <p className="cart-empty-sub">Add some products to get started!</p>
          </div>
        ) : (
          <div className="cart-content">
            <ListGroup variant="flush">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </ListGroup>

            {/* Summary */}
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="cart-summary-row">
                <span>Shipping</span>
                <span className="free-ship">{totalPrice >= 50 ? 'FREE' : '$4.99'}</span>
              </div>
              <div className="cart-divider" />
              <div className="cart-total-row">
                <span>Total</span>
                <span>${(totalPrice + (totalPrice >= 50 ? 0 : 4.99)).toFixed(2)}</span>
              </div>
            </div>

            <Button className="checkout-btn">Checkout →</Button>
            <button className="clear-cart-btn" onClick={clearCart}>Clear cart</button>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}