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
  mainLine.innerText = "Enjoy Traditional Assamese Dish";
  let subImg = document.createElement("img");
  subImg.src = "./Assamese_dish.JPG";
  subcontainer.appendChild(mainLine);
  subcontainer.appendChild(subImg);
  content.appendChild(subcontainer);
}

export { displayHome };
