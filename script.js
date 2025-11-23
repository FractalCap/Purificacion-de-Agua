// Número de WhatsApp para las citas
const WA_NUMBER = "573112100552";

// Toggle menú móvil
function toggleMenu() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  nav.classList.toggle("open");
}

// Año dinámico en footer
(function setYear() {
  const span = document.getElementById("year");
  if (span) span.textContent = new Date().getFullYear();
})();

// Arma el mensaje y abre WhatsApp con los datos del formulario
function crearCitaWhatsApp(e) {
  e.preventDefault();

  const nombre  = document.getElementById("a_nombre")?.value.trim() || "";
  const empresa = document.getElementById("a_empresa")?.value.trim() || "";
  const ciudad  = document.getElementById("a_ciudad")?.value.trim() || "";
  const sector  = document.getElementById("a_sector")?.value.trim() || "";
  const fecha   = document.getElementById("a_fecha")?.value.trim() || "";
  const hora    = document.getElementById("a_hora")?.value.trim() || "";

  let mensaje = "Hola, quiero agendar una visita técnica.%0A%0A";
  mensaje += "*Nombre:* " + nombre + "%0A";
  if (empresa) mensaje += "*Empresa:* " + empresa + "%0A";
  mensaje += "*Ciudad:* " + ciudad + "%0A";
  mensaje += "*Sector:* " + sector + "%0A";
  mensaje += "*Fecha deseada:* " + fecha + "%0A";
  mensaje += "*Hora aproximada:* " + hora + "%0A";

  const url = `https://wa.me/${WA_NUMBER}?text=${mensaje}`;
  window.open(url, "_blank");

  return false;
}
