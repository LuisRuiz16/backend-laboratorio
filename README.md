# Backend del laboratorio

API Node.js y Express para la práctica de Vercel y Render.

## Ejecución local

```sh
npm install
npm start
```

Abrir http://localhost:3000/api/mensaje.

## Render

- Tipo: Web Service
- Runtime: Node
- Branch: main
- Build Command: npm install
- Start Command: npm start
- Instance Type: Free
- La aplicación utiliza el puerto de `process.env.PORT`; no definirlo manualmente.
- Verificar `/` y `/api/mensaje` en la URL asignada por Render.

El mensaje devuelto es el texto de prueba de la guía. Recibirlo localmente valida la API, pero no demuestra por sí solo un despliegue en la nube. CORS está abierto porque este servicio solo expone información pública de demostración.
