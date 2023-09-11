window.addEventListener("load", () => {
  let numberOfPlayers = document.querySelectorAll(".player");
  let cards = document.querySelector(".cards");
  let words = [
    "Submarine",
    "Grandma",
    "School",
    "Umbrella",
    "Bus",
    "Bracelet",
    "Astronaut",
    "Assassin",
    "Spy",
    "Computer",
    "Speaker",
    "Sea",
    "Europe",
    "Sun",
    "Waterfall",
    "Lollipop",
    "Sandwich",
    "Shirt",
    "Fishes",
    "Whale",
  ];
  let mrwhitewords = [
    "SpaceShip",
    "Grandpa",
    "Kindergarden",
    "Coat",
    "Car",
    "Earings",
    "Diver",
    "Spy",
    "Cop",
    "Monitor",
    "Microphone",
    "Pool",
    "America",
    "Moon",
    "River",
    "Gum",
    "Hamburger",
    "Pants",
    "Fisherman",
    "Shark",
  ];
  let inputname;
  let randomnum;
  let randomnum2;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const addcards = () => {
    for (let num of numberOfPlayers) {
      num.addEventListener("click", () => {
        randomnum2 = getRandomInt(0, num.innerHTML);
        console.log(randomnum2);
        for (let i = 0; i < num.innerHTML; i++) {
          let card = document.createElement("div");
          card.className = "card";
          card.innerHTML = "?";
          cards.appendChild(card);
        }
        placewords();
      });
    }
  };
  const changeScale = () => {
    let scale = document.querySelector(".peoplescale");
    let secondscale = document.querySelector(".secondscale>p");
    for (let num of numberOfPlayers) {
      num.addEventListener("click", () => {
        scale.style.display = "none";
        secondscale.style.display = "block";
      });
      secondscale.addEventListener("click", () => {
        scale.style.display = "flex";
        secondscale.style.display = "none";
        let existingCards = document.querySelectorAll(".card");
        for (let existingCard of existingCards) {
          existingCard.remove();
        }
      });
    }
  };
  const placewords = () => {
    let existingCards = document.querySelectorAll(".card");
    randomnum = getRandomInt(0, words.length);
    for (let i = 0; i < existingCards.length; i++) {
      existingCards[i].addEventListener("click", () => {
        if (existingCards[i].innerHTML !== "?") {
          return;
        } else if (i === randomnum2) {
          let shadow = document.createElement("div");
          let okbtn = document.createElement("button");
          okbtn.className = "okbtn";
          okbtn.innerHTML = "OK";
          shadow.className = "shadow";
          shadow.innerHTML = mrwhitewords[randomnum];
          document.body.appendChild(shadow);
          shadow.appendChild(okbtn);
          okbtn.addEventListener("click", () => {
            shadow.innerHTML = `<input class="inputname" placeholder="Your Name" type="text">`;
            let okbtn2 = document.createElement("button");
            okbtn2.className = "okbtn";
            shadow.appendChild(okbtn2);
            okbtn2.innerHTML = "OK";
            okbtn2.addEventListener("click", () => {
              inputname = document.querySelector(".inputname");
              if (inputname.value) {
                existingCards[i].innerHTML = inputname.value;
                document.body.removeChild(shadow);
              }
            });
          });
        } else {
          let shadow = document.createElement("div");
          let okbtn = document.createElement("button");
          okbtn.className = "okbtn";
          okbtn.innerHTML = "OK";
          shadow.className = "shadow";
          shadow.innerHTML = words[randomnum];
          document.body.appendChild(shadow);
          shadow.appendChild(okbtn);
          okbtn.addEventListener("click", () => {
            shadow.innerHTML = `<input class="inputname" placeholder="Your Name" type="text">`;
            let okbtn2 = document.createElement("button");
            okbtn2.className = "okbtn";
            shadow.appendChild(okbtn2);
            okbtn2.innerHTML = "OK";
            okbtn2.addEventListener("click", () => {
              inputname = document.querySelector(".inputname");
              if (inputname.value) {
                existingCards[i].innerHTML = inputname.value;
                document.body.removeChild(shadow);
              }
              startgamebtn();
            });
          });
        }
      });
    }
  };
  const startgamebtn = () => {
    let allcards = document.querySelectorAll(".card");
    let startbtn = document.querySelector(".startgame");
    let allCardsFilled = true;

    for (let card of allcards) {
      if (card.innerHTML === "?") {
        allCardsFilled = false;
        break;
      }
    }

    if (allCardsFilled) {
      startbtn.style.display = "flex";
    } else {
      startbtn.style.display = "none";
    }
  };
  const startgame = () => {
    let startbtn = document.querySelector(".startbtn");
    startbtn.addEventListener("click", (e) => {
      e.preventDefault();
      let startgame = document.querySelector(".startgame");
      startgame.style.display = "none";
      let allcards = document.querySelectorAll(".card");

      for (let i = 0; i < allcards.length; i++) {
        allcards[i].addEventListener("click", () => {
          if (i == randomnum2) {
            let shadow = document.createElement("div");
            let okbtn = document.createElement("button");
            okbtn.className = "okbtn";
            okbtn.innerHTML = "OK";
            shadow.className = "shadow";
            shadow.innerHTML = allcards[i].innerHTML + "</br> " + "Is Mr White";
            document.body.appendChild(shadow);
            shadow.appendChild(okbtn);
            okbtn.addEventListener("click", () => {
              window.location.reload();
            });
          } else {
            let shadow = document.createElement("div");
            let okbtn = document.createElement("button");
            okbtn.className = "okbtn";
            okbtn.innerHTML = "OK";
            shadow.className = "shadow";
            shadow.innerHTML = allcards[i].innerHTML + " " + "Is Not Mr White";
            document.body.appendChild(shadow);
            shadow.appendChild(okbtn);
            okbtn.addEventListener("click", () => {
              allcards[i].style.opacity = "0.3";
              document.body.removeChild(shadow);
            });
          }
        });
      }
    });
  };
  addcards();
  changeScale();
  startgame();
});
