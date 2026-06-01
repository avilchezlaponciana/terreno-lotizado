import React from 'react';
import './LoteInfo.css';

function LoteInfo({ lote }) {
  if (!lote) return null;

  return (
    <div className="lote-info">
      <div className="lote-header">
        <h2>Lote #{lote.numero}</h2>
        <span className={`badge ${lote.disponibilidad ? 'disponible' : 'vendido'}`}>
          {lote.disponibilidad ? '✓ Disponible' : '✗ Vendido'}
        </span>
      </div>
      
      <div className="info-grid">
        <div className="info-item">
          <span className="label">Manzana</span>
          <span className="value">{lote.manzana}</span>
        </div>
        
        <div className="info-item">
          <span className="label">Etapa</span>
          <span className="value">{lote.etapa}</span>
        </div>
        
        <div className="info-item">
          <span className="label">Metros Cuadrados</span>
          <span className="value">{lote.metros} m²</span>
        </div>
        
        <div className="info-item">
          <span className="label">Precio</span>
          <span className="value precio">${lote.precio.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="price-per-m2">
        <span className="label">Precio por m²</span>
        <span className="value">${(lote.precio / lote.metros).toFixed(0)}/m²</span>
      </div>
    </div>
  );
}

export default LoteInfo;
