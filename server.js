const express = require('express');
const cors = require('cors');

const app = express();
app.disable('x-powered-by');
// La API de esta práctica solo devuelve un mensaje público de demostración.
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API del laboratorio activa');
});

app.get('/api/mensaje', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({
    mensaje: '¡Conexión exitosa entre Vercel y Render!',
    curso: 'Despliegue en la nube'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
