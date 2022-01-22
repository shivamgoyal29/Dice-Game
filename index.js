randomvariable1 = Math.floor(Math.random() * 6) + 1;
randomvariable2 = Math.floor(Math.random() * 6) + 1;

name1 = "/images/dice" + randomvariable1 + ".png";
name2 = "/images/dice" + randomvariable2 + ".png";
document.querySelector(".img1").setAttribute("src", name1);
document.querySelector(".img2").setAttribute("src", name2);

if (randomvariable1 < randomvariable2) {
  document.querySelector("h1").textContent = "🚩 Player 2 Wins";
} else if (randomvariable2 < randomvariable1) {
  document.querySelector("h1").textContent = "Player 1 Wins 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
