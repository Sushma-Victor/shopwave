import { useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../utils/validators';
import './SignupForm.css';

// ── Reusable Input Field ──────────────────────────────────────
function FormField({ id, label, type, value, placeholder, validation, touched, onChange, onBlur, showToggle, onToggle, showPassword }) {
  const showFeedback = touched && value !== '';
  const isValid   = showFeedback && validation?.valid;
  const isInvalid = showFeedback && !validation?.valid;

  return (
    <div className="sf-field">
      <label className="sf-label" htmlFor={id}>{label}</label>
      <div className="sf-input-wrap">
        <input
          id={id}
          className={`sf-input ${isValid ? 'sf-input--valid' : ''} ${isInvalid ? 'sf-input--invalid' : ''}`}
          type={showToggle ? (showPassword ? 'text' : 'password') : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
        />
        {/* Valid / Invalid icon */}
        {showFeedback && (
          <span className={`sf-icon ${isValid ? 'sf-icon--valid' : 'sf-icon--invalid'}`}>
            {isValid ? '✓' : '✕'}
          </span>
        )}
        {/* Show/hide password toggle */}
        {showToggle && (
          <button type="button" className="sf-eye" onClick={onToggle} tabIndex={-1}>
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {/* Feedback message */}
      {showFeedback && (
        <p className={`sf-feedback ${isValid ? 'sf-feedback--valid' : 'sf-feedback--invalid'}`}>
          {validation.message}
        </p>
      )}
    </div>
  );
}

// ── Password Strength Bar ─────────────────────────────────────
function StrengthBar({ strength, checks, show }) {
  if (!show) return null;
  const labels = ['', 'Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['', '#ef4444', '#f97316', '#eab308', '#22c55e', '#10b981'];

  return (
    <div className="sf-strength">
      <div className="sf-strength-bars">
        {[1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            className="sf-strength-bar"
            style={{ backgroundColor: i <= strength ? colors[strength] : '#e5e7eb' }}
          />
        ))}
      </div>
      <span className="sf-strength-label" style={{ color: colors[strength] }}>
        {labels[strength] || ''}
      </span>

      {/* Checklist */}
      {checks && (
        <ul className="sf-checklist">
          {[
            { key: 'length',    label: 'At least 8 characters' },
            { key: 'uppercase', label: 'One uppercase letter' },
            { key: 'lowercase', label: 'One lowercase letter' },
            { key: 'number',    label: 'One number' },
            { key: 'special',   label: 'One special character (!@#...)' },
          ].map(({ key, label }) => (
            <li key={key} className={`sf-check ${checks[key] ? 'sf-check--pass' : 'sf-check--fail'}`}>
              <span>{checks[key] ? '✓' : '○'}</span> {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Main Signup Form ──────────────────────────────────────────
export default function SignupForm({ onSuccess }) {
  const [fields, setFields] = useState({ username: '', email: '', password: '', confirm: '' });
  const [touched, setTouched] = useState({ username: false, email: false, password: false, confirm: false });
  const [showPw, setShowPw]   = useState(false);
  const [showCpw, setShowCpw] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Live validations
  const v = {
    username: validateUsername(fields.username),
    email:    validateEmail(fields.email),
    password: validatePassword(fields.password),
    confirm:  validateConfirmPassword(fields.confirm, fields.password),
  };

  const allValid = v.username.valid && v.email.valid && v.password.valid && v.confirm.valid;

  const handleChange = useCallback((field) => (e) => {
    setFields(prev => ({ ...prev, [field]: e.target.value }));
    setTouched(prev => ({ ...prev, [field]: true }));
  }, []);

  const handleBlur = useCallback((field) => () => {
    setTouched(prev => ({ ...prev, [field]: true }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Touch all fields to show all errors
    setTouched({ username: true, email: true, password: true, confirm: true });
    if (!allValid) return;
    setSubmitted(true);
    if (onSuccess) onSuccess(fields.username);
  };

  // ── Success Screen ──
  if (submitted) {
    return (
      <div className="sf-success">
        <div className="sf-success-icon">🎉</div>
        <h2 className="sf-success-title">Welcome to ShopWave!</h2>
        <p className="sf-success-sub">Account created for <strong>{fields.username}</strong>.</p>
        <button className="sf-submit" onClick={() => { setSubmitted(false); setFields({ username:'', email:'', password:'', confirm:'' }); setTouched({ username:false, email:false, password:false, confirm:false }); }}>
          Back to Sign Up
        </button>
      </div>
    );
  }

  return (
    <form className="sf-form" onSubmit={handleSubmit} noValidate>

      <FormField
        id="username" label="Username" type="text"
        value={fields.username} placeholder="e.g. john_doe"
        validation={v.username} touched={touched.username}
        onChange={handleChange('username')} onBlur={handleBlur('username')}
      />

      <FormField
        id="email" label="Email Address" type="email"
        value={fields.email} placeholder="you@example.com"
        validation={v.email} touched={touched.email}
        onChange={handleChange('email')} onBlur={handleBlur('email')}
      />

      <FormField
        id="password" label="Password" type="password"
        value={fields.password} placeholder="Create a strong password"
        validation={v.password} touched={touched.password}
        onChange={handleChange('password')} onBlur={handleBlur('password')}
        showToggle showPassword={showPw} onToggle={() => setShowPw(p => !p)}
      />

      <StrengthBar
        strength={v.password.strength || 0}
        checks={v.password.checks}
        show={touched.password && fields.password.length > 0}
      />

      <FormField
        id="confirm" label="Confirm Password" type="password"
        value={fields.confirm} placeholder="Re-enter your password"
        validation={v.confirm} touched={touched.confirm}
        onChange={handleChange('confirm')} onBlur={handleBlur('confirm')}
        showToggle showPassword={showCpw} onToggle={() => setShowCpw(p => !p)}
      />

      <button type="submit" className={`sf-submit ${allValid ? 'sf-submit--ready' : ''}`}>
        {allValid ? '✓ Create Account' : 'Create Account'}
      </button>

      <p className="sf-login-link">
        Already have an account? <a href="#home">Sign in</a>
      </p>
    </form>
  );
}