let currentquestion = document.getElementById("question");
let nextbutton = document.getElementById("move");
let answerno = document.getElementById("answer");
let mainheading = document.querySelector(".quiz h1");
let nxtbuttonplace = document.querySelector(".move");


let questions = [
    {
    question: "Who created Taj Mahal ?",
    answers:[
        {text:"Akbar" , correct:false},
        {text:"Shah Jahan" , correct:true},
        {text:"Babar" , correct:false},
        {text:"Humayun" , correct:false}
    ]
    },
    {
        question: "Which of these is located in Agra?",
        answers: [
          {text:"Red Fort" , correct:false},
          {text:"Taj Mahal" , correct:true},
          {text:"Golden Temple" , correct:false},
          {text:"Statue of Unity" , correct:false},
        ]
    },
    {
        question:"Which is world's largest flower?",
        answers: [
          {text:"Rafflesia Arnoldii" , correct:true},
          {text:"Middlemist red" , correct:false},
          {text:"Oaho stenogyne" , correct:false},
          {text:"Nepenthes Tenax" , correct:false},
        ]
    },
    {
        question:"Who is world's richest person?",
        answers: [
          {text:"Satya Nadela" , correct:false},
          {text:"Gautam Adani" , correct:false},
          {text:"Elon Musk" , correct:true},
          {text:"Mukesh Ambani" , correct:false},
        ]
    },
    {
        question:"Which is the largest artificial lake in world?",
        answers: [
          {text:"Lake Kariba" , correct:true},
          {text:"Lake Volta" , correct:false},
          {text:"Lake Guri" , correct:false},
          {text:"Lake Nasser" , correct:false},
        ]
    },

]
let questionindex = 0;
let score = 0;
function startquiz(){
questionindex = 0;
 score = 0;
 nextbutton.innerText = "Next";
showquestion();

}

function showquestion(){
    reset();
let curretquestionno = questions[questionindex];
let questionno = questionindex + 1;
currentquestion.innerText = questionno + ". " + curretquestionno.question;
curretquestionno.answers.forEach(answer => {
let button = document.createElement("button");
button.classList.add("newclass");
button.innerText = answer.text;
answerno.appendChild(button);
if(answer.correct){
    button.dataset.correct = answer.correct;
}
button.addEventListener("click" , selectans)
});
}

function reset(){
    nextbutton.style.display = "none";
    while(answerno.firstChild){
        answerno.removeChild(answerno.firstChild);
    }
}
function selectans(e){
    let selectedbtn = e.target;
    let iscorrect = selectedbtn.dataset.correct === "true";
 if(iscorrect){
   selectedbtn.classList.add("correct");
   score++;
 }
 else{
    selectedbtn.classList.add("incorrect");
 }
 Array.from(answerno.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = "true";
 })
nextbutton.style.display = "block";
}

function showscore(){
    reset();
 currentquestion.innerText = `Congratulations your score is ${score} out of ${
    questions.length}`
    nextbutton.innerText = "Play Again";
    nextbutton.style.display = "block";

}
function showbutton(){
    questionindex++;
    if(questionindex<questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}
nextbutton.addEventListener("click", ()=>{
    if(questionindex < questions.length){
        showbutton();
    }
    else{
        startquiz();
    }
})
startquiz();

