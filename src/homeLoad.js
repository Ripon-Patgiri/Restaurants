let content = document.getElementById('content');

function displayHome() {
  content.innerHTML = '';
  let mainLine = document.createElement("p");
  mainLine.innerText = "Enjoy Traditional Assamese Dish";
  let subLine = document.createElement("p");
  subLine.innerText = "Picture of Stereotypical Assamese Dish";
  content.appendChild(mainLine);
  content.appendChild(subLine);
}

export  { displayHome};
