const imgGallery = document.querySelectorAll(".gallery-item");
const lightBox = document.querySelector(".lightbox");
const boxImg = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

imgGallery.forEach((img) => {
  img.addEventListener("click", () => {
    lightBox.style.display = "flex";
    lightBox.style.justifyContent = "center";
    const srcCurr = img.src;
    const srcNew = srcCurr.replace("-thumbnail", "");
    boxImg.src = srcNew;
  });
});

closeBtn.addEventListener("click", () => {
  lightBox.style.display = "none";
});

lightBox.addEventListener("click", () => {
  lightBox.style.display = "none";
});
