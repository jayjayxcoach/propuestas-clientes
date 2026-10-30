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

  fecha: "29 de octubre de 2026",
  valida_hasta: "5 de noviembre de 2026",

  cantidad: 5,
  precio: 99,

  intro: "Revisamos los videos de fisioterapia que más se están viendo ahora mismo en Instagram y elegimos cinco formatos que podemos grabar en tu consultorio. La idea es simple: que tu trabajo se vea igual de profesional en video que en persona.",

  mensaje_whatsapp: "Hola, soy Enrique de Fismedica. Vi la propuesta y quiero mis 5 videos.",

  // ---------- Los videos ----------
  // referencia.video / poster → archivos dentro de la carpeta referencias/ de este cliente
  // referencia.url / cuenta   → reel original y usuario del creador (sale como crédito)
  // vistas, me_gusta, comentarios, compartidos → se muestran debajo del video (vacío = no se muestra)
  videos: [
    {
      titulo: "Las peores lesiones de rodilla",
      formato: "Ranking",
      duracion: "45 a 60 s",
      texto_pantalla: "Peores lesiones de rodilla, de menos a más",
      gancho: "Estas son las peores lesiones de rodilla que vemos en el consultorio, de la menos grave a la peor.",
      porque: "Un ranking hace que la gente se quede hasta el final para ver cuál es la número uno. Y al cerrar pidiendo que comenten su lesión, el video se llena de comentarios que además te dan ideas para los siguientes.",
      como: "Tú sentado frente a la cámara, con una lista del 1 al 7 que se va llenando en pantalla con un ícono por lesión. Cerramos invitando a comentar su lesión para responderles con otro video.",
      referencia: {
        video: "referencias/ref-1.mp4", poster: "referencias/ref-1.jpg",
        url: "https://www.instagram.com/reel/DerlzCMo2PR/", cuenta: "@andreapalazzolo.fisioterapia",
        vistas: "1,2 M", me_gusta: "177,4 mil", comentarios: "1,6 mil", compartidos: ""
      }
    },
    {
      titulo: "Un ejercicio para dejar de andar encorvado",
      formato: "Ejercicio guiado",
      duracion: "45 a 60 s",
      texto_pantalla: "Si andas encorvado todo el día, haz esto",
      gancho: "Si pasas el día encorvado, este ejercicio en el piso te ayuda a enderezar la postura en menos de un minuto.",
      porque: "Al final pide escribir una palabra en los comentarios para recibir la rutina completa. Por eso tiene más de 21 mil comentarios: cada uno es una persona que levantó la mano y a la que le puedes escribir.",
      como: "Cámara baja, a la altura del piso, y un texto grande en pantalla para cada paso. Cerramos pidiendo que comenten una palabra, por ejemplo POSTURA, para mandarles la rutina por mensaje.",
      referencia: {
        video: "referencias/ref-2.mp4", poster: "referencias/ref-2.jpg",
        url: "https://www.instagram.com/reel/DKppwjKC9fY/", cuenta: "@fisioterapiatualcance",
        vistas: "659,7 mil", me_gusta: "69,6 mil", comentarios: "21,3 mil", compartidos: ""
      }
    },
    {
      titulo: "El primer ejercicio para la rodilla",
      formato: "Explicación en consultorio",
      duracion: "40 a 60 s",
      texto_pantalla: "Si te duele la rodilla al subir escaleras",
      gancho: "Todos los días nos llegan pacientes con dolor de rodilla al subir escaleras, y este es el primer ejercicio que les enseño.",
      porque: "Es sencillo de seguir y muestra tu consultorio tal como es: tu camilla, tu uniforme y tu forma de explicar. La gente ve dónde la van a atender y quién la va a atender.",
      como: "Grabamos en tu consultorio con la luz bien cuidada. Una toma tuya explicando y otra cerca de la pierna para que el movimiento se entienda. Cerramos recordando que cada caso se evalúa en consulta.",
      referencia: {
        video: "referencias/ref-3.mp4", poster: "referencias/ref-3.jpg",
        url: "https://www.instagram.com/reel/DehjXXmDKti/", cuenta: "@drlopezmartinez",
        vistas: "208,3 mil", me_gusta: "18,5 mil", comentarios: "497", compartidos: ""
      }
    },
    {
      titulo: "El mito que más escuchas en consulta",
      formato: "Mito o verdad",
      duracion: "40 a 60 s",
      texto_pantalla: "Te lo digo aunque me cueste pacientes",
      gancho: "Te lo digo aunque me cueste pacientes: esto que todos creen sobre el dolor de espalda no es verdad.",
      porque: "Arranca contradiciendo algo que casi todos creen, y por eso nadie lo pasa de largo. Te pone como el que explica las cosas claras, sin vender nada, y la gente comenta para dar su opinión.",
      como: "Tú a cámara en primer plano, con subtítulos palabra por palabra como en la referencia. Antes de grabar elegimos contigo el mito que más escuchas de tus pacientes.",
      referencia: {
        video: "referencias/ref-4.mp4", poster: "referencias/ref-4.jpg",
        url: "https://www.instagram.com/reel/Db62BjFhSIG/", cuenta: "@sensia.cl",
        vistas: "", me_gusta: "", comentarios: "550", compartidos: ""
      }
    },
    {
      titulo: "Cinco ejercicios para la espalda baja",
      formato: "Rutina",
      duracion: "45 a 60 s",
      texto_pantalla: "5 ejercicios para la espalda baja",
      gancho: "Si terminas el día con la espalda baja cargada, guarda estos cinco ejercicios.",
      porque: "Es útil, la gente lo guarda para hacerlo en casa y de paso muestra el espacio donde haces la rehabilitación. Al final invita a agendar una evaluación sin sonar a anuncio.",
      como: "Grabamos en tu área de tratamiento con dos ángulos: uno abierto para ubicar el lugar y otro cerca para cada ejercicio. Cerramos con tu número de WhatsApp en pantalla.",
      referencia: {
        video: "referencias/ref-5.mp4", poster: "referencias/ref-5.jpg",
        url: "https://www.instagram.com/reel/Dd5ANFUualc/", cuenta: "@dralorenadurancamargo",
        vistas: "45,4 mil", me_gusta: "3 mil", comentarios: "50", compartidos: ""
      }
    }
  ]
};
