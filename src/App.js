// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MainMenu from './components/Menu';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (username, password) => {
    // Lógica básica de autenticación, compara con credenciales predefinidas
    if (username === 'duomo' && password === '123') {
      setLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Duomo Store</h1>
          <p>Sistema de Gestión</p>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                !loggedIn ? (
                  <LoginForm onLogin={handleLogin} loginError={loginError} />
                ) : (
                  <Navigate to="/menu" />
                )
              }
            />
            <Route
              path="/menu"
              element={
                loggedIn ? (
                  <MainMenu onLogout={handleLogout} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2023 Duomo Store. Todos los derechos reservados.</p>
          <p>Creado y desarrollado por QF Software.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
