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











//===========================================================


/*  NOTES

  The above code doesn't work.  I get UNEXPECTED END OF INPUT.
  The code is missing the main logic for the game, but you can
  see how I intend to structure the code.  The reason I was only
  able to get this far is explained below.

  I grabbed the class code from github yet when I ran the code,
  I couldn't figure out why I couldn't read from the terminal.
  It would just sit there so I assumed I was missing some code and
  that that was part of the purpose of the project.  SO I began
  researching node.js and readline and looking at many examples.
  It was all different so I decided to learn from scratch how to
  read input from the user.  I watched some videos and coded along.

  So this code below was from a readline tutorial from "NoobCoder".
  After going through that material, I still could not read from
  the terminal from within Visual Code.  I had no reason to believe
  the external terminal would have acted different so I did not try.
  Incidentally, that would have led me to the answer but I didn't try.
  So when this code below also did not work, I realized the problem
  was global relative to both sets of code, above and below.  So
  I started messing around a little more and finally had a run where
  I selected meny text PRIOR to entering my menu choice.  ONLY at that
  point did the IDE print an error that the terminal was set to
  READ-ONLY.  I discovered this at 11:34PM Sunday evening.  So I
  will take whatever number and fix it up as you mentioned will be
  possible.  I think it was worth it as I will mention in class.
  
  I think what happened was that when I was trying to change the
  IDE to load bash rather than powershell as internal terminal, the
  setting to make the terminal read-only was somehow triggered.  I
  don't remember doing that, but I guess it's possible.  I could have
  hit a key by accident.
  
  So I decided not engage in further code writing until I could read
  from the input, otherwise there would be no to test it anyway.  Also
  learned to budget time for the unexpected even if the problem looks
  easy and I understand it well.  I didn't expect to encounter this at
  all.
  
  Also, I found some REALLY great youtube teachers and I plan on having
  a parallel thing going on, it turns out to be like 45 minutes a night,
  100 days of coding.  SO I definitely learned alot this weekend, and
  I really believe it actually has changed the way I intend to engage
  this course, so all in all, very good weekend despite a ton of
  frustration.  Also, I made the mistake of being embarrased to ask
  for help, which I will not do again.  But I did feel like an idiot.
  WHY ISN'T THIS WORKING?!?!?!?  Pulling my hair out.
  
  It's all good.  Had to happen and has definitely shifted my perspective.
  
  But it's late 4:19am and I need to lay down!!!  Talk to you guys soon!*/





const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
                                    output: process.stdout});

let num1 = Math.floor((Math.random() * 10) +1);  //rand between 0-9, then add 1 for 1-10
let num2 = Math.floor((Math.random() * 10) +1);

let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}`,
(userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    }
    else {
        rl.setPrompt('Incorrect response please try again\n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                rl.close();
            }
            else {
                rl.setPrompt(`Your answer of ${userInput} is wrong\n`);
                rl.prompt();
            })
        })
    }
});

rl.on('close',()=>{
    console.log('Correct!!!!');
});