var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log("Welcome "+userName);
console.log("Lets Start the Peaky quiz");
//question set
var questionSet=[
  {
    q:"What is the official name of the Peaky Blinders’ family business? ",
    a:"Shelby Company Limited"
  },
  {
    q:"In which city did Grace claim to have worked in a pub prior to her arrival in the show?",
    a:"Dublin"
  },
  {
    q:"What is Polly’s surname?",
    a:"Gray"
  },
  {
    q:"In which English city is the show set?",
    a:"Birmingham"
  },
  {
    q:"What is the name of Tommy’s grey race horse in season 2?",
    a:"Grace’s Secret"
  }
];



//Game Function
var score=0;
function game(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(answer==userAnswer)
  {
    console.log("Correct answer");
    score=score+1;
    
  }
  else
  {
    console.log("wrong answer!")
    console.log("Correct answer-> "+answer);
    
  }
  console.log("current score "+score);
    console.log("*******************");
}
for(var i=0;i<questionSet.length;i++)
{
  game(questionSet[i].q,questionSet[i].a);
}
console.log("YOUR FINAL SCORE "+score);
var highScores=[
  {
    user:"Thomas",
    score:0
  },
  {
    user:"John",
    score:1
  }
];
var flag=true;
for(var i=0;i<highScores.length;i++)
{
  if(score<highScores[i].score)
  {
    flag=false;
  }
}
if(flag==true)
{
  console.log("******************");
  console.log("You have made a high Score");
  highScores.push({
    user:userName,
    score:score
  });
  
}
else
{
  console.log("You have not made a high score");
}
console.log("Checkout top scorers")
for(var i=0;i<highScores.length;i++)
{
    console.log(highScores[i].user+" "+highScores[i].score);
}
