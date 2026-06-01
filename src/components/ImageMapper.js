import React, { useRef, useEffect } from 'react';
import './ImageMapper.css';

function ImageMapper({ lotes, onLoteClick, terreno }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !terreno) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (terreno === 'sample') {
      ctx.fillStyle = '#e8f0fe';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#ccc';
      ctx.lineWidth = 2;

      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }
    }

    lotes.forEach((lote) => {
      ctx.fillStyle = lote.disponibilidad ? '#4caf5030' : '#f4433030';
      ctx.strokeStyle = lote.disponibilidad ? '#4caf50' : '#f44330';
      ctx.lineWidth = 2;

      const coords = lote.coords;
      ctx.beginPath();
      ctx.moveTo(coords[0], coords[1]);
      for (let i = 2; i < coords.length; i += 2) {
        ctx.lineTo(coords[i], coords[i + 1]);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      const centerX = coords.reduce((sum, val, i) => i % 2 === 0 ? sum + val : sum, 0) / (coords.length / 2);
      const centerY = coords.reduce((sum, val, i) => i % 2 === 1 ? sum + val : sum, 0) / (coords.length / 2);

      ctx.fillStyle = '#333';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(lote.numero, centerX, centerY);
    });
  }, [lotes, terreno]);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let lote of lotes) {
      if (isPointInPolygon(x, y, lote.coords)) {
        onLoteClick(lote);
        return;
      }
    }
  };

  return (
    <div className="image-mapper">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onClick={handleCanvasClick}
        className="canvas"
      />
    </div>
  );
}

function isPointInPolygon(x, y, coords) {
  let inside = false;
  for (let i = 0, j = coords.length - 2; i < coords.length; i += 2) {
    const xi = coords[i], yi = coords[i + 1];
    const xj = coords[j], yj = coords[j + 1];
    const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
    j = i;
  }
  return inside;
}

export default ImageMapper;
