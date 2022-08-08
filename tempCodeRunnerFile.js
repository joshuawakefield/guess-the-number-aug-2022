const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//globals

const iDefaultRangeMin = 0,  
      iDefaultRangeMax = 100;

var iCurrentMin = 0,
    iCurrentMax = 100,
    bQuitPlaying = false;

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });


async function gameLoop() {

 while(!bQuitPlaying){

  bQuitPlaying = false; //reset flag to false to loop continues
  
    switch(mainMenu) {
      
      case 1:
      case 'p':
      case 'P':
        //playerChooses();
        console.log("Player Guesses!");        
        break;

      case 2:
        //computerChooses();
        console.log("Computer Chooses!");        
        break;

      case 3:
        //changeRange(); //call this to change the min and max range and ensure proper min/max.  default 0-100
        console.log("Change Range");
        break;

      case 4:
        console.log("Exit!");
        bQuitPlaying = true; //exit while loop (it was done inverse like this instead of bStillPlaying so only case 4 need modification to bQuitPlaying and not cases 1-3)
        break;

      default:
        //input not recognized, reprint menu and take its input   
      
      } //end switch
            
  } //end main while game loop

  process.exit();
};


  // let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  // console.log('You entered: ' + secretNumber);
  // Now try and complete the program.


async function mainMenu(){
  console.log(``);
  console.log(``);
  console.log(`GUESS A NUMBER `);
  console.log(`==============`);
  console.log(``);
  console.log(`1: (P)layer guesses the computer's secret number`);
  console.log(`2: (C)omputer guesses YOUR secret number`);
  console.log(`3: (S)et Range`);
  console.log('4: E(X)it');
  console.log(``);
  console.log(`> `);

  return (await ask());
};

