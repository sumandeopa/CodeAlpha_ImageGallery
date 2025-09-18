let currentIndex = 0;
let images = document.querySelectorAll(".gallery .gallery-item");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImg");

function openLightbox(img) {
  lightbox.style.display = "block";
  lightboxImg.src = img.getAttribute('data-src');
  currentIndex = Array.from(images).indexOf(img);
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(step) {
  currentIndex += step;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].getAttribute('data-src');
}
