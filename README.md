# 🏗️ Terreno Lotizado App

Aplicación interactiva para visualizar y gestionar información de lotes en un terreno lotizado.

## 🎯 Características

✅ **Carga de imagen del terreno** - Sube la imagen de tu terreno lotizado
✅ **Interactividad** - Haz click en cada lote para ver su información
✅ **Información detallada** - Visualiza:
  - Número del lote
  - Manzana
  - Precio
  - Metros cuadrados
  - Disponibilidad (Disponible/Vendido)
  - Etapa del proyecto
  - Precio por metro cuadrado

✅ **Demo incluida** - Prueba con datos de ejemplo sin necesidad de cargar imagen

## 🚀 Instalación y ejecución

### Requisitos
- Node.js 14+
- npm o yarn

### Pasos

\`\`\`bash
# 1. Clonar el repositorio
git clone https://github.com/avilchezlaponciana/terreno-lotizado.git
cd terreno-lotizado

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm start

# La app se abrirá en http://localhost:3000
\`\`\`

## 💻 Uso

1. **Opción 1 - Con imagen personalizada:**
   - Haz click en el área de carga
   - Selecciona la imagen de tu terreno
   - Haz click en "Continuar con Imagen"

2. **Opción 2 - Ver demo:**
   - Haz click en "Ver Demo"
   - Prueba haciendo click en los lotes de ejemplo

3. **Interactuar con los lotes:**
   - Haz click en cualquier lote en el mapa
   - Verás la información detallada en el panel derecho
   - Los lotes disponibles aparecen en verde
   - Los lotes vendidos aparecen en rojo

## 📁 Estructura del proyecto

\`\`\`
terreno-lotizado/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ImageMapper.js       # Canvas para dibujar lotes
│   │   ├── ImageMapper.css
│   │   ├── LoteInfo.js          # Panel con información del lote
│   │   ├── LoteInfo.css
│   │   ├── UploadForm.js        # Formulario de carga inicial
│   │   └── UploadForm.css
│   ├── App.js                   # Componente principal
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
\`\`\`

## 🎨 Personalización

### Agregar lotes
Modifica el array \`sampleLotes\` en \`src/App.js\` con tus datos:

\`\`\`javascript
const sampleLotes = [
  { 
    id: 1, 
    numero: '001',           // Número del lote
    manzana: 'A',            // Manzana
    precio: 50000,           // Precio en dólares
    metros: 200,             // Metros cuadrados
    disponibilidad: true,    // true = disponible, false = vendido
    etapa: '1',              // Etapa del proyecto
    coords: [50, 50, 150, 50, 150, 100, 50, 100] // Coordenadas [x1,y1,x2,y2,...]
  },
  // ... más lotes
];
\`\`\`

### Cambiar colores
Edita \`src/components/ImageMapper.js\`:
\`\`\`javascript
ctx.fillStyle = lote.disponibilidad ? '#4caf5030' : '#f4433030'; // Verde/Rojo
\`\`\`

## 🔧 Tecnologías

- **React** 18 - UI library
- **Canvas API** - Renderizado de mapa de lotes
- **CSS3** - Estilos y animaciones

## 📝 Notas

- La aplicación usa Canvas para dibujar los lotes
- Los lotes se definen mediante coordenadas poligonales
- Se usa algoritmo de ray casting para detectar clicks dentro de polígonos
- Los datos actualmente son estáticos (se puede integrar con un backend para persistencia)

## 🤝 Contribuir

¡Siéntete libre de enviar issues y requests de mejoras!

## 📄 Licencia

MIT License
