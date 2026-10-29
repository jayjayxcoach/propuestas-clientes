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
  whatsapp: "593968637813",

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
    // Cuando tengan la foto, guárdenla en assets/equipo/equipo.jpg y pongan aquí: "assets/equipo/equipo.jpg"
    foto: "",
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

  // ---------- El día de grabación (cuadro superior + pasos unidos por un hilo) ----------
  // {negocio} se reemplaza por el nombre del negocio del cliente.
  // Cada paso lleva un clip corto en loop (vertical, sin sonido, 3 a 6 segundos).
  // Sube los clips a assets/proceso/ con estos nombres. Mientras no estén,
  // se muestra un visor de cámara vacío con el nombre del paso.
  grabacion: {
    titulo: "Así es tu día de grabación",
    texto: "Unas 4 horas en {negocio}. Llevamos todo el equipo y te guiamos en cada paso, para que tú solo te encargues de ser tú.",
    datos: ["Unas 4 horas", "En tu local", "Equipo de cine"],
    clip: "assets/proceso/dia-de-grabacion.mp4",
    pasos: [
      { titulo: "Montamos el set", detalle: "Llegamos antes, acomodamos luces, cámara y micrófonos, y buscamos los rincones de {negocio} que mejor se ven en cámara.", clip: "assets/proceso/montaje.mp4" },
      { titulo: "Calentamiento vocal", detalle: "Antes de grabar hacemos contigo unos ejercicios de voz y respiración. Sueltan los nervios y hacen que la voz salga clara y con energía.", clip: "assets/proceso/calentamiento-vocal.mp4" },
      { titulo: "Dirección frente a cámara", detalle: "Te decimos dónde pararte, a dónde mirar y qué hacer con las manos. Si una frase no sale natural, la ajustamos en el momento.", clip: "assets/proceso/direccion.mp4" },
      { titulo: "Guion y toma listos", detalle: "Antes de cada video repasamos el guion contigo y dejamos lista la toma, para que solo te enfoques en hablar.", clip: "assets/proceso/guion-y-toma.mp4" },
      { titulo: "Grabamos toma por toma", detalle: "Repetimos cada parte las veces que haga falta, y mientras grabamos vamos anotando las mejores tomas para no perder ninguna.", clip: "assets/proceso/grabacion.mp4" },
      { titulo: "Color y edición", detalle: "Después de la sesión, cada video pasa por corrección de color, cortes, textos, subtítulos y música.", clip: "assets/proceso/edicion.mp4" }
    ]
  },

  // ---------- Cómo empezamos ----------
  proceso: [
    { paso: "Reservas tu fecha", detalle: "Nos escribes por WhatsApp, pagas el 50% y apartamos el día de grabación." },
    { paso: "Apruebas los guiones", detalle: "Te mandamos los guiones adaptados a tu forma de hablar. Si algo no te suena a ti, lo cambiamos." },
    { paso: "Grabamos en {negocio}", detalle: "Unas 4 horas, tal como te lo contamos más arriba." },
    { paso: "Revisas tus videos", detalle: "En 3 a 4 días hábiles te mostramos los videos con marca de agua para que los veas con calma." },
    { paso: "Te llegan listos", detalle: "Pagas el otro 50% y te mandamos los videos limpios, listos para publicar." }
  ]
};
