
const question = document.getElementById("pop");
const options = Array.from(document.getElementsByClassName("choice-option"));
const buttonNext = document.getElementById("buttonNext");
const buttonPrevious = document.getElementById("buttonPrevious");
const currentScore = document.getElementById("currentScore");
const currentQuestionCount = document.getElementById("currentQuestionCount");
const progressbarfull = document.getElementById("progress-bar-full");
const scorePercentage = document.getElementById("scorepercentage");
const groupMain = document.getElementById("groupmain");
const buttonStart = document.getElementById("buttonStart");
const groupStart = document.getElementById("start");
const groupEnd = document.getElementById("End");
const totalScore = document.getElementById("totalScore");
const loading = document.getElementById("loading");
const buttonEnd = document.getElementById("buttonEnd")

let quiz=[
    {},
 
{
    Question : " Is it possible to break JavaScript Code into several lines?",
    choice1 : "NO",
    choice2 : "May be in the future",
    choice3 : "No Idea",
    choice4 : "Yes",
    Answer : 4,
    choosenAnswer: 0,

},
{
    Question : "myArray=[1,234],myArray.push(9). what is the value of myArray?",
    choice1 : "myArray=[1,2,3,4,9]",
    choice2 : "myArray=[1,234,9]",
    choice3 : "myArray=[9,1,2,3,4]",
    choice4 : "myArray=[9,1,234]",
    Answer : 2,
    choosenAnswer: 0,
},
{
    Question :" what is the full meaning of CSS",
    choice1 :"Color Style Sheet",
    choice2  :"Code Style Script",
    choice3  :"Cascade Style Sheet",
    choice4 : "Cascading Style Sheet",
    Answer: 4,
    choosenAnswer: 0,
},
{
    Question : "which of the followings is a single line comment in CSS",
    choice1: "/*content*/",
    choice2 : "(content)",
    choice3 : "|content|",
    choice4 : "*/content",
    Answer : 1,
    choosenAnswer: 0,
},
{
    Question:"Which of the followings is not a CSS backgrounds property?",
    choice1 : "Background-pip",
    choice2 :"Background-color",
    choice3 : "Background-image",
    choice4 : "Background-position",
    Answer : 1,
    choosenAnswer: 0,
},
{
    Question: "What does HTML stand for?",
    choice1 :"Hyperlink and Text Markup Language",
    choice2 : "Hyperlinks and Text Markup Language",
    choice3 : "Hyperlinks and Text Machine Langauage",
    choice4 : "Hyper Text Markup Language",
    Answer :2,
    choosenAnswer: 0,
},
{
    Question :"What is the correct HTML for adding a background color?",
    choice1 :"<color>Yellow</color>",
    choice2 :"<body style =background-color:red>",
    choice3 :"<body background color=Yellow>",
    choice4 :"<HTML> backgroundcolor = Yellow </HTml>",
    Answer : 2,
    choosenAnswer: 0,
},
{
    Question :"what is the answer to this expression  3+2+'7' ",
    choice1 : " 12 ",
    choice2 : " 57",
    choice3 : "NaN",
    choice4 : "No Idea",
    Answer : 2,
    choosenAnswer: 0,
}
];

let currentQuestion={};
let availableQuestions = [];
let acceptingAnswers=false;
let score = 0;
let questionCounter = 0;
let myArray = [];
let meArray = [1,2,3,4,5,6,7,8,9]
let previousQuestion={};
 let randomNumber;
 
//constant
const CORRECT = 20;
const MAXQUESTION = 8;
displayGames= ()=>{
    groupMain.style.display = "block";
    groupStart.style.display = " none "
}
getEndView= ()=>{
    setTimeout(()=>{
   groupMain.style.display = "none";
   groupEnd.style.display = "block"
    },0)
    
}
removeEndView = ()=>{
    loading.style.display = "block"
    setTimeout(()=>{
        groupMain.style.display = "block";
        groupEnd.style.display = "none"
          buttonNext.innerText="Next"
        buttonNext.style.removeProperty("backgroundColor")
        startGame() },10000)
}


startGame = ()=>{
    displayGames();
    questionCounter=0 ;
    score = 0;
    availableQuestions = [...quiz];
    myScore = 0;
    progressbarfull.style.width =`${(questionCounter/MAXQUESTION)*100+"%"}`;
    scorePercentage.innerText= `${(questionCounter/MAXQUESTION)*100+"%"}`;
    currentScore.innerText= `Score:${myScore}`;
    getNewQuiz();
};
 


  let nextNumber=0
 let previousNumber = -1
 
getNewQuiz = ()=>{
     questionCounter++;
     
     currentQuestionCount.innerText = ` Number:${questionCounter}/8`
    
        currentQuestion = availableQuestions[questionCounter];
    question.innerText=currentQuestion.Question;


          options.forEach(choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number]

            
            
          });
          acceptingAnswers = true; 
        
    }
   let  selectedChoice;
   let  x;
    let currentAnswer ;
   let classToApply;
   let b;
   let  myScore;
 
    options.forEach(choice=>{
        choice.addEventListener("click",e=>{
            if(!acceptingAnswers)return;
            acceptingAnswers=false
             selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset["number"];
             console.log(selectedAnswer)
            classToApply = 
            selectedAnswer == currentQuestion.Answer? "CORRECT": "INCORRECT" ;
            selectedChoice.classList.add(classToApply);
            myScore = 
           selectedAnswer == currentQuestion.Answer? score+=10: score-=2;
            currentScore.innerText= `Score:${myScore}`;
            
            })
      })
   
      getMyGrades = ()=>{

      }
        

myEndView = ()=>{
    getMyGrades();
    if(questionCounter === 8){
        getEndView()
     }else{ getNewQuiz()}
}
buttonNext.addEventListener("click",()=>{
    progressbarfull.style.width =`${(questionCounter/MAXQUESTION)*100+"%"}`;
    scorePercentage.innerText =  `${((questionCounter/MAXQUESTION)*100+"%")}`;
    selectedChoice.classList.remove(classToApply);
    myEndView();
    if(questionCounter=== 8){
        buttonNext.innerText="Submit"
        buttonNext.style.backgroundColor = "green"
        totalScore.innerHTML = `${(myScore/80)*100+"%"}`
        if(  buttonNext.innerText="Submit"){
          selectedAnswer.classList.add(classToApply)
         }else{selectedAnswer.classList.remove(classToApply)}
     }
     
})
 
buttonStart.addEventListener("click",()=>{
    setTimeout(startGame(),10000)
})

buttonEnd.addEventListener("click",()=>{
    removeEndView();
})
document.getElementById("UserEmail").innerText=`${localStorage.getItem("Email")}`
document.getElementById("Username").innerText=`${localStorage.getItem("username")}`