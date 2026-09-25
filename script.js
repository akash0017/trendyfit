// FINAL JS - With Photo
function orderOnWhatsApp(btn) {
  let card = btn.closest('.product-card');
  let name = card.querySelector('h3').innerText;
  let price = card.querySelector('.price').innerText;
  let img = card.querySelector('img').src;
  let page = window.location.pathname.split("/").pop();
  let phone = "916295627939";
  let message = `Hi TrendyFit Pandaveswar!%0A%0A*I want this:*%0A*Product:* ${name}%0A*Price:* ${price}%0A*Page:* ${page}%0A*Photo:* ${img}%0A%0AIs this size available?`;
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
