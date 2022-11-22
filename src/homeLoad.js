const content = document.getElementById('content');

function displayHome() {
  content.innerHTML = '';
  const subcontainer = document.createElement('div');
  subcontainer.classList.add('subcontainer');
  let mainLine = document.createElement("p");
  mainLine.innerText = "Enjoy Traditional Assamese Dish";
  let subLine = document.createElement("p");
  subLine.innerText = "Picture of Stereotypical Assamese Dish";
  subcontainer.appendChild(mainLine);
  subcontainer.appendChild(subLine);
  content.appendChild(subcontainer);
}

export  { displayHome};
