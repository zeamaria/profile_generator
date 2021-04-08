
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (one) => {
  // recursive call
  rl.question('What\'s your age?', (two)=> {
    
    rl.question('What do you listen to while doing that?', (three) => {

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.', (four) => {

        rl.question('What\'s your favourite thing to eat for that meal?', (five) => {

          rl.question('which sport is your fav?', (six) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (seven) => {
              
              console.log(`The survey persons name is ${one} and that person likes to ${two}, and ${three} and ${four}, and ${five}, and ${six}, and ${seven}`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});
  
  
  




