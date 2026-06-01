import React, { useState } from 'react';
import './UploadForm.css';

function UploadForm({ onUpload, onLoadSample }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const lotesData = [
        { id: 1, numero: '001', manzana: 'A', precio: 50000, metros: 200, disponibilidad: true, etapa: '1' },
      ];
      onUpload(selectedFile, lotesData);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <div className="upload-header">
          <h1>🏗️ Gestor de Terreno Lotizado</h1>
          <p>Carga la imagen de tu terreno y gestiona los lotes</p>
        </div>

        <div className="upload-content">
          <div className="upload-section">
            <h2>1. Sube la imagen del terreno</h2>
            <div className="upload-area">
              {preview ? (
                <div className="preview">
                  <img src={preview} alt="preview" />
                </div>
              ) : (
                <div className="upload-placeholder">
                  <div className="icon">📷</div>
                  <p>Haz click para seleccionar la imagen</p>
                  <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>
              )}
            </div>
          </div>

          <div className="upload-section">
            <h2>2. Define los lotes</h2>
            <p>Después de cargar la imagen, podrás hacer click en cada lote para asociar sus datos.</p>
          </div>
        </div>

        <div className="button-group">
          <button
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Continuar con Imagen
          </button>
          <button className="btn btn-secondary" onClick={onLoadSample}>
            Ver Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;
