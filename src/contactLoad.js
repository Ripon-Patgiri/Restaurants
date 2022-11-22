let content = document.getElementById('content');
let homeBtn = document.getElementById('homeBtn');
let menuBtn = document.getElementById('menuBtn');
let contactBtn = document.getElementById('contactBtn');


function displayContact() {
  content.innerHTML = '';
  homeBtn.classList.remove('BtnStyle');
  menuBtn.classList.remove('BtnStyle');
  contactBtn.classList.add('BtnStyle');
  let mainLine = document.createElement("p");
  mainLine.innerText = "Contact Me Here";
  let subLine = document.createElement("p");
  subLine.innerText = "7002758935";
  content.appendChild(mainLine);
  content.appendChild(subLine);
}

export  { displayContact};
