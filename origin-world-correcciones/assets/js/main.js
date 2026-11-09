// OriginWorld Consulting — home
// 1) Enlaces de WhatsApp con mensaje según el botón (data-wa).
// 2) Formulario de diagnóstico: arma el mensaje y lo abre en WhatsApp.
//    Más adelante este envío se conecta también al CRM (webhook).
(function () {
  var WHATSAPP = "593967126789";
  var waUrl = function (text) { return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text); };

  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waUrl(a.getAttribute("data-wa"));
  });

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var form = document.getElementById("lead-form");
  var error = document.getElementById("form-error");
  if (!form) return;

  // La etiqueta del país cambia según exporte o importe.
  var op = form.elements["operacion"], paisLabel = document.getElementById("f-pais-label");
  if (op && paisLabel) op.addEventListener("change", function () {
    paisLabel.textContent = op.value === "Importación" ? "País de origen" : op.value === "Ambas" ? "País de destino u origen" : "País de destino";
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var get = function (k) { return String(data.get(k) || "").trim(); };
    var missing = [];

    ["nombre", "whatsapp"].forEach(function (k) {
      var input = form.elements[k];
      var empty = !get(k);
      input.setAttribute("aria-invalid", empty ? "true" : "false");
      if (empty) missing.push(input);
    });

    if (missing.length) {
      error.textContent = "Completa tu nombre y tu WhatsApp para enviar.";
      error.hidden = false;
      missing[0].focus();
      return;
    }
    error.hidden = true;

    var lines = [
      "Hola OriginWorld, quiero un diagnóstico.",
      "Nombre: " + get("nombre"),
      get("empresa") ? "Empresa: " + get("empresa") : null,
      "Necesito: " + get("servicio"),
      get("email") ? "Correo: " + get("email") : null,
      "Operación: " + get("operacion"),
      get("producto") ? "Producto: " + get("producto") : null,
      get("pais") ? (get("operacion") === "Importación" ? "País de origen: " : "País de destino: ") + get("pais") : null,
      "Mi WhatsApp: " + get("whatsapp")
    ].filter(Boolean);

    window.open(waUrl(lines.join("\n")), "_blank", "noopener");
  });
})();
