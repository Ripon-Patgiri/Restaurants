let content = document.getElementById('content');

function displayMenu() {
  content.innerHTML = '';
  let mainLine = document.createElement("p");
  mainLine.innerText = "This is menu Page";
  let subLine = document.createElement("p");
  subLine.innerText = "Menu Page has been Created";
  content.appendChild(mainLine);
  content.appendChild(subLine);
}

export  { displayMenu };
