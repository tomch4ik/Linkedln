import React, { useRef, useState } from 'react';
import './Verification.css';

export function EntranceVerification({ onSubmit, onBack }) {
  const inputs = useRef([]);
  const [code, setCode] = useState(Array(5).fill(''));

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 5) {
      console.log('Code submitted:', fullCode);
      onSubmit?.(fullCode);
    } else {
      alert('Please enter the full 5-digit code');
    }
  };

  return (
    <div className="verification-container">
      <h3>One last step</h3>
      <h2>enter the authentication code</h2>

      <form onSubmit={handleSubmit} className="code-form">
        <div className="code-inputs">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => (inputs.current[idx] = el)}
            />
          ))}
        </div>

        <button type="submit" className="submit-btn">Submit</button>

        <p className="resend-text">
          Didn’t receive the code?{' '}
          <button type="button" className="resend-btn">Send the code again</button>
        </p>

        <button type="button" className="back-btn" onClick={onBack}>Back</button>
      </form>
    </div>
  );
}
