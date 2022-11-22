import image from './maindish.jpg';

const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

function displayHome() {
  content.innerHTML = "";
  homeBtn.classList.add("BtnStyle");
  menuBtn.classList.remove("BtnStyle");
  contactBtn.classList.remove("BtnStyle");
  const subcontainer = document.createElement("div");
  subcontainer.classList.add("subcontainer");
  let mainLine = document.createElement("p");
  mainLine.innerText = "Enjoy Traditional Assamese Dishes";
  mainLine.classList.add('tagLine');
  let subImg = document.createElement("img");
  subImg.src = image;
  subImg.classList.add('homeImg');
  let bottomLine = document.createElement('p');
  bottomLine.innerText = "Visit us or Order Online !!";
  bottomLine.classList.add('bottomTxt');
  subcontainer.appendChild(mainLine);
  subcontainer.appendChild(subImg);
  subcontainer.appendChild(bottomLine);
  content.appendChild(subcontainer);
}

export { displayHome };
