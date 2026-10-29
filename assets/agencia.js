/* =========================================================
   DATOS DE LA AGENCIA (se comparten en TODAS las propuestas)
   Cambias algo aquí y se actualiza en todas las páginas.

   Las rutas de archivos son desde la raíz del repo,
   por ejemplo: "assets/portafolio/electroluz-final.mp4"
   ========================================================= */
window.AGENCIA = {
  nombre: "Nebraska Media",
  inicial: "N",
  zona: "Santa Elena",

  // Número de WhatsApp de la agencia, con código de país y sin "+" ni espacios.
  // Ejemplo: "593991234567"
  whatsapp: "",

  descripcion: "Hacemos foto y video para empresas y negocios aquí en Santa Elena",

  // ---------- Portafolio: detrás de cámara → video final ----------
  // Sube los videos a assets/portafolio/ con estos nombres exactos.
  // Recomendado: .mp4 vertical, menos de 10 MB cada uno.
  portafolio: [
    {
      cliente: "Electroluz",
      lugar: "La Libertad",
      trabajo: "Anuncios en video para llevar gente a su tienda de iluminación, frente al Aki.",
      backstage: "assets/portafolio/electroluz-backstage.mp4",
      final: "assets/portafolio/electroluz-final.mp4"
    },
    {
      cliente: "Miel de Maple",
      lugar: "Salinas",
      trabajo: "Contenido para la crepería, con su equipo como protagonista.",
      backstage: "assets/portafolio/miel-de-maple-backstage.mp4",
      final: "assets/portafolio/miel-de-maple-final.mp4"
    },
    {
      cliente: "Star Lion",
      lugar: "Montañita",
      trabajo: "Una sesión de videos en su local, con consejos para emprender.",
      backstage: "assets/portafolio/star-lion-backstage.mp4",
      final: "assets/portafolio/star-lion-final.mp4"
    }
  ],

  // ---------- Reseñas ----------
  // Pega aquí las palabras REALES de cada cliente (lo que te escriban por WhatsApp).
  // Si "texto" está vacío, esa reseña no se muestra.
  // Si todas están vacías, la sección completa se oculta.
  resenas: [
    { cliente: "Miel de Maple", lugar: "Salinas", autor: "", texto: "" },
    { cliente: "Electroluz", lugar: "La Libertad", autor: "", texto: "" }
  ],

  // ---------- Quiénes somos ----------
  equipo: {
    foto: "assets/equipo/equipo.jpg",
    texto: "Somos una agencia especializada en producir videos profesionales para marcas y negocios. Vamos hasta tu local con cámara de cine, luces y micrófonos, y nos encargamos de todo: la idea, la grabación y la edición.",
    personas: [
      { nombre: "Jay Álvarez", rol: "Dirección y guiones" },
      { nombre: "April Lyon", rol: "CEO" },
      { nombre: "César Vera", rol: "Cámara y edición" }
    ],
    datos: ["Cámara de cine", "Luces y sonido profesional", "Color cuidado en cada toma", "Grabamos en tu local"]
  },

  // ---------- Qué incluye (se usa en la sección de inversión) ----------
  incluye: [
    "La investigación de videos que ves en esta página",
    "Guiones adaptados a tu forma de hablar",
    "Una sesión de grabación en tu local",
    "Cámara de cine, luces y micrófonos profesionales",
    "Color, cortes, textos y subtítulos en cada video",
    "Música con licencia para uso comercial",
    "Videos verticales listos para publicar"
  ],
  pago: "50% para reservar tu fecha y 50% cuando recibes los videos. Antes del segundo pago te mostramos los videos con marca de agua.",
  referencia_mercado: "Como referencia: en Guayaquil y Quito, una productora cobra desde $150 por un solo reel.",

  // ---------- Cómo trabajamos ----------
  // {negocio} se reemplaza por el nombre del negocio del cliente.
  proceso: [
    { paso: "Reservas tu fecha", detalle: "Nos escribes por WhatsApp, pagas el 50% y apartamos el día de grabación." },
    { paso: "Te mandamos los guiones", detalle: "Los adaptamos a tu forma de hablar. Si algo no te suena a ti, lo cambiamos." },
    { paso: "Grabamos en {negocio}", detalle: "Llegamos con todo el equipo. Tú explicas lo que sabes y nosotros dirigimos cada toma, sin estrés." },
    { paso: "Editamos con calma", detalle: "Color, cortes, textos, subtítulos y música. Cuidamos cada detalle como si fuera nuestro." },
    { paso: "Recibes tus videos", detalle: "En 3 a 4 días hábiles te mostramos los videos con marca de agua. Pagas el otro 50% y te llegan limpios, listos para publicar." }
  ]
};
