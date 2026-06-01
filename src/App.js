import React, { useState } from 'react';
import './App.css';
import ImageMapper from './components/ImageMapper';
import LoteInfo from './components/LoteInfo';
import UploadForm from './components/UploadForm';

function App() {
  const [terreno, setTerreno] = useState(null);
  const [lotes, setLotes] = useState([]);
  const [selectedLote, setSelectedLote] = useState(null);
  const [mode, setMode] = useState('upload');

  const handleImageUpload = (imageFile, lotesData) => {
    setTerreno(imageFile);
    setLotes(lotesData);
    setMode('map');
  };

  const handleLoadSample = () => {
    const sampleLotes = [
      { id: 1, numero: '001', manzana: 'A', precio: 50000, metros: 200, disponibilidad: true, etapa: '1', coords: [50, 50, 150, 50, 150, 100, 50, 100] },
      { id: 2, numero: '002', manzana: 'A', precio: 55000, metros: 220, disponibilidad: false, etapa: '1', coords: [160, 50, 260, 50, 260, 100, 160, 100] },
      { id: 3, numero: '003', manzana: 'B', precio: 60000, metros: 250, disponibilidad: true, etapa: '2', coords: [50, 110, 150, 110, 150, 170, 50, 170] },
      { id: 4, numero: '004', manzana: 'B', precio: 58000, metros: 230, disponibilidad: true, etapa: '2', coords: [160, 110, 260, 110, 260, 170, 160, 170] },
    ];
    
    setTerreno('sample');
    setLotes(sampleLotes);
    setMode('map');
  };

  return (
    <div className="App">
      {mode === 'upload' ? (
        <UploadForm onUpload={handleImageUpload} onLoadSample={handleLoadSample} />
      ) : (
        <div className="app-container">
          <div className="header">
            <h1>🏗️ Terreno Lotizado</h1>
            <button className="btn-back" onClick={() => setMode('upload')}>← Atrás</button>
          </div>
          <div className="main-content">
            <div className="map-section">
              <ImageMapper lotes={lotes} onLoteClick={setSelectedLote} terreno={terreno} />
            </div>
            <div className="info-section">
              {selectedLote ? (
                <LoteInfo lote={selectedLote} />
              ) : (
                <div className="placeholder">Haz click en un lote para ver su información</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
