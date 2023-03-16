class Dice {
    constructor(name, imagePath) {
      this.name = name;
      this.imagePath = imagePath;
      this.locked = false;
      this.currentFace = 1;
    }
  
    roll() {
      if (!this.locked) {
        this.currentFace = Math.floor(Math.random() * 6) + 1;
      }
    }
  
    toggleLock() {
      this.locked = !this.locked;
    }
  }

const diceArray = [];

for (let i = 1; i <= 7; i++) {

    // if (i < 5) {
    //     const dice = new Dice(`Dice${i}`, "./Dice/house/");
    //     diceArray.push(dice);
    // };
    // if (i === 5) {
    //     const dice = new Dice(`Dice${i}`, "./Dice/kanley/");
    //     diceArray.push(dice);
    // };
    // if (i === 6) {
    //     const dice = new Dice(`Dice${i}`, "./Dice/spice/");
    //     diceArray.push(dice);
    // };
    // if (i === 7) {
    //     const dice = new Dice(`Dice${i}`, "./Dice/region/");
    //     diceArray.push(dice);
    // };
  
    const dice = new Dice(`Dice${i}`, "./dice/house/");
    diceArray.push(dice);
    const diceElement = document.getElementById(`dice${i}`);
    if (i === 5){
        dice.imagePath = "./dice/kanley/"
    }
    if (i === 6){
        dice.imagePath = "./dice/spice/"
    }
    if (i === 7){
        dice.imagePath = "./dice/region/"
    }
    diceElement.style.backgroundImage = `url(${dice.imagePath}1.png)`;
    diceElement.addEventListener("click", () => {
    dice.toggleLock();
    diceElement.classList.toggle("locked");
    const diceContainer = diceElement.parentElement;
    diceContainer.classList.toggle("locked", dice.locked);
  });
}

// for (let i = 5; i <= 5; i++) {  
//     const dice = new Dice(`Dice${i}`, "./Dice/kanley/");
//     diceArray.push(dice);
    
//     const diceElement = document.getElementById(`dice${i}`);
//     diceElement.style.backgroundImage = `url(${dice.imagePath}1.png)`;

//     diceElement.addEventListener("click", () => {
//     dice.toggleLock();
//     diceElement.classList.toggle("locked");
//     const diceContainer = diceElement.parentElement;
//     diceContainer.classList.toggle("locked", dice.locked);
//   });
// }

// for (let i = 6; i <= 6; i++) {  
//     const dice = new Dice(`Dice${i}`, "./Dice/spice/");
//     diceArray.push(dice);
    
//     const diceElement = document.getElementById(`dice${i}`);
//     diceElement.style.backgroundImage = `url(${dice.imagePath}1.png)`;

//     diceElement.addEventListener("click", () => {
//     dice.toggleLock();
//     diceElement.classList.toggle("locked");
//     const diceContainer = diceElement.parentElement;
//     diceContainer.classList.toggle("locked", dice.locked);
//   });
// }



function rollDice() {
    diceArray.forEach((dice) => {
      if (!dice.locked) {
        setTimeout(() => {
          dice.roll();
          const diceElement = document.getElementById(dice.name.toLowerCase());
          diceElement.style.backgroundImage = `url(${dice.imagePath}${dice.currentFace}.png)`;
        }, 200 * Math.random()); // add a delay of up to 500ms for each dice roll
      }
    });
  }



  const rerollButton = document.getElementById("reroll-button");
  rerollButton.addEventListener("click", () => {
    rollDice();
    document.body.style.backgroundColor = "#007bff";
    setTimeout(() => {
      const intervalId = setInterval(() => {
        const backgroundColor = document.body.style.backgroundColor;
        if (backgroundColor === "rgb(0, 123, 255)") {
          document.body.style.backgroundColor = "#333";
          clearInterval(intervalId);
        }// else {
        //   const rgb = backgroundColor.match(/\d+/g);
        //   const newColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2] - 5})`;
        //   document.body.style.backgroundColor = newColor;
        // }
      }, 10);
    }, 350);
  });


  //other Ideas

  //animate the dice roll to show random faces

  // function rollDice() {
  
//     // roll each dice
//     for (let i = 0; i < diceArray.length; i++) {
//       let dice = diceArray[i];
//       if (!dice.locked) {
//         let face = dice.currentFace;
//         for (let j = 0; j < 5; j++) {
//           setTimeout(function() {
//             face = Math.floor(Math.random() * 6) + 1;
//             dice.imageElement.src = dice.path + dice.name + face + ".png";
//           }, j * 100);
//         }
//         setTimeout(function() {
//           dice.currentFace = face;
//         }, 500);
//       }
//     }
//   }


//create elements based on array
// const diceContainer = document.getElementById("dice-container");

// // loop through the dice array and create a div element for each dice
// diceArray.forEach(dice => {
//     console.log(dice.name)
// 	const diceElement = document.createElement("div");
// 	diceElement.className = "dice";
//     diceElement.id = `dice${dice.indexOf()}`;
	
// 	diceElement.addEventListener("click", () => {
//         dice.toggleLock();
//         diceElement.classList.toggle("locked");
//         const diceContainer = diceElement.parentElement;
//         diceContainer.classList.toggle("locked", dice.locked);
//     });
	
// 	diceContainer.appendChild(diceElement);
// });





//add colorfadeing to the background
//   const rerollButton = document.getElementById("reroll-button");
//   rerollButton.addEventListener("click", () => {
//     rollDice();
//     document.body.style.backgroundColor = "#007bff";
//     setTimeout(() => {
//       const intervalId = setInterval(() => {
//         const backgroundColor = document.body.style.backgroundColor;
//         if (backgroundColor === "rgb(0, 123, 255)") {
//           document.body.style.backgroundColor = "#333";
//           clearInterval(intervalId);
//         } else {
//           const rgb = backgroundColor.match(/\d+/g);
//           const newColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2] - 5})`;
//           document.body.style.backgroundColor = newColor;
//         }
//       }, 10);
//     }, 500);
//   });