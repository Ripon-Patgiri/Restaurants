import mapImag from './map.jpg';

let content = document.getElementById('content');
let homeBtn = document.getElementById('homeBtn');
let menuBtn = document.getElementById('menuBtn');
let contactBtn = document.getElementById('contactBtn');


function displayContact() {
  content.innerHTML = '';
  homeBtn.classList.remove('BtnStyle');
  menuBtn.classList.remove('BtnStyle');
  contactBtn.classList.add('BtnStyle');
  const subcontainer = document.createElement('div');
  subcontainer.classList.add('subcontainer');
  let mainLine = document.createElement("p");
  mainLine.innerText = "Contact Here";
  mainLine.style.fontSize = '24px';
  let subLine = document.createElement("p");
  subLine.innerText = "7002758935";
  subLine.style.fontSize = '20px';
  let mapImg = document.createElement('img');
  mapImg.src = mapImag;
  mapImg.classList.add('mapImg');
  subcontainer.appendChild(mapImg);
  subcontainer.appendChild(mainLine);
  subcontainer.appendChild(subLine);
  content.appendChild(subcontainer);
}

export  { displayContact};
