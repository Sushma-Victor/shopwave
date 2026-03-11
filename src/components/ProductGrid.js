import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';
import products from '../data/products';
import './ProductGrid.css';

const categories = ['All', ...new Set(products.map(p => p.category))];

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <section id="products" className="products-section">
      <Container>

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Our Collection</span>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-sub">Hand-picked items you'll actually love</p>
        </div>

        {/* Category Filter */}
        <div className="filter-bar">
          {categories.map(cat => (
            <Button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <Row className="g-4">
          {filtered.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="empty-state">No products found.</div>
        )}
      </Container>
    </section>
  );
}