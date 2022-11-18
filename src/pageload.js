let content = document.getElementById("content");
let button = document.getElementById("button");
console.log("Outside Function");
let header = document.createElement("header");
header.className = "header";
let title = document.createElement("h1");
title.className = "title";
title.innerText = "TRIPTIRE EKHAZ";

button.addEventListener("click", () => {
  console.log("Function Working");
  header.appendChild(title);
  content.appendChild(header);
});
