// AuthenticatedPage.js
import React from 'react';
import MainMenu from './Menu'; // Asegúrate de importar correctamente el componente de menú

function AuthenticatedPage({ onSelectSection }) {
  return (
    <div>
      <header>
        <h1>Duomo Store</h1>
        <p>Sistema de gestión.</p>
        <MainMenu onSelectSection={onSelectSection} />
      </header>
    </div>
  );
}

export default AuthenticatedPage;
