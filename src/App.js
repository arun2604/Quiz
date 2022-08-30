import './App.css';
import React, { useState } from 'react'
import questions from "./questions/questions.json"

function App() {
  // console.log(questions);
const [questionIndex,setQuestionIndex] = useState(0);
const [score,setScore] = useState(0);
const [showScore,setShowScore] = useState(false);
let currentQuestion = questions[questionIndex];

let selectOption = (idx)=>{
  // console.log(idx);
  if(currentQuestion.answer === idx){
    setScore(score + 1);
  }
  const nxtQues = questionIndex + 1;
  if(nxtQues < questions.length){
    setQuestionIndex(questionIndex + 1);
  }
  else{
    setShowScore(true);
  }
}
  return (
    <div className="quiz-container">
        {showScore ? (
          <h1 className='result'>Your score is : {score}</h1>
        ) : (
          <div className="questions-container">
        <p>{currentQuestion.question}</p>
        <div className="option-container" >
          <ul className = "ul-container">
            {currentQuestion.options.map((option,i) => {
              return  <li className="li-container" onClick={()=>selectOption(i)} >{option}</li>
            })}
          </ul>
        </div>
      </div>
      )}        
    </div>
  );
}

export default App;
