const weddingDate = new Date("2026-09-20T20:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const countdown = document.getElementById("countdown");

  if (countdown) {
    countdown.innerHTML =
      "⏳ " + days + " ڕۆژ و " + hours + " کاتژمێر ماوە";
  }
}, 1000);
