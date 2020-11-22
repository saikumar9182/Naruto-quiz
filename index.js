var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log("Answers: a b b a a c a b a a");
var username= readlineSync.question(chalk.blue.bold('Please, Enter your name '));

console.log(chalk.rgb(255,136,0).bold("welcome "+username+" This is a quiz on anime Naruto"));
console.log("------------------------------");
var score= 0;

function play2(questionu){
  console.log(chalk.cyan.bold(questionu.question));
  console.log(chalk.cyan.bold("a: "+questionu.a));
  console.log(chalk.cyan.bold("b: "+questionu.b));
  console.log(chalk.cyan.bold("c: "+questionu.c));
  // console.log("Choose an option ");
  var ans= readlineSync.question(chalk.bold("Choose an option "));
  
  if(questionu.a==questionu.answer&&ans=='a')
  {
    score= score + 1;
    console.log(chalk.green.bold("Right!"));
    console.log(chalk.yellow.underline.bold("Score:"+score));

  }
  else if(questionu.b==questionu.answer&&ans=='b')
  {
    score= score + 1;
    console.log(chalk.green.bold("Right!"));
    console.log(chalk.yellow.underline.bold("Score:"+score));
    
    

  }
  else if(questionu.c==questionu.answer&&ans=='c')
  {
    score= score + 1;
    console.log(chalk.green.bold("Right!"));
    console.log(chalk.yellow.underline.bold("Score:"+score));

  }

  else{
    console.log(chalk.red.bold("Wrong"));
    console.log(chalk.yellow.underline.bold("Score:"+score));
  }
}
function play(questionu){
  console.log(chalk.cyan.bold(questionu.question));
  console.log(chalk.cyan.bold("a: "+questionu.a));
  console.log(chalk.cyan.bold("b: "+questionu.b));
  console.log(chalk.cyan.bold("c: "+questionu.c));
  // console.log("Choose an option ");
  var ans= readlineSync.question(chalk.bold("Choose an option "));
  
  if(questionu.a==questionu.answer&&ans=='a')
  {
    score= score + 1;
    console.log(chalk.green.bold("Right!"));
    console.log(chalk.yellow.underline.bold("Score:"+score));

  }
  else if(questionu.b==questionu.answer&&ans=='b')
  {
    score= score + 1;
    console.log(chalk.green.bold("Right!"));
    console.log(chalk.yellow.underline.bold("Score:"+score));
  }
  else if(questionu.c==questionu.answer&&ans=='c')
  {
    score= score + 1;
    console.log(chalk.green.bold("Right!"));
    console.log(chalk.yellow.underline.bold("Score:"+score));
  }

  else{
    console.log(chalk.red.bold("Wrong"));
    console.log(chalk.yellow.underline.bold("Score:"+score));
  }
}
var scores=[
  {
    Name: "Mahendra",
    Score:7,
  },
  {
    Name:'Mani',
    Score:8,
  },
  {
    Name:'Sai Kumar',
    Score:9,
  }

]
var questions=[
  {
    question:"Naruto is ninja of which village? ",
    a:"Leaf",
    b:"Hidden mist",
    c:"Fire",
    answer:"Leaf"
  },
  {
    question:"Who among the following is sensei of Naruto ",
    a:"Sasuke",
    b:"Kakashi",
    c:"Sakura",
    answer:"Kakashi"
  },
  {
    question:"How many tails does demon fox of Naruto have ",
    a:"four",
    b:"Nine",
    c:"Seven",
    answer:"Nine"
  },
  {
    question:"Who is brother of Sasuke ",
    a:"Itachi",
    b:"Kakashi",
    c:"Hokage",
    answer:"Itachi"
  },
  {
    question:"Which among the following is jutsu of Sasuke ",
    a:"Sharingan",
    b:"Shadow clone",
    c:"Earth style",
    answer:"Sharingan"
  }

]
var questions2=[
  {
    question:"What is the name of fifth hokage? ",
    a:"Ziraiya",
    b:"Asuma",
    c:"Tsunade",
    answer:"Tsunade"
  },
  {
    question:"Who among the options is a medical ninja? ",
    a:"Sakura",
    b:"Kakashi",
    c:"Kurenai",
    answer:"Sakura"
  },
  {
    question:"Who among the options is very lazy ",
    a:"Kiba",
    b:"Shikamaru",
    c:"Orochimaru",
    answer:"Shikamaru"
  },
  {
    question:"Which among is the clan of sasuke? ",
    a:"Utchiha",
    b:"Fire",
    c:"Mist",
    answer:"Utchiha"
  },
  {
    question:"Which among the following is jutsu of Kakashi ",
    a:"Chidori",
    b:"Shadow clone",
    c:"Earth style",
    answer:"Chidori"
  }

]
// var questionp= questions[0].a;
//  console.log(questionp);
for(var i=0;i<questions.length;i++)
{
  play(questions[i]);
  console.log("--------------------------------");
}

console.log(chalk.green.bold("Total score is "+score));
console.log("-------------");

if(score<4)
{
  console.log(chalk.bold("You do not advance to level 2 as your score is less than 4"));
}
if(score>=4)
{
  console.log(chalk.bold("Congrats! you advanced to level two"));
  console.log("--------------------------------");


for(var i=0;i<questions2.length;i++)
{
  play2(questions2[i]);
  console.log("--------------------------------");
}
}
console.log(chalk.bold("Your score after level two: "+score));
console.log("----------------------");
if(score==8)
{
  console.log(scores[0]);
  console.log("Congrats! you beat Mahendra ");
}
if(score==9)
{
  console.log(scores[1]);
  console.log("Congrats! you beat Manihrudhay ");
}
if(score==10)
{
  console.log(scores[2]);
  console.log(chalk.bold("Congrats! you beat Sai kumar and you are the top scorer now "));
}










