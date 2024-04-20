// Lazy Loading
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery img");
  const options = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.getAttribute("data-src");
        image.src = src;
        imageObserver.unobserve(image);
      }
    });
  }, options);

  images.forEach((image) => {
    imageObserver.observe(image);
  });
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.getAttribute("data-src");
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
