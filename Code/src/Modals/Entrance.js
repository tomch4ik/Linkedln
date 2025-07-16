import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

export function Entrance({ onSuccess, onSwitchToSignUp }) {
  const navigate = useNavigate(); 

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

  const handleRegistration = () => {
    navigate('/registration');
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
      navigate('/entranceVerification');
    }
    
  };

  return (
    <div className="logo-container1">
      <img src="./Form_img/Logo.png" alt="Logo" className="form-logo1" />
    <div className="form-container2">
      <h2 className="welcome-text1">
        Welcome back<br />
        <span className="community-text1">sign in your LinkUp account</span>
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="input-group1">
          <span className="icon-left1">
            <img src="./Form_img/EnvelopeSimple.png" alt="email icon" />
          </span>
          <input
            type="text"
            name="email"
            placeholder="Email or phone number"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error1">{errors.email}</p>}
        </div>

        <div className="input-group1">
          <span className="icon-left1">
            <img src="./Form_img/LockKey.png" alt="lock icon" />
          </span>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="icon-right1" onClick={() => setShowPassword(!showPassword)}>
            <img
              src={showPassword ? "./Form_img/EyeSlash.png" : "./Form_img/eye.png"}
              alt="toggle visibility"
            />
          </span>
          {errors.password && <p className="error1">{errors.password}</p>}
        </div>

        <button type="submit" className="signup-btn1">Sign In</button>

        <p className="terms1">
          Forgot your password? <a href="#">Reset password</a>
        </p>

        <div className="divider1"><span>or</span></div>

        <button type="button" className="google-btn1">
          <img src="./Form_img/Google.png" alt="Google Logo" />
          Continue with Google
        </button>

        <button type="button" className="signin-btn1" onClick={handleRegistration}>
            Sign Up
        </button>


      </form>
    </div>
    </div>
  );
}
