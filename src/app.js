/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "Her bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the code", "my computer", "the car", "the keys"];
  let when = [
    "before the class",
    "while I was cooking",
    "during lunch",
    "when I went to bed"
  ];

  let randomNum1 = Math.random() * who.length;
  let randomWho = Math.floor(randomNum1);
  let randomNum2 = Math.random() * action.length;
  let randomAction = Math.floor(randomNum2);
  let randomNum3 = Math.random() * what.length;
  let randomWhat = Math.floor(randomNum3);
  let randomNum4 = Math.random() * when.length;
  let randomWhen = Math.floor(randomNum4);

  let excuse =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];

  document.getElementById("excuse").innerHTML = excuse;
};
