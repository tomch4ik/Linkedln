import React, { useState } from 'react';
import './Registration.css';

export function Entrance({ onSuccess, onSwitchToSignUp }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email or phone is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email) && !/^\+?\d{10,}$/.test(formData.email)) {
      newErrors.email = 'Enter valid email or phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log('Sign In Submitted:', formData);
      onSuccess?.('verify-signin');
    }
  };

  return (
    <div className="logo-container">
      <img src="./Form_img/Logo.png" alt="Logo" className="form-logo" />
    <div className="form-container2">
      <h2 className="welcome-text">
        Welcome back<br />
        <span className="community-text">sign in your LinkUp account</span>
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="input-group">
          <span className="icon-left">
            <img src="./Form_img/EnvelopeSimple.png" alt="email icon" />
          </span>
          <input
            type="text"
            name="email"
            placeholder="Email or phone number"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <span className="icon-left">
            <img src="./Form_img/LockKey.png" alt="lock icon" />
          </span>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="icon-right" onClick={() => setShowPassword(!showPassword)}>
            <img
              src={showPassword ? "./Form_img/EyeSlash.png" : "./Form_img/eye.png"}
              alt="toggle visibility"
            />
          </span>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit" className="signup-btn">Sign In</button>

        <p className="terms">
          Forgot your password? <a href="#">Reset password</a>
        </p>

        <div className="divider"><span>or</span></div>

        <button type="button" className="google-btn">
          <img src="./Form_img/Google.png" alt="Google Logo" />
          Continue with Google
        </button>

        <button type="button" className="signin-btn" onClick={onSwitchToSignUp}>
            Sign Up
        </button>


      </form>
    </div>
    </div>
  );
}
