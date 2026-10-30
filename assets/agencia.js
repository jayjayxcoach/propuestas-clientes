/* =========================================================
   DATOS DE LA AGENCIA (se comparten en TODAS las propuestas)
   Cambias algo aquí y se actualiza en todas las páginas.

   Las rutas de archivos son desde la raíz del repo,
   por ejemplo: "assets/portafolio/electroluz-final.mp4"
   En los textos, {negocio} se cambia por el negocio del cliente
   y {reserva} por el valor de la reserva.
   ========================================================= */
window.AGENCIA = {
  nombre: "Nebraska Media",
  inicial: "N",
  zona: "Santa Elena",

  // Número de WhatsApp de la agencia, con código de país y sin "+" ni espacios.
  whatsapp: "593968637813",

  // Valor con el que se separa la fecha de grabación (en dólares).
  reserva: 25,

  descripcion: "Hacemos foto y video para empresas y negocios aquí en Santa Elena",

  // ---------- Portafolio: detrás de cámara → video final ----------
  // Sube los videos a assets/portafolio/ con estos nombres exactos (vertical, .mp4).
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

  // ---------- Lo mejor que hemos grabado (6 videos en silencio y en loop) ----------
  // Sube los videos a assets/mejores/ con estos nombres. "cliente" es opcional.
  mejores: {
    titulo: "Lo mejor que hemos grabado",
    texto: "Una muestra del nivel de imagen y edición que vas a recibir.",
    videos: [
      { video: "assets/mejores/video-1.mp4", cliente: "" },
      { video: "assets/mejores/video-2.mp4", cliente: "" },
      { video: "assets/mejores/video-3.mp4", cliente: "" },
      { video: "assets/mejores/video-4.mp4", cliente: "" },
      { video: "assets/mejores/video-5.mp4", cliente: "" },
      { video: "assets/mejores/video-6.mp4", cliente: "" }
    ]
  },

  // ---------- Reseñas ----------
  // Pega aquí las palabras REALES de cada cliente. Si "texto" está vacío, no se muestra.
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
      { nombre: "Santiago Villarreal", rol: "Owner" },
      { nombre: "Jay Álvarez", rol: "Co-owner, dirección y guiones" },
      { nombre: "April Lion", rol: "CEO" },
      { nombre: "César Vera", rol: "Cámara y edición" }
    ],
    datos: ["Cámara de cine", "Luces y sonido profesional", "Color cuidado en cada toma", "Grabamos en tu local"]
  },

  // ---------- Inversión ----------
  incluye: [
    "La investigación de videos que ves en esta página",
    "Guiones adaptados a tu forma de hablar",
    "Una sesión de grabación de unas 4 horas en tu local",
    "Cámara de cine, luces y micrófonos profesionales",
    "Color, cortes, textos y subtítulos en cada video",
    "Música con licencia para uso comercial",
    "Entrega en una carpeta de Google Drive, lista para publicar"
  ],
  bono: {
    titulo: "Guía para promocionar tus videos en Meta",
    texto: "Te enseñamos paso a paso a invertir en publicidad en Facebook e Instagram, para que tus videos lleguen a más personas de la península."
  },
  pago: "Separas tu fecha con ${reserva}, completas el primer 50% el día de la grabación y pagas el otro 50% cuando apruebas tus videos.",
  referencia_mercado: "Como referencia: en Guayaquil y Quito, una productora cobra desde $150 por un solo reel.",

  // ---------- La experiencia de grabar con nosotros (cuadro superior + pasos con hilo) ----------
  // Cada paso lleva un clip corto en loop (vertical, sin sonido, 3 a 6 segundos) en assets/proceso/.
  // Si un paso no lleva clip, deja "clip" vacío y pon "icono": calendar, card, review o folder.
  grabacion: {
    titulo: "Esta es la experiencia que vivirás al grabar con nosotros",
    texto: "Unas 4 horas en {negocio}. Llevamos todo el equipo y te acompañamos en cada paso.",
    datos: ["Unas 4 horas", "En tu local", "Equipo de cine"],
    pasos: [
      { titulo: "Agendamos tu fecha", detalle: "Separas tu día de grabación con ${reserva} por WhatsApp. Así los dos quedamos comprometidos con esa fecha.", clip: "", icono: "calendar" },
      { titulo: "Llegamos y montamos el set", detalle: "Llegamos a {negocio} con todo el equipo: luces, cámara y sonido. Buscamos los rincones que mejor se ven en cámara.", clip: "assets/proceso/montaje.mp4" },
      { titulo: "Te contamos el plan", detalle: "Te explicamos qué videos vamos a grabar y en qué orden, para que sepas qué viene en cada momento.", clip: "assets/proceso/plan.mp4" },
      { titulo: "Calentamiento vocal", detalle: "Hacemos contigo unos ejercicios de voz y respiración para que te expreses de forma fluida y natural frente a la cámara.", clip: "assets/proceso/calentamiento-vocal.mp4" },
      { titulo: "Dirección frente a cámara", detalle: "Te guiamos en tu forma de hablar, tu postura y tus gestos, para que fluyas con naturalidad y transmitas confianza.", clip: "assets/proceso/direccion.mp4" },
      { titulo: "Grabamos toma por toma", detalle: "Grabamos cada video las veces que haga falta, hasta que quede como debe.", clip: "assets/proceso/grabacion.mp4" },
      { titulo: "Completas el primer 50%", detalle: "Al terminar la sesión pagas lo que falta para completar la primera mitad.", clip: "", icono: "card" },
      { titulo: "Color y edición", detalle: "En el estudio corregimos el color para que tus videos se vean muy bonitos y pasamos a la edición: cortes, textos, subtítulos y música.", clip: "assets/proceso/edicion.mp4" },
      { titulo: "Revisas tus videos", detalle: "Recibirás tus videos editados profesionalmente, con marca de agua, para que los revises con calma.", clip: "", icono: "review" },
      { titulo: "Te entregamos todo", detalle: "Cuando te gusten y no tengas correcciones, pagas el otro 50% y te entregamos todo en una carpeta de Google Drive, listo para publicar o programar. Incluye tu guía para promocionarlos en Meta.", clip: "", icono: "folder" }
    ]
  },

  // ---------- Cómo empezamos ----------
  proceso: [
    { paso: "Reservas tu fecha", detalle: "Nos escribes por WhatsApp y separas tu día de grabación con ${reserva}." },
    { paso: "Apruebas los guiones", detalle: "Te mandamos los guiones adaptados a tu forma de hablar. Si algo no te suena a ti, lo cambiamos." },
    { paso: "Grabamos en {negocio}", detalle: "Reservamos unas 4 horas de tu tiempo para la sesión." },
    { paso: "Revisas tus videos", detalle: "Te mostramos los videos con marca de agua para que los veas con calma." },
    { paso: "Te llegan listos", detalle: "Pagas el otro 50% y te mandamos los videos limpios, listos para publicar, junto con tu guía para promocionarlos en Meta." }
  ]
};
