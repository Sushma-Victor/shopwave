// ── Validation Rules ─────────────────────────────────────────

export const validateUsername = (value) => {
  if (!value.trim()) return { valid: false, message: 'Username is required.' };
  if (value.trim().length < 3) return { valid: false, message: 'Username must be at least 3 characters.' };
  if (value.trim().length > 20) return { valid: false, message: 'Username must be under 20 characters.' };
  if (!/^[a-zA-Z0-9_]+$/.test(value)) return { valid: false, message: 'Only letters, numbers and underscores allowed.' };
  return { valid: true, message: 'Looks good!' };
};

export const validateEmail = (value) => {
  if (!value.trim()) return { valid: false, message: 'Email is required.' };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) return { valid: false, message: 'Enter a valid email address.' };
  return { valid: true, message: 'Valid email!' };
};

export const validatePassword = (value) => {
  if (!value) return { valid: false, message: 'Password is required.', strength: 0 };

  const checks = {
    length:    value.length >= 8,
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
    number:    /[0-9]/.test(value),
    special:   /[!@#$%^&*(),.?":{}|<>]/.test(value),
  };

  const passed = Object.values(checks).filter(Boolean).length;

  if (!checks.length)    return { valid: false, message: 'Password must be at least 8 characters.', strength: passed, checks };
  if (passed < 3)        return { valid: false, message: 'Password is too weak.', strength: passed, checks };
  if (passed < 5)        return { valid: true,  message: 'Good password!', strength: passed, checks };
  return                        { valid: true,  message: 'Strong password! 💪', strength: passed, checks };
};

export const validateConfirmPassword = (value, password) => {
  if (!value) return { valid: false, message: 'Please confirm your password.' };
  if (value !== password) return { valid: false, message: 'Passwords do not match.' };
  return { valid: true, message: 'Passwords match!' };
};