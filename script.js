// html query selectors
const gameContainer = document.getElementById("game");

// color array
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    // console.log(index)
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// Divs for Memory Card Game 
//
//



function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");

    newDiv.classList.add(color);
    newDiv.classList.add("card");
    newDiv.addEventListener("click", handleCardClick);
    // newDiv.classList.add = "card"
    gameContainer.append(newDiv);
  }
}

// Divs for Memory Card Game 

// presets
let selectedCards = [];
let isMatching = false;
let contain = [];
let matchCounter = 0;
//



function handleCardClick(e) {
  // if (isMatching || contain.length >= 2) {
  //   // If two cards are already selected or a match is being resolved, do nothing.
  //   return;
  // }
  
   const card = e.target;
  
  if (card.classList.contains("matched") || card.classList.contains("selected") ) {
      return
  }else{
      contain.push(card)
  }
  
 
  
  card.style.backgroundColor = card.classList[0]
  card.classList.add("selected")
  console.log(e.target)
   
  
//   console.log(`${e.target} ${contain}`)
    console.log("you just clicked", card);
    
    
    
    console.log(e.currentTarget)
    
    
    
    if (contain.length === 2) {
      
        // matchCounter++;w
        if (matchCounter >= 5){
          alert("Congratulations!")
          }else {
            console.log(`You have currently ${matchCounter} matches`);
            console.log(`Class List: ${contain[0].classList} & Class List:  ${contain[1].classList}`)
        }
      
      
      
        if (contain[0].classList[0] == contain[1].classList[0]) {
            alert("That's a match!")
            matchCounter++;
            contain.forEach((selection) => {
                selection.classList.remove("selected");
                selection.classList.add("matched");
                contain = [];
                
                }); 
        } else{
            alert("Wrong!")
         contain.forEach((failedChoice) => {
                  setTimeout( () => {
                failedChoice.style.backgroundColor = "#f9f9f9";
                contain = [];
                }, "200");
                failedChoice.classList.remove("selected");
                })
        }
        
        //loop iteration to remove selected class
    }
    // console.log(wipe[0])
}

// when the DOM loads
createDivsForColors(shuffledColors);

