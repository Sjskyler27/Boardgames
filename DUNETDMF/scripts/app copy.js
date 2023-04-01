/**************************
 * CREATE DICE CLASS
 ***************************/
class Dice {
    constructor(name, imagePath, description) {
      this.name = name;
      this.imagePath = imagePath;
      this.description = description;
      this.locked = false;
      this.currentFace = 1;
    }
    //assigns a random value
    roll() {
      if (!this.locked) {
        this.currentFace = Math.floor(Math.random() * 6) + 1;
      }
    }
    //allows you to lock the dice
    toggleLock() {
      this.locked = !this.locked;
    }
  }
  
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
    
/**************************
 * add event listeners
 ***************************/
// listen for reroll
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
      }
    }, 10);
  }, 350);
});

//listen for the unlock button to unlock all the dice
const unlockButton = document.getElementById("unlock-button");
unlockButton.addEventListener("click", () => {
  for(let i = 0; i < 7; i++){
      if(diceArray[i].locked){
          diceArray[i].toggleLock();
          console.log('unlock me ')

          const diceElement = document.getElementById(`dice${i+1}`);
          diceElement.classList.remove("locked");
          const diceContainer = diceElement.parentElement;
          diceContainer.classList.remove("locked");
      }
    
  }
});
      
/**************************
 * MAIN
 ***************************/
    
// set up an aarray to store the dice
const diceArray = [];

// upon load add dice to the array using a loop
for (let i = 1; i <= 7; i++) {  
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

    //change the background
    diceElement.style.backgroundImage = `url(${dice.imagePath}1.png)`;

    //add a listen for click on each dice.
    diceElement.addEventListener("click", () => {
    dice.toggleLock();
    diceElement.classList.toggle("locked");
    const diceContainer = diceElement.parentElement;
    diceContainer.classList.toggle("locked", dice.locked);
  });
}










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