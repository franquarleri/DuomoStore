// App.js
import React, { useState } from 'react';
import MainMenu from './components/Menu';
import './App.css';

function App() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [sales, setSales] = useState([]);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleSale = (sale) => {
    setSales((prevSales) => [...prevSales, sale]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Duomo Store</h1>
        <p>Sistema de gestión.</p>
        <MainMenu onSelectSection={handleSectionChange} handleSale={handleSale} />
      </header>
    </div>
  );
}

export default App;






