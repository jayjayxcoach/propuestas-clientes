# propuestas-clientes
Propuestas personalizadas de video para clientes de la agencia.

Cada cliente tiene su propia carpeta con su página. El diseño y los datos de la agencia se comparten, así que todas las propuestas se ven igual y se actualizan juntas.

## Cómo está organizado

```
assets/
  agencia.js        Datos de la agencia: WhatsApp, portafolio, reseñas, equipo, proceso
  propuesta.css     Diseño
  propuesta.js      Arma la página (no hace falta tocarlo)
  fonts/            Tipografías
  portafolio/       Videos de detrás de cámara y videos finales
  equipo/           Foto del equipo
_plantilla/         Carpeta base para crear una propuesta nueva
propuesta-enrique/  Propuesta de Enrique (Fismedica)
```

## Crear una propuesta nueva

1. Copia `_plantilla` y llámala `propuesta-` + el nombre del cliente, en minúsculas y sin espacios (ej. `propuesta-enrique`).
2. Llena `datos.js`: nombre, negocio, precio y los videos con sus enlaces de referencia.
3. En `index.html`, cambia las 4 líneas de vista previa (las que salen al pegar el enlace en WhatsApp).
4. Abre `index.html` en tu computadora. Abajo a la derecha aparece un panel con lo que falta. Ese panel solo sale en tu computadora; el cliente no lo ve.
5. Haz commit y push. La página queda en `https://jaypersonalbrand.com/<carpeta>/`.

Para revisar una propuesta ya publicada con el panel, agrega `?revisar` al final del enlace.

## Publicar con GitHub Pages (solo la primera vez)

Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.
