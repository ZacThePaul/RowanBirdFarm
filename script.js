function updateYear() {
  const currentYear = new Date().getFullYear();
  document.querySelector(".footer-year").innerHTML = currentYear;
}

document.addEventListener("DOMContentLoaded", updateYear);

const toggle = document.querySelector('.menu-toggle');
const close = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', function() {
  menu.classList.toggle("menu-open");
  menu.classList.toggle("menu-closed");
});

close.addEventListener('click', function() {
  menu.classList.remove("menu-open");
  menu.classList.add("menu-closed");
});

// Check if video can play, and if not, display a fallback image
const video = document.querySelector(".bg-video");

if (video.canPlayType) {
  video.play();
} else {
  video.style.display = "none";
  document.body.style.background = "url('path/to/fallback-image.jpg')";
}
