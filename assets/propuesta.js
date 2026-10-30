/* =========================================================
   Nebraska Media · Motor de propuestas
   Lee window.AGENCIA (assets/agencia.js) y window.PROPUESTA
   (datos.js de cada cliente) y arma la página.
   No hace falta tocar este archivo para crear una propuesta.
   ========================================================= */
(function () {
  "use strict";

  var A = window.AGENCIA || {};
  var P = window.PROPUESTA || {};
  var ROOT = new URL("../", document.currentScript.src).href;
  var REVISAR = location.protocol === "file:" || location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" || /[?&]revisar\b/.test(location.search);
  var QUIET = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pendientes = {};
  var faltan = {};

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fromRoot(p) { return !p ? "" : /^(https?:|data:|\/)/.test(p) ? p : ROOT + p; }
  function fill(s) {
    return String(s || "").replace(/\{negocio\}/g, P.negocio || "tu negocio").replace(/\{reserva\}/g, A.reserva || 25);
  }
  function pend(msg, key) { pendientes[key || msg] = msg; renderCheck(); }
  function wa(msg) {
    var n = String(A.whatsapp || "").replace(/\D/g, "");
    return n ? "https://wa.me/" + n + "?text=" + encodeURIComponent(msg) : "#";
  }
  function waAttrs(msg) {
    var href = wa(msg);
    return 'href="' + esc(href) + '"' + (href === "#" ? ' data-sin-numero' : ' target="_blank" rel="noopener"');
  }

  var I = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
    cam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="6" width="13" height="12" rx="3"/><path d="M15.5 10.5l6-3.5v10l-6-3.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>',
    sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-9.2-8.6C1.3 8.4 3.2 5 6.6 5c2 0 3.4 1.2 4.1 2.5h2.6C14 6.2 15.4 5 17.4 5c3.4 0 5.3 3.4 3.8 6.4C19 15.6 12 20 12 20z"/></svg>',
    comment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5A8.5 8.5 0 1 1 21 11.5z"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 3L11 14"/><path d="M22 3l-7 19-4-8-8-4z"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/><path d="M8.5 14.5l2.3 2.2 4.7-4.7"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 9.5h19M6.5 15h4"/></svg>',
    review: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10 6h4"/><path d="M9.5 13.5l1.8 1.8 3.5-3.6"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7.5a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 11v6M9.5 14.5L12 17l2.5-2.5"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="5" rx="1.5"/><path d="M5 13v6.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V13M12 8v13"/><path d="M12 8S10.5 3.5 7.8 3.5a2.2 2.2 0 0 0 0 4.5H12zM12 8s1.5-4.5 4.2-4.5a2.2 2.2 0 0 1 0 4.5H12z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.3 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.8c-1.5 0-3-.4-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2c0 1.2.9 2.3 1 2.5.1.2 1.7 2.6 4.1 3.6 1.5.7 2.1.7 2.9.6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.2z"/></svg>'
  };

  /* ---------- piezas ---------- */
  // Todos los videos se cargan solo cuando se acercan a la pantalla (data-src)
  function videoTag(src, group, poster) {
    return '<video muted loop playsinline preload="none" data-src="' + esc(src) + '" data-file="' + esc(src) + '"' +
      (group ? ' data-group="' + esc(group) + '"' : "") + (poster ? ' poster="' + esc(poster) + '"' : "") + '></video>';
  }
  function frameVF(src, label, extra, group) {
    return '<div class="frame vf is-empty' + (extra ? " " + extra : "") + '">' +
      (src ? videoTag(fromRoot(src), group) : "") +
      '<div class="empty">' + I.cam + '<span>' + esc(label) + '</span><small class="file">' + esc(src || "") + '</small></div>' +
      '<div class="vf-ui" aria-hidden="true"><i></i><i></i><i></i><i></i>' +
      '<span class="vf-rec"><b></b>REC</span><span class="vf-tc">00:00:00:00</span></div>' +
      '</div>';
  }
  // opts: { sound: true, poster: "", group: "" }
  function framePhone(src, label, opts) {
    opts = opts || {};
    return '<div class="frame phone is-empty' + (opts.poster ? " has-poster" : "") + '"><div class="screen' + (opts.extra ? " " + opts.extra : "") + '">' +
      '<span class="island" aria-hidden="true"></span>' +
      (src ? videoTag(src, opts.group, opts.poster) : "") +
      '<div class="empty">' + I.play + '<span>' + esc(label) + '</span><small class="file">' + esc(src || "") + '</small></div>' +
      (src && opts.sound ? '<button class="sound" type="button" aria-label="Activar sonido" aria-pressed="false">' + I.mute + '</button>' : "") +
      '</div></div>';
  }
  function head(title, lede, id) {
    return '<header class="sec-head"' + (id ? ' id="' + id + '-t"' : "") + '><h2>' + esc(title) + '</h2>' +
      (lede ? '<p class="lede">' + esc(lede) + '</p>' : "") + '</header>';
  }

  /* ---------- secciones ---------- */
  function topbar() {
    return '<nav class="topbar glass" aria-label="Propuesta">' +
      '<a class="brand" href="#inicio"><span class="brand-mark" aria-hidden="true">' + esc(A.inicial || "N") + '</span>' +
      '<span class="brand-name">' + esc(A.nombre) + '</span></a>' +
      '<span class="topbar-mid"><span class="topbar-for">Propuesta para ' + esc(P.negocio) + '</span></span>' +
      '<a class="topbar-cta" href="#inversion">Ver inversión</a>' +
      '</nav>';
  }

  function hero() {
    return '<section class="hero wrap" id="inicio">' +
      '<h1>Hola, ' + esc(P.nombre) + '.</h1>' +
      '<p class="welcome">Bienvenido a tu propuesta.</p>' +
      '<p class="intro">Somos ' + esc(A.nombre) + '. ' + esc(A.descripcion) + ', y armamos esta página solo para ti.</p>' +
      '<div class="notif glass" role="note">' +
      '<span class="brand-mark" aria-hidden="true">' + esc(A.inicial || "N") + '</span>' +
      '<div class="notif-top"><span>' + esc(A.nombre) + '</span><span>ahora</span></div>' +
      '<div class="notif-title">Tu propuesta está lista</div>' +
      '<div class="notif-body">' + esc(P.cantidad) + ' videos pensados para ' + esc(P.negocio) + ', grabados en tu local y editados por nosotros. Desliza para verla.</div>' +
      '</div>' +
      '</section>';
  }

  function portafolio() {
    var list = A.portafolio || [];
    if (!list.length) return "";
    var h = '<section class="wrap" id="portafolio" aria-labelledby="portafolio-t">' +
      head("Esto ya lo grabamos aquí en la península", "A la izquierda, cómo se ve un día de grabación con nosotros. A la derecha, el video que salió de ese día.", "portafolio") +
      '<div class="cases">';
    list.forEach(function (c) {
      h += '<article class="case glass anim">' +
        '<div class="case-info"><h3>' + esc(c.cliente) + '</h3>' +
        '<p class="case-place">' + esc(c.lugar) + '</p>' +
        '<p class="case-what">' + esc(c.trabajo) + '</p></div>' +
        '<div class="morph">' +
        '<figure>' + frameVF(c.backstage, "Detrás de cámara", "", "portafolio") + '<figcaption>Detrás de cámara</figcaption></figure>' +
        '<div class="bridge" aria-hidden="true"><span class="lens">' + I.arrow + '</span></div>' +
        '<figure>' + framePhone(c.final ? fromRoot(c.final) : "", "Video final", { sound: true, group: "portafolio" }) + '<figcaption>Video final</figcaption></figure>' +
        '</div></article>';
    });
    return h + '</div></section>';
  }

  function mejores() {
    var m = A.mejores;
    if (!m || !(m.videos || []).length) return "";
    var h = '<section class="wrap" id="mejores" aria-labelledby="mejores-t">' +
      head(m.titulo, m.texto, "mejores") + '<div class="best">';
    m.videos.forEach(function (v, i) {
      h += '<figure class="best-item">' + framePhone(v.video ? fromRoot(v.video) : "", "Video " + (i + 1), { group: "mejores" }) +
        (v.cliente ? '<figcaption>' + esc(v.cliente) + '</figcaption>' : "") + '</figure>';
    });
    return h + '</div></section>';
  }

  function resenas() {
    var list = (A.resenas || []).filter(function (r) { return r.texto && String(r.texto).trim(); });
    if (!list.length) {
      pend("Las reseñas están vacías, así que esa sección no se muestra. Pega las palabras reales de tus clientes en <code>assets/agencia.js</code>.");
      return "";
    }
    var h = '<section class="wrap" id="resenas" aria-labelledby="resenas-t">' +
      head("Lo que dicen nuestros clientes", "", "resenas") + '<div class="reviews">';
    list.forEach(function (r) {
      h += '<figure class="review glass"><blockquote style="margin:0"><p>' + esc(r.texto) + '</p></blockquote>' +
        '<footer><strong>' + esc(r.autor || r.cliente) + '</strong>' +
        (r.autor ? ', ' + esc(r.cliente) : "") + (r.lugar ? ' (' + esc(r.lugar) + ')' : "") + '</footer></figure>';
    });
    return h + '</div></section>';
  }

  function equipo() {
    var e = A.equipo || {};
    var people = (e.personas || []).map(function (p) {
      return '<li><span>' + esc(p.nombre) + '</span><span>' + esc(p.rol) + '</span></li>';
    }).join("");
    var facts = (e.datos || []).map(function (d) { return '<span class="chip">' + esc(d) + '</span>'; }).join("");
    var photo = e.foto ? '<div class="team-photo is-empty">' +
      '<img alt="El equipo de ' + esc(A.nombre) + '" data-src="' + esc(fromRoot(e.foto)) + '" data-file="' + esc(e.foto) + '">' +
      '<div class="empty"><span>Foto del equipo</span><small class="file">' + esc(e.foto) + '</small></div></div>' : "";
    return '<section class="wrap" id="equipo" aria-labelledby="equipo-t">' +
      head("Quiénes somos", "", "equipo") +
      '<div class="team glass' + (photo ? "" : " no-photo") + '">' + photo +
      '<div class="team-text"><p>' + esc(e.texto) + '</p>' +
      (people ? '<ul class="people">' + people + '</ul>' : "") +
      (facts ? '<div class="facts">' + facts + '</div>' : "") +
      '</div></div></section>';
  }

  function stats(r) {
    var items = [
      [r.vistas, "vistas", I.eye],
      [r.me_gusta, "me gusta", I.heart],
      [r.comentarios, "comentarios", I.comment],
      [r.compartidos, "compartidos", I.share]
    ].filter(function (x) { return x[0]; });
    if (!items.length) return "";
    return '<ul class="stats">' + items.map(function (x) {
      return '<li>' + x[2] + '<b>' + esc(x[0]) + '</b><span>' + x[1] + '</span></li>';
    }).join("") + '</ul>';
  }

  function videos() {
    var list = P.videos || [];
    var sinVideo = list.filter(function (v) { return !(v.referencia && v.referencia.video); }).length;
    if (sinVideo) pend("Faltan " + sinVideo + " de " + list.length + " videos de referencia en <code>datos.js</code>.");
    var h = '<section class="wrap" id="propuesta" aria-labelledby="propuesta-t">' +
      head("Preparamos esto solo para " + P.negocio, P.intro, "propuesta") +
      '<div class="videos">';
    list.forEach(function (v, i) {
      var r = v.referencia || {};
      h += '<article class="vcard glass">' +
        '<div class="vmedia">' +
        framePhone(r.video || "", "Video de referencia", { sound: true, poster: r.poster, group: "referencias" }) +
        stats(r) +
        (r.cuenta ? '<p class="credit">Reel de ' + (r.url ? '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.cuenta) + '</a>' : esc(r.cuenta)) + '</p>' : "") +
        '</div>' +
        '<div class="vbody">' +
        '<p class="vnum">Video ' + (i + 1) + '</p>' +
        '<h3>' + esc(v.titulo) + '</h3>' +
        '<div class="facts">' + (v.formato ? '<span class="chip">' + esc(v.formato) + '</span>' : "") +
        (v.duracion ? '<span class="chip">' + esc(v.duracion) + '</span>' : "") + '</div>' +
        (v.gancho ? '<p class="hook"><small>Así empieza el tuyo</small>' + esc(v.gancho) + '</p>' : "") +
        '<div class="why">' +
        '<div><h4>Por qué lo estamos haciendo</h4><p>' + esc(v.porque) + '</p></div>' +
        '<div><h4>Cómo lo grabamos en ' + esc(P.negocio) + '</h4><p>' + esc(v.como) + '</p></div>' +
        '</div>' +
        '</div></article>';
    });
    h += '</div><p class="note">Los videos de referencia muestran el formato y el estilo. Los tuyos se graban desde cero, en tu local, con tu equipo y con tu voz.</p>';
    return h + '</section>';
  }

  function grabacion() {
    var g = A.grabacion;
    if (!g || !(g.pasos || []).length) return "";
    var chips = (g.datos || []).map(function (d) { return '<span class="chip">' + esc(fill(d)) + '</span>'; }).join("");
    var h = '<section class="wrap shoot" id="grabacion" aria-labelledby="grabacion-t">' +
      '<div class="shoot-top glass">' +
      '<h2 id="grabacion-t">' + esc(fill(g.titulo)) + '</h2>' +
      '<p class="lede">' + esc(fill(g.texto)) + '</p>' +
      (chips ? '<div class="facts">' + chips + '</div>' : "") +
      '</div>' +
      '<ol class="thread"><span class="thread-fill" aria-hidden="true"></span>';
    g.pasos.forEach(function (s, i) {
      var media = s.clip ? frameVF(s.clip, s.titulo, "clip", "proceso")
        : '<div class="ticon" aria-hidden="true">' + (I[s.icono] || I.calendar) + '</div>';
      h += '<li class="tstep">' +
        '<span class="node" aria-hidden="true">' + (i + 1) + '</span>' +
        '<article class="tcard glass anim' + (s.clip ? "" : " is-icon") + '">' + media +
        '<div class="tbody"><p class="vnum">Paso ' + (i + 1) + '</p><h3>' + esc(fill(s.titulo)) + '</h3><p>' + esc(fill(s.detalle)) + '</p></div>' +
        '</article></li>';
    });
    return h + '</ol></section>';
  }

  function inversion() {
    var inc = (A.incluye || []).map(function (x) { return '<li>' + esc(fill(x)) + '</li>'; }).join("");
    var b = A.bono;
    return '<section class="wrap" id="inversion" aria-labelledby="inversion-t">' +
      head("Tu inversión", "", "inversion") +
      '<div class="price glass">' +
      '<div>' +
      '<div class="amount"><sup>$</sup>' + esc(P.precio) + '</div>' +
      '<p class="amount-for">por los ' + esc(P.cantidad) + ' videos</p>' +
      '<p class="amount-note">Pago único, sin mensualidades.</p>' +
      (A.referencia_mercado ? '<p class="anchor">' + esc(A.referencia_mercado) + '</p>' : "") +
      '<div class="actions"><a class="btn" ' + waAttrs(P.mensaje_whatsapp || ("Hola, vi la propuesta y quiero mis " + P.cantidad + " videos.")) + '>' +
      I.wa + 'Quiero mis ' + esc(P.cantidad) + ' videos</a>' +
      (P.valida_hasta ? '<span class="valid">Válida hasta el ' + esc(P.valida_hasta) + '.</span>' : "") + '</div>' +
      '</div>' +
      '<div><ul class="includes">' + inc + '</ul>' +
      (b ? '<div class="bonus">' + I.gift + '<div><p class="bonus-tag">Bono incluido</p><h3>' + esc(b.titulo) + '</h3><p>' + esc(fill(b.texto)) + '</p></div></div>' : "") +
      (A.pago ? '<p class="pay">' + esc(fill(A.pago)) + '</p>' : "") + '</div>' +
      '</div></section>';
  }

  function proceso() {
    var steps = (A.proceso || []).map(function (s) {
      return '<li><div><h3>' + esc(fill(s.paso)) + '</h3><p>' + esc(fill(s.detalle)) + '</p></div></li>';
    }).join("");
    return '<section class="wrap" id="proceso" aria-labelledby="proceso-t">' +
      head("Cómo empezamos", "De tu primer mensaje a tus videos listos para publicar.", "proceso") +
      '<ol class="steps glass">' + steps + '</ol></section>';
  }

  function cierre() {
    return '<section class="wrap closing" id="cierre" aria-labelledby="cierre-t">' +
      '<header class="sec-head" id="cierre-t"><h2>¿Grabamos, ' + esc(P.nombre) + '?</h2>' +
      '<p class="lede">Escríbenos y buscamos juntos el mejor día para la sesión en ' + esc(P.negocio) + '.</p></header>' +
      '<div class="actions"><a class="btn" ' + waAttrs(P.mensaje_whatsapp || "Hola, vi la propuesta.") + '>' + I.wa + 'Escribirnos por WhatsApp</a></div>' +
      '</section>' +
      '<footer class="foot wrap"><p><strong>' + esc(A.nombre) + '</strong></p>' +
      '<p>Foto y video para negocios en ' + esc(A.zona) + ', Ecuador</p>' +
      (P.fecha ? '<p>Propuesta preparada para ' + esc(P.negocio) + ' el ' + esc(P.fecha) + '</p>' : "") +
      '</footer>';
  }

  /* ---------- panel de revisión (solo para el equipo) ---------- */
  var checkEl = null;
  function renderCheck() {
    if (!REVISAR || !document.body) return;
    if (!checkEl) {
      checkEl = document.createElement("aside");
      checkEl.className = "check glass";
      checkEl.setAttribute("aria-label", "Revisión antes de enviar");
      document.body.appendChild(checkEl);
    }
    var list = Object.keys(pendientes).map(function (k) { return pendientes[k]; });
    var ok = !list.length;
    checkEl.classList.toggle("ok", ok);
    checkEl.innerHTML = '<h4>' + (ok ? "Lista para enviar" : "Antes de enviar") +
      '<button type="button" aria-label="Cerrar">Cerrar</button></h4>' +
      '<p>Este panel solo lo ves tú. El cliente no lo ve.</p>' +
      '<ul>' + (ok ? '<li><span>Todo completo.</span></li>' : list.map(function (x) { return '<li><span>' + x + '</span></li>'; }).join("")) + '</ul>';
    checkEl.querySelector("button").onclick = function () { checkEl.remove(); checkEl = null; REVISAR = false; };
  }

  /* ---------- armar la página ---------- */
  function build() {
    if (!String(A.whatsapp || "").replace(/\D/g, "")) {
      pend("Falta el número de WhatsApp de la agencia en <code>assets/agencia.js</code>. Sin él, los botones no abren el chat.");
    }
    document.title = "Hola " + (P.nombre || "") + ", tu propuesta de " + (A.nombre || "");
    if (REVISAR) document.documentElement.classList.add("revisar");

    var app = document.getElementById("app");
    app.innerHTML = '<div class="wallpaper" aria-hidden="true"></div>' + topbar() +
      '<main>' + hero() + portafolio() + mejores() + resenas() + equipo() + videos() + grabacion() + inversion() + proceso() + cierre() + '</main>';

    wireMedia(app);
    wireButtons(app);
    wireAnim(app);
    wireThread(app);
    renderCheck();
  }

  function wireButtons(root) {
    root.querySelectorAll("a[data-sin-numero]").forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); });
    });
  }

  // Las animaciones decorativas solo corren mientras su bloque está en pantalla
  function wireAnim(root) {
    var els = root.querySelectorAll(".anim");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in-view"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle("in-view", en.isIntersecting); });
    });
    els.forEach(function (e) { io.observe(e); });
  }

  var GRUPOS = {
    portafolio: "Faltan {n} videos del portafolio en <code>assets/portafolio/</code> (los nombres están en <code>assets/agencia.js</code>).",
    mejores: "Faltan {n} de los 6 videos de muestra en <code>assets/mejores/</code>.",
    proceso: "Faltan {n} clips del día de grabación en <code>assets/proceso/</code>.",
    referencias: "Faltan {n} videos de referencia de este cliente."
  };

  function wireMedia(root) {
    root.querySelectorAll(".team-photo img[data-src]").forEach(function (img) {
      var box = img.closest(".team-photo");
      img.onload = function () { box.classList.remove("is-empty"); };
      img.onerror = function () { img.remove(); pend("Falta la foto del equipo: <code>" + esc(img.dataset.file) + "</code>"); };
      img.src = img.dataset.src;
    });

    var vids = Array.prototype.slice.call(root.querySelectorAll("video[data-src]"));
    var playing = [];

    function attach(v) {
      if (v.dataset.loaded) return;
      v.dataset.loaded = "1";
      var frame = v.closest(".frame");
      v.addEventListener("loadeddata", function () { frame.classList.remove("is-empty"); });
      v.addEventListener("error", function () {
        v.remove();
        var g = v.dataset.group;
        if (g && GRUPOS[g]) {
          faltan[g] = (faltan[g] || 0) + 1;
          pend(GRUPOS[g].replace("{n}", faltan[g]), "g-" + g);
        } else {
          pend("Falta el video <code>" + esc(v.dataset.file) + "</code>");
        }
      });
      v.addEventListener("play", function () { if (playing.indexOf(v) === -1) playing.push(v); startTick(); });
      v.addEventListener("pause", function () { playing = playing.filter(function (x) { return x !== v; }); });
      v.preload = "metadata";
      v.src = v.dataset.src;
    }

    // Con poster, el video queda "listo" visualmente aunque no haya cargado
    root.querySelectorAll(".frame.has-poster").forEach(function (f) { f.classList.remove("is-empty"); });

    if (REVISAR || !("IntersectionObserver" in window)) {
      vids.forEach(attach); // en revisión se cargan todos para listar lo que falta
    }
    if ("IntersectionObserver" in window) {
      var near = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { attach(en.target); near.unobserve(en.target); } });
      }, { rootMargin: "600px 0px" });
      var seen = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var v = en.target;
          if (en.isIntersecting && !QUIET) { attach(v); var p = v.play(); if (p && p.catch) p.catch(function () {}); }
          else if (!v.paused) v.pause();
        });
      }, { threshold: 0.35 });
      vids.forEach(function (v) { near.observe(v); seen.observe(v); });
    }

    // Sonido (solo un video con sonido a la vez)
    root.querySelectorAll(".sound").forEach(function (b) {
      b.addEventListener("click", function () {
        var v = b.parentNode.querySelector("video");
        if (!v) return;
        attach(v);
        var turnOn = v.muted;
        vids.forEach(function (o) { o.muted = true; });
        root.querySelectorAll(".sound").forEach(function (o) {
          o.setAttribute("aria-pressed", "false"); o.setAttribute("aria-label", "Activar sonido"); o.innerHTML = I.mute;
        });
        if (turnOn) {
          v.muted = false;
          var p = v.play(); if (p && p.catch) p.catch(function () {});
          b.setAttribute("aria-pressed", "true"); b.setAttribute("aria-label", "Silenciar"); b.innerHTML = I.sound;
        }
      });
    });

    // Código de tiempo de los visores: solo corre mientras hay un video sonando
    var ticking = false;
    function startTick() { if (!ticking) { ticking = true; requestAnimationFrame(tick); } }
    function tick() {
      var any = false;
      playing.forEach(function (v) {
        var vf = v.closest(".vf");
        if (!vf || !v.isConnected) return;
        any = true;
        var t = v.currentTime, el = vf.querySelector(".vf-tc");
        var f = Math.floor((t % 1) * 30), s = Math.floor(t) % 60, m = Math.floor(t / 60) % 60;
        el.textContent = "00:" + pad(m) + ":" + pad(s) + ":" + pad(f);
      });
      if (any && playing.length) requestAnimationFrame(tick); else ticking = false;
    }
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  // El hilo del día de grabación se va llenando a medida que bajas
  function wireThread(root) {
    var ol = root.querySelector(".thread");
    if (!ol) return;
    var nodes = Array.prototype.slice.call(ol.querySelectorAll(".node"));
    if (QUIET) { ol.style.setProperty("--p", "1"); nodes.forEach(function (n) { n.classList.add("on"); }); return; }
    var queued = false, last = -1;
    function update() {
      queued = false;
      var r = ol.getBoundingClientRect();
      var vh = window.innerHeight;
      if (r.bottom < -200 || r.top > vh + 200) return; // fuera de pantalla: no hacemos nada
      var mark = vh * 0.6;
      var p = Math.max(0, Math.min(1, (mark - r.top) / r.height));
      if (Math.abs(p - last) < 0.002) return;
      last = p;
      ol.style.setProperty("--p", p.toFixed(3));
      nodes.forEach(function (n) { var b = n.getBoundingClientRect(); n.classList.toggle("on", b.top + b.height / 2 < mark); });
    }
    function onScroll() { if (!queued) { queued = true; requestAnimationFrame(update); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
