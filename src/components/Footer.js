import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="features" className="site-footer">
      <Container>
        <Row className="footer-top">
          {/* Brand column */}
          <Col md={4} className="footer-brand-col">
            <div className="footer-brand">
              <span className="footer-brand-icon">◈</span> ShopWave
            </div>
            <p className="footer-desc">
              
              Quality products, seamless experience.
            </p>
          </Col>

          {/* Links */}
          <Col md={2} xs={6} className="footer-links-col">
            <h6 className="footer-heading">Shop</h6>
            <ul className="footer-links">
              <li><a href="#products">All Products</a></li>
              <li><a href="#products">Electronics</a></li>
              <li><a href="#products">Footwear</a></li>
              <li><a href="#products">Accessories</a></li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="footer-links-col">
            <h6 className="footer-heading">Company</h6>
            <ul className="footer-links">
              <li><a href="#home">About Us</a></li>
              <li><a href="#home">Careers</a></li>
              <li><a href="#home">Blog</a></li>
              <li><a href="#home">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="footer-links-col">
            <h6 className="footer-heading">Why ShopWave?</h6>
            <div className="footer-features">
              {[
                { icon: '🚀', label: 'Fast Delivery' },
                { icon: '🔒', label: 'Secure Checkout' },
                { icon: '↩️', label: 'Easy Returns' },
                { icon: '💬', label: '24/7 Support' },
              ].map(({ icon, label }) => (
                <div key={label} className="footer-feature">
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <span>© 2025 ShopWave.</span>
          <span className="footer-love--">Made by Sushi ♥ </span>
        </div>
      </Container>
    </footer>
  );
}
