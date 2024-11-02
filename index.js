// 1-------------
let btn = document.getElementById("btn");
let count = 0;

btn.addEventListener("click", function () {
  const newButton = document.createElement("button");
  newButton.innerText = `Button ${count + 1}`;
  document.getElementById("button__container").appendChild(newButton);
  count++;
});

// 2-------------
document.addEventListener("keydown", function (event) {
  const div = document.getElementById("color");
  switch (event.key.toLowerCase()) {
    case "q":
      div.style.backgroundColor = "red";
      break;
    case "d":
      div.style.backgroundColor = "black";
      break;
    case "b":
      div.style.backgroundColor = "blue";
      break;
    case "s":
      div.style.backgroundColor = "yellow";
      break;
  }
});

// 3-------------

document.getElementById("randomBtn").addEventListener("click", function () {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const div = document.getElementById("randomNumber");
  div.innerText = randomNum;

  switch (randomNum) {
    case 1:
      div.style.color = "red";
      break;
    case 2:
      div.style.color = "green";
      break;
    case 3:
      div.style.color = "blue";
      break;
    case 4:
      div.style.color = "yellow";
      break;
    case 5:
      div.style.color = "orange";
      break;
    case 6:
      div.style.color = "purple";
      break;
    case 7:
      div.style.color = "pink";
      break;
    case 8:
      div.style.color = "cyan";
      break;
    case 9:
      div.style.color = "magenta";
      break;
    case 10:
      div.style.color = "brown";
      break;
    case 11:
      div.style.color = "lime";
      break;
    case 12:
      div.style.color = "navy";
      break;
    case 13:
      div.style.color = "olive";
      break;
    case 14:
      div.style.color = "teal";
      break;
    case 15:
      div.style.color = "coral";
      break;
    case 16:
      div.style.color = "lightblue";
      break;
    case 17:
      div.style.color = "salmon";
      break;
    case 18:
      div.style.color = "khaki";
      break;
    case 19:
      div.style.color = "lavender";
      break;
    case 20:
      div.style.color = "gold";
      break;
    case 21:
      div.style.color = "sienna";
      break;
    case 22:
      div.style.color = "peru";
      break;
    case 23:
      div.style.color = "powderblue";
      break;
    case 24:
      div.style.color = "plum";
      break;
    case 25:
      div.style.color = "lightgreen";
      break;
    case 26:
      div.style.color = "crimson";
      break;
    case 27:
      div.style.color = "darkorange";
      break;
    case 28:
      div.style.color = "mediumvioletred";
      break;
    case 29:
      div.style.color = "lightgray";
      break;
    case 30:
      div.style.color = "darkviolet";
      break;
    case 31:
      div.style.color = "chartreuse";
      break;
    case 32:
      div.style.color = "khaki";
      break;
    case 33:
      div.style.color = "darkslategray";
      break;
    case 34:
      div.style.color = "lightcoral";
      break;
    case 35:
      div.style.color = "lightcyan";
      break;
    case 36:
      div.style.color = "indigo";
      break;
    case 37:
      div.style.color = "mediumpurple";
      break;
    case 38:
      div.style.color = "orangered";
      break;
    case 39:
      div.style.color = "peachpuff";
      break;
    case 40:
      div.style.color = "tomato";
      break;
    case 41:
      div.style.color = "violet";
      break;
    case 42:
      div.style.color = "wheat";
      break;
    case 43:
      div.style.color = "yellowgreen";
      break;
    case 44:
      div.style.color = "thistle";
      break;
    case 45:
      div.style.color = "rosybrown";
      break;
    case 46:
      div.style.color = "goldenrod";
      break;
    case 47:
      div.style.color = "darkgray";
      break;
    case 48:
      div.style.color = "lightseagreen";
      break;
    case 49:
      div.style.color = "mediumseagreen";
      break;
    case 50:
      div.style.color = "darkkhaki";
      break;
    case 51:
      div.style.color = "forestgreen";
      break;
    case 52:
      div.style.color = "mediumturquoise";
      break;
    case 53:
      div.style.color = "darkorange";
      break;
    case 54:
      div.style.color = "cornflowerblue";
      break;
    case 55:
      div.style.color = "lightsteelblue";
      break;
    case 56:
      div.style.color = "chartreuse";
      break;
    case 57:
      div.style.color = "darkred";
      break;
    case 58:
      div.style.color = "saddlebrown";
      break;
    case 59:
      div.style.color = "sandybrown";
      break;
    case 60:
      div.style.color = "tan";
      break;
    case 61:
      div.style.color = "lavenderblush";
      break;
    case 62:
      div.style.color = "mediumslateblue";
      break;
    case 63:
      div.style.color = "slategray";
      break;
    case 64:
      div.style.color = "mediumaquamarine";
      break;
    case 65:
      div.style.color = "crimson";
      break;
    case 66:
      div.style.color = "mediumblue";
      break;
    case 67:
      div.style.color = "deepskyblue";
      break;
    case 68:
      div.style.color = "darkviolet";
      break;
    case 69:
      div.style.color = "mediumaquamarine";
      break;
    case 70:
      div.style.color = "lightpink";
      break;
    case 71:
      div.style.color = "peachpuff";
      break;
    case 72:
      div.style.color = "darksalmon";
      break;
    case 73:
      div.style.color = "mediumorchid";
      break;
    case 74:
      div.style.color = "palegoldenrod";
      break;
    case 75:
      div.style.color = "powderblue";
      break;
    case 76:
      div.style.color = "springgreen";
      break;
    case 77:
      div.style.color = "seashell";
      break;
    case 78:
      div.style.color = "rosybrown";
      break;
    case 79:
      div.style.color = "khaki";
      break;
    case 80:
      div.style.color = "lavender";
      break;
    case 81:
      div.style.color = "steelblue";
      break;
    case 82:
      div.style.color = "lightgoldenrodyellow";
      break;
    case 83:
      div.style.color = "goldenrod";
      break;
    case 84:
      div.style.color = "tomato";
      break;
    case 85:
      div.style.color = "wheat";
      break;
    case 86:
      div.style.color = "paleturquoise";
      break;
    case 87:
      div.style.color = "mediumvioletred";
      break;
    case 88:
      div.style.color = "plum";
      break;
    case 89:
      div.style.color = "slateblue";
      break;
    case 90:
      div.style.color = "lightsalmon";
      break;
    case 91:
      div.style.color = "darkslateblue";
      break;
    case 92:
      div.style.color = "lightgreen";
      break;
    case 93:
      div.style.color = "plum";
      break;
    case 94:
      div.style.color = "lightgray";
      break;
    case 95:
      div.style.color = "lightsalmon";
      break;
    case 96:
      div.style.color = "skyblue";
      break;
    case 97:
      div.style.color = "darkcyan";
      break;
    case 98:
      div.style.color = "hotpink";
      break;
    case 99:
      div.style.color = "royalblue";
      break;
    case 100:
      div.style.color = "lightslategrey";
      break;
  }
});

