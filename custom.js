
const modal = document.getElementById("myModal");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const body = document.querySelector("body");
const span = document.getElementsByClassName("close")[0];
const root = document.getElementsByClassName('modal')[0];

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflow = "hidden";
}

span.onclick = function() { 
  modal.style.display = "none";
  body.style.overflow = "auto";
}

root.onclick = function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
};
