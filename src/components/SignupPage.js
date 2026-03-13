import SignupForm from './SignupForm';
import './SignupPage.css';

export default function SignupPage({ onBack }) {
  return (
    <div className="sp-wrapper">
      {/* Left panel - branding */}
      <div className="sp-left">
        <div className="sp-left-inner">
          <a href="#home" className="sp-brand" onClick={onBack}>
            <span className="sp-brand-icon">◈</span> ShopWave
          </a>
          <h2 className="sp-tagline">
            Join thousands of<br />
            <span className="sp-accent">smart shoppers.</span>
          </h2>
          <ul className="sp-perks">
            {[
              { icon: '🚀', text: 'Free delivery on orders over $50' },
              { icon: '🔒', text: 'Secure checkout, always encrypted' },
              { icon: '↩️', text: 'Hassle-free 30-day returns' },
              { icon: '🎁', text: 'Exclusive member deals & offers' },
            ].map(({ icon, text }) => (
              <li key={text} className="sp-perk">
                <span className="sp-perk-icon">{icon}</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Decorative blobs */}
        <div className="sp-blob sp-blob-1" />
        <div className="sp-blob sp-blob-2" />
      </div>

      {/* Right panel - form */}
      <div className="sp-right">
        <div className="sp-card">
          <div className="sp-card-header">
            <h1 className="sp-title">Create Account</h1>
            <p className="sp-sub">Fill in the details below to get started</p>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}