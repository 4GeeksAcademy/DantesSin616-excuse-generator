import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomValue(array){  
  return Math.floor(Math.random() * array.length);
}

function excuseGenerator(){
  let randomWho = who[getRandomValue(who)];
  let randomAction = action[getRandomValue(action)];
  let randomWhat = what[getRandomValue(what)];
  let randomWhen = when[getRandomValue(when)];
  
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

