// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin, loginError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    onLogin(username, password);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2>Ingresar</h2>
        {loginError && <p style={{ color: 'red' }}>Credenciales incorrectas. Inténtalo de nuevo.</p>}
        <label className="label">
          Usuario:
          <input className="input" type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label className="label">
          Contraseña:
          <input className="input" type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button className="button" onClick={handleLoginClick}>
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
