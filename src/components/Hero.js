import { Button, Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background decoration */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <Container className="hero-container">
        <Row className="align-items-center justify-content-center text-center">
          <Col lg={8}>
            <span className="hero-tag fade-up">✦ New arrivals are here</span>
            <h1 className="hero-title fade-up fade-up-delay-1">
              Shop <span className="hero-accent">Smarter.</span>
              <br />Live Better.
            </h1>
            <p className="hero-sub fade-up fade-up-delay-2">
              Curated products, unbeatable prices, and lightning-fast delivery —
              everything you need, all in one place.
            </p>
            <div className="hero-actions fade-up fade-up-delay-3">
              <Button className="btn-primary-custom" onClick={scrollToProducts}>
                Shop Now →
              </Button>
              <Button className="btn-ghost-custom" href="#features">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Stats strip */}
      <div className="stats-strip">
        <Container>
          <Row className="stats-row">
            {[
              { val: '500+', label: 'Products' },
              { val: '10k+', label: 'Happy Customers' },
              { val: 'Free', label: 'Shipping Over $50' },
              { val: '24/7', label: 'Support' },
            ].map(({ val, label }) => (
              <Col key={label} xs={6} md={3} className="stat-item">
                <span className="stat-val">{val}</span>
                <span className="stat-label">{label}</span>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}