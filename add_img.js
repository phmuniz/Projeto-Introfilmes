const inputFile = document.querySelector(".picture__input");
const pictureImage = document.querySelector(".picture__image");
const mainImage = document.getElementById('film5');
const pictureImageTxt = "Insira uma capa";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");
      
      const img_copy = document.createElement("img");
      img_copy.src = readerTarget.result;
      img_copy.classList.add("picture__img");

      pictureImage.innerHTML = "";
      mainImage.innerHTML = "";
      mainImage.appendChild(img_copy);
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
    mainImage.innerHTML = "";
  }
});