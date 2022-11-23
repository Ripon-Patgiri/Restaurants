import immag from "./maindish.jpg";

let content = document.getElementById("content");
let homeBtn = document.getElementById("homeBtn");
let menuBtn = document.getElementById("menuBtn");
let contactBtn = document.getElementById("contactBtn");

function displayMenu() {
  content.innerHTML = "";
  homeBtn.classList.remove("BtnStyle");
  menuBtn.classList.add("BtnStyle");
  contactBtn.classList.remove("BtnStyle");
  const subcontainer = document.createElement("div");
  subcontainer.classList.add("subcontainer");
  const menuSection = document.createElement("div");
  menuSection.classList.add("menuSection");
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");
  let img3 = document.createElement("img");
  let img4 = document.createElement("img");
  let img5 = document.createElement("img");
  let img6 = document.createElement("img");
  img1.src = immag;
  img2.src = immag;
  img3.src = immag;
  img4.src = immag;
  img5.src = immag;
  img6.src = immag;
  img1.classList.add("menuImg");
  img2.classList.add("menuImg");
  img3.classList.add("menuImg");
  img4.classList.add("menuImg");
  img5.classList.add("menuImg");
  img6.classList.add("menuImg");
  menuSection.appendChild(img1);
  menuSection.appendChild(img2);
  menuSection.appendChild(img3);
  menuSection.appendChild(img4);
  menuSection.appendChild(img5);
  menuSection.appendChild(img6);
  subcontainer.appendChild(menuSection);
  content.appendChild(subcontainer);
}

export { displayMenu };
