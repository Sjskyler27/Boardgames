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
  diceArray.forEach((dice) => {
    if (dice.locked) {
      dice.toggleLock();
      const diceElement = document.getElementById(dice.name.toLowerCase());
      diceElement.classList.remove("locked");
          // const diceContainer = diceElement.parentElement;
          // diceContainer.classList.remove("locked");
      }
    
  });
});
      
/**************************
 * MAIN
 ***************************/
    
// set up an array to store the dice
const diceArray = [];

// grab the container element
const diceContainer = document.getElementById('dicecontainer');

// fetch the dice data from a JSON file
fetch('./dice/dune.json')
  .then(response => response.json())
  .then(data => {
    // create dice elements based on the dice data
    data.forEach(({ type, count }) => {

      for (let i = 1; i <= count; i++) {
        const dice = new Dice(`${type}${i}`, `./dice/${type}/`);
        diceArray.push(dice);

        // create the dice element and add it to the container
        const diceElement = document.createElement('div');
        diceElement.className = 'dice';
        diceElement.id = `${type}${i}`;
        diceElement.style.backgroundImage = `url(./dice/${type}/1.png)`;
        diceContainer.appendChild(diceElement);

        // add a listener for click on each dice.
        diceElement.addEventListener('click', () => {
          dice.toggleLock();
          diceElement.classList.toggle('locked');
          // diceContainer.classList.toggle('locked', dice.locked);
        });
      }

    });
  })
  .catch(error => {
    console.error('Error fetching dice data:', error);
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