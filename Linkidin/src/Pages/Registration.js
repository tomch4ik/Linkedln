import React, { useState } from 'react';
import './Registration.css';

export function Registration({ onSuccess, onSwitchToSignIn }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validate = () => {
  const newErrors = {};

  if (!formData.email.trim()) {
    newErrors.email = 'Email or phone is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email) && !/^\+?\d{10,}$/.test(formData.email)) {
    newErrors.email = 'Enter valid email or phone number';
  }

  const password = formData.password;
  const passwordRequirements = [
        {
        test: /.{8,}/,
        message: 'Password must be at least 8 characters'
        },
        {
        test: /[A-Z]/,
        message: 'Password must contain at least one uppercase letter'
        },
        {
        test: /[0-9]/,
        message: 'Password must contain at least one digit'
        },
        {
        test: /[^A-Za-z0-9]/,
        message: 'Password must contain at least one special character'
        }
    ];

    for (const requirement of passwordRequirements) {
        if (!requirement.test.test(password)) {
        newErrors.password = requirement.message;
        break; 
        }
    }

    if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = 'Passwords do not match';
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
      console.log('Form Submitted:', formData);
      onSuccess?.('verify-signup');
    }
  };

  return (
    <div className="logo-container">
      <img src="./Form_img/Logo.png" alt="Logo" className="form-logo" />
    <div className="form-container">
      <h2 className="welcome-text">Welcome to your<br /><span className="community-text">professional community</span></h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-group">
            <span className="icon-left">
            <img src="./Form_img/EnvelopeSimple.png" alt="email icon"/>
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

        <div className="input-group">
            <span className="icon-left">
            <img src="./Form_img/LockKey.png" alt="lock icon" />
            </span>
            <input
            type={showConfirm ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            />
            <span className="icon-right" onClick={() => setShowConfirm(!showConfirm)}>
            <img
                src={showConfirm ? "./Form_img/EyeSlash.png" : "./Form_img/eye.png"}
                alt="toggle visibility"
            />
            </span>
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>

        <p className="terms">
          By Signing Up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
        </p>

        <div className="divider"><span>or</span></div>

        <button type="button" className="google-btn">
          <img src="./Form_img/Google.png" alt="Google Logo" />
          Continue with Google
        </button>

        <button type="button" className="signin-btn" onClick={onSwitchToSignIn}>
          Sign In
        </button>

      </form>
    </div>
    </div>
  );
}
