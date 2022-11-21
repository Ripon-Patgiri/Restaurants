let content = document.getElementById('content');

function displayContact() {
  content.innerHTML = '';
  let mainLine = document.createElement("p");
  mainLine.innerText = "Contact Me Here";
  let subLine = document.createElement("p");
  subLine.innerText = "7002758935";
  content.appendChild(mainLine);
  content.appendChild(subLine);
}

export  { displayContact};
