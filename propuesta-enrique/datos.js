/* =========================================================
   PROPUESTA: Fismedica (Enrique)
   Lo de la agencia (portafolio, equipo, proceso) vive en
   assets/agencia.js. Aquí solo va lo de este cliente.

   Rutas de imágenes de este archivo: desde esta carpeta,
   por ejemplo "ref-1.jpg" si la pones junto a este archivo.
   ========================================================= */
window.PROPUESTA = {
  nombre: "Enrique",
  negocio: "Fismedica",
  lugar: "La Libertad",
  rubro: "fisioterapia",

  fecha: "28 de octubre de 2026",
  valida_hasta: "4 de noviembre de 2026",

  cantidad: 5,
  precio: 99,

  intro: "Revisamos los videos de fisioterapia que más se están viendo ahora mismo en Instagram y TikTok, y elegimos cinco formatos que podemos grabar en tu consultorio. La idea es simple: que tu trabajo se vea igual de profesional en video que en persona.",

  mensaje_whatsapp: "Hola, soy Enrique de Fismedica. Vi la propuesta y quiero mis 5 videos.",

  // ---------- Los videos ----------
  // referencia.url    → enlace del reel original (Instagram o TikTok)
  // referencia.cuenta → usuario del creador, para darle crédito (ej. "@fisio.ejemplo")
  // referencia.vistas → opcional, ej. "1,2 M de vistas"
  // referencia.captura → opcional, imagen del reel (jpg) dentro de esta carpeta
  videos: [
    {
      titulo: "Tres ejercicios antes de levantarte",
      formato: "Demostración en camilla",
      duracion: "30 a 45 s",
      texto_pantalla: "3 ejercicios para la espalda baja antes de levantarte",
      gancho: "Si te duele la espalda baja al levantarte, haz estos tres ejercicios antes de poner un pie en el piso.",
      porque: "Es el tipo de video que la gente guarda y le manda a alguien de la familia, porque le sirve en ese mismo momento. Te muestra enseñando, que es justo lo que un paciente quiere ver antes de ir a consulta.",
      como: "Lo grabamos en tu camilla con dos cámaras: una abierta y otra cerca del movimiento. Tú explicas y alguien de tu equipo hace cada ejercicio, con su nombre en pantalla.",
      referencia: { url: "", cuenta: "", vistas: "", captura: "" }
    },
    {
      titulo: "Lo que carga tu cuello con el celular",
      formato: "Explicación con modelo",
      duracion: "35 a 50 s",
      texto_pantalla: "Lo que carga tu cuello cuando miras el celular",
      gancho: "Esto es lo que le pasa a tu cuello cuando pasas tres horas al día mirando el celular.",
      porque: "Casi todo el mundo se siente identificado, y se entiende aunque el video esté sin sonido, que es como mucha gente ve los reels.",
      como: "Usamos un modelo de columna para mostrar cómo se inclina el cuello. Cerramos con un estiramiento que tus pacientes pueden hacer en la oficina.",
      referencia: { url: "", cuenta: "", vistas: "", captura: "" }
    },
    {
      titulo: "Mito o verdad",
      formato: "Respuestas rápidas",
      duracion: "30 a 40 s",
      texto_pantalla: "Hielo o calor: mito o verdad",
      gancho: "Tres cosas que la gente cree sobre el dolor de espalda y que no son verdad.",
      porque: "Los mitos generan comentarios, porque cada persona tiene su opinión. Y te ponen en el lugar del que sabe, sin tener que vender nada.",
      como: "Tú frente a la cámara con un fondo limpio del consultorio. Cada mito aparece en pantalla y lo respondes en una o dos frases, con cortes rápidos entre uno y otro.",
      referencia: { url: "", cuenta: "", vistas: "", captura: "" }
    },
    {
      titulo: "La pregunta que más nos hacen",
      formato: "Pregunta frecuente",
      duracion: "30 a 45 s",
      texto_pantalla: "¿Cuántas sesiones voy a necesitar?",
      gancho: "Todos los días nos llegan pacientes preguntando cuántas sesiones van a necesitar, y aquí te lo explico.",
      porque: "Responde la duda que frena a mucha gente antes de escribir. Quien lo ve llega a su primera cita sabiendo qué esperar.",
      como: "Una toma tuya hablando a cámara, mezclada con escenas de una sesión: la evaluación, el tratamiento y el paciente saliendo. Con permiso del paciente, o con alguien de tu equipo haciendo de paciente.",
      referencia: { url: "", cuenta: "", vistas: "", captura: "" }
    },
    {
      titulo: "Tu primera cita en Fismedica",
      formato: "Recorrido",
      duracion: "20 a 30 s",
      texto_pantalla: "Así es tu primera cita en Fismedica",
      gancho: "Así es tu primera cita en Fismedica, aquí en La Libertad.",
      porque: "A mucha gente le da cosa ir a un lugar que no conoce. Ver la entrada, la sala y a quien la va a atender quita ese miedo.",
      como: "Lo armamos con tomas de todo el día de grabación: la llegada, la recepción, la evaluación y el tratamiento, con música y textos cortos. Queda ideal para fijarlo en tu perfil.",
      referencia: { url: "", cuenta: "", vistas: "", captura: "" }
    }
  ]
};
