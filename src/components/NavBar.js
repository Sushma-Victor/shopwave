import { useState } from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import './NavBar.css';

export default function NavBar({ onCartOpen, onSignup }) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => setScrolled(window.scrollY > 20);

  return (
    <Navbar expand="lg" sticky="top" className={`site-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <span className="brand-icon">◈</span> ShopWave
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className="custom-toggler" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <div className="nav-actions">
            <Button className="signup-btn" onClick={onSignup}>Sign Up</Button>
            <div className="cart-btn-wrap">
              <Button className="cart-btn" onClick={onCartOpen}>
                <span className="cart-icon">🛒</span>
                <span>Cart</span>
                {totalItems > 0 && (
                  <Badge className="cart-badge" pill>{totalItems}</Badge>
                )}
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}