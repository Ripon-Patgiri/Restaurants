let content = document.getElementById('content');
let homeBtn = document.getElementById('homeBtn');
let menuBtn = document.getElementById('menuBtn');
let contactBtn = document.getElementById('contactBtn');

function displayMenu() {
  content.innerHTML = '';
  homeBtn.classList.remove('BtnStyle');
  menuBtn.classList.add('BtnStyle');
  contactBtn.classList.remove('BtnStyle');
  let mainLine = document.createElement("p");
  mainLine.innerText = "This is menu Page";
  let subLine = document.createElement("p");
  subLine.innerText = "Menu Page has been Created";
  content.appendChild(mainLine);
  content.appendChild(subLine);
}

export  { displayMenu };
