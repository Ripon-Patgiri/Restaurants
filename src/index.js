import {displayHome} from "./homeLoad.js";
import { displayMenu} from "./menuLoad.js";
import { displayContact} from "./contactLoad.js";

// Extracting Buttons into Variables
let homeBtn = document.getElementById('homeBtn');
let menuBtn = document.getElementById('menuBtn');
let contactBtn = document.getElementById('contactBtn');

// let content = document.getElementById('content');

displayHome();

homeBtn.addEventListener('click', displayHome);
menuBtn.addEventListener('click', displayMenu);
contactBtn.addEventListener('click',displayContact);