// 4-------------

let colors = ["red", "green", "blue", "yellow"];
let index = 0;
let interval;
let isChanging = false;

document
  .getElementById("changeBgBtn")
  .addEventListener("click", function (event) {
    if (isChanging) {
      clearInterval(interval);
      document.body.style.backgroundColor = "white";
      isChanging = false;
    } else {
      interval = setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
      }, 2000);
      isChanging = true;
    }
  });

// 5-------------
let images = [
  "./images/image2.jpg",
  "./images/image3.webp",
  "./images/image4.jpg",
  "./images/image5.jpg",
];
let currentImage = 0;
let slideInterval;

document
  .getElementById("startSlideShow")
  .addEventListener("click", function () {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      document.getElementById("slideImage").src = images[currentImage];

      currentImage = (currentImage + 1) % images.length;
    }, 2000);
  });

// o'yin-------------
const targetNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const message = document.getElementById("message");

  if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
    message.textContent = "1 dan 10 gacha son kiriting.";
    return;
  }

  if (userGuess === targetNumber) {
    message.textContent = "Ura siz topdingiz, yutdingiz!";
  } else if (userGuess < targetNumber) {
    message.textContent =
      "Topomadingiz, men o'ylagan son siz aytgandan kattaroq.";
  } else {
    message.textContent =
      "Topomadingiz, men o'ylagan son siz aytgandan kichikroq.";
  }
}
