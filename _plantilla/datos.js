/* =========================================================
   PLANTILLA DE PROPUESTA
   1. Copia la carpeta _plantilla y llámala propuesta-[nombre del cliente]
      en minúsculas y sin espacios (ej. "propuesta-enrique").
   2. Llena este archivo.
   3. Cambia las 4 líneas de vista previa en index.html.
   Lo de la agencia (portafolio, equipo, proceso) vive en
   assets/agencia.js y no se toca aquí.
   ========================================================= */
window.PROPUESTA = {
  nombre: "[Nombre del cliente]",
  negocio: "[Nombre del negocio]",
  lugar: "[Ciudad]",
  rubro: "[rubro]",

  fecha: "[día] de [mes] de 2026",
  valida_hasta: "[día] de [mes] de 2026",

  cantidad: 5,
  precio: 99,

  intro: "Revisamos los videos de [rubro] que más se están viendo ahora mismo en Instagram y TikTok, y elegimos cinco formatos que podemos grabar en tu local. La idea es simple: que tu trabajo se vea igual de profesional en video que en persona.",

  mensaje_whatsapp: "Hola, soy [Nombre] de [Negocio]. Vi la propuesta y quiero mis 5 videos.",

  // Copia este bloque { ... } una vez por cada video.
  videos: [
    {
      titulo: "",
      formato: "",
      duracion: "",
      texto_pantalla: "",
      gancho: "",
      porque: "",
      como: "",
      referencia: {
        video: "referencias/ref-1.mp4", poster: "referencias/ref-1.jpg",
        url: "", cuenta: "",
        vistas: "", me_gusta: "", comentarios: "", compartidos: ""
      }
    }
  ]
};
