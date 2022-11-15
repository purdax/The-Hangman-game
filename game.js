let attempts = 9;
let wrong_letter = 0;
let underscore = [];
let guessed_letters = 0;

function generateButtons() {
let hide = document.getElementById("hide");
    if (hide.style.display === "none") {
        hide.style.display = "block";
      } else {
        hide.style.display = "none";
      }
let word = document.getElementById("correct_word").value;
let split_letters = word.split("");
if (split_letters.length < 1) {
  alert("Insert at least one letter");
  restartGame();
}
 let htmlLetters = '';
 let letter;
 for (let i = 97; i <= 122; ++i) {
      letter = String.fromCharCode(i);
      htmlLetters += '<button class="btn btn-lg btn-secondary m-1"  onclick="checkLetter(\'' + letter + '\');">' + letter + '</button>'
  }
  document.getElementById('keyboard').innerHTML = htmlLetters;
  for (let i = 0; i < split_letters.length; ++i) {
       underscore[i] = " __ ";
       document.getElementById('your_word').innerHTML += underscore[i];
  }
}

function checkLetter(x) { 
let word = document.getElementById("correct_word").value;
let split_letters = word.split(""); // {r, a, p, i, d}
  if (!split_letters.includes(x)) {
    ++wrong_letter;
  const canvas = document.getElementById("myCanvas");
  const context = canvas.getContext("2d");
  if (wrong_letter == 1) {
     context.strokeStyle = '#344';
      context.lineWidth = 10; 
      context.beginPath();
      context.moveTo(175, 225);
      context.lineTo(5, 225);
      context.moveTo(40, 225);
      context.lineTo(25, 5);
      context.lineTo(100, 5);
      context.lineTo(100, 25);
      context.stroke();
  }

  if (wrong_letter == 2) {
    context.lineWidth = 5;
      context.beginPath();
      context.arc(100, 50, 25, 0, Math.PI*2, true);
      context.closePath();
      context.stroke();
  }

  if (wrong_letter == 3) {
      context.beginPath();
      context.moveTo(100, 75);
      context.lineTo(100, 140);
      context.stroke();
  }

  if (wrong_letter == 4) {
      context.beginPath();
      context.moveTo(100, 85);
      context.lineTo(60, 100);
      context.stroke();
  }

  if (wrong_letter == 5) {
      context.beginPath();
      context.moveTo(100, 85);
      context.lineTo(140, 100);
      context.stroke();
  }

  if(wrong_letter == 6) {
    context.beginPath();
    context.moveTo(100, 140);
    context.lineTo(80, 190);
    context.stroke();
  }

  if (wrong_letter == 7) {
      context.beginPath();
      context.moveTo(82, 190);
      context.lineTo(70, 185);
      context.stroke();
  }

  if (wrong_letter == 8) {
      context.beginPath();
      context.moveTo(100, 140);
      context.lineTo(125, 190);
      context.stroke();
  }

  if (wrong_letter == 9) {
      context.beginPath();
      context.moveTo(122, 190);
      context.lineTo(135, 185);
      context.stroke();
  }
 } else {
  for (let i = 0; i < split_letters.length; ++i) {
    if (underscore[i] == x) {
      alert("You already guessed this letter! Try another one.");
      i = split_letters.length + 1;
    }
    if (split_letters[i] == x && underscore[i] != x) {
       underscore[i] = split_letters[i];
       split_letters[i] = '!';
       ++guessed_letters;
    }
  }
 }
 document.getElementById('your_word').innerHTML = underscore.join(' ');
 if (guessed_letters == split_letters.length) {
   winnerButton();
 }  else if (wrong_letter == attempts) {
   loserButton();
 }
}

function winnerButton() {
  document.getElementById("notifications").innerHTML = '<a class="notification"><span><img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/null/external-clapping-virus-icongeek26-outline-icongeek26.png"/> CONGRATULATIONS!</span></a>';

 document.getElementById("restart_game").innerHTML = '<button type="button" onclick="restartGame()" ><img src="https://img.icons8.com/ios-filled/50/null/restart--v1.png"/> Restart</button>';
}

function loserButton() {
   document.getElementById("notifications").innerHTML = '<a class="notification"><span><img src="https://img.icons8.com/material-outlined/24/null/skull.png"/>SORRY! TRY AGAIN!</span></a>';

   document.getElementById("restart_game").innerHTML = '<button type="button" onclick="restartGame()" ><img src="https://img.icons8.com/ios-filled/50/null/restart--v1.png"/> Restart</button>';
}

function restartGame() {
  location.reload();
}
