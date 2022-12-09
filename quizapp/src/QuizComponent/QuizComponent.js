import React from "react";
import { useState } from "react";
import './Quizstyle.css';

const QuizComponent = () => {
  var Questionbank= [
    {
      Question: "What is the capital of Nepal?",
      AnswerText: [
        { Answer: "Pokhara", isCorrect: false },
        { Answer: "Itahari", isCorrect: false },
        { Answer: "Kathamandu", isCorrect: true },
        { Answer: "Jhapa", isCorrect: false },
      ],
    },
    {
      Question: "What is the biggest city of Nepal?",
      AnswerText: [
        { Answer: "Pokhara", isCorrect: false },
        { Answer: "Itahari", isCorrect: false },
        { Answer: "Kathamandu", isCorrect: true },
        { Answer: "Dharan", isCorrect: false },
      ],
    },
    {
      Question: "What is the national animal of Nepal?",
      AnswerText: [
        { Answer: "cow", isCorrect: true },
        { Answer: "dog", isCorrect: false },
        { Answer: "cat", isCorrect: false },
        { Answer: "ox", isCorrect: false },
      ],
    },
    {
      Question: "who is the first prime minister of Nepal?",
      AnswerText: [
        { Answer: "Sher Bahadur Deuba", isCorrect: false },
        { Answer: "KP Sharma Oli", isCorrect: false },
        { Answer: "Sushil Koirala", isCorrect: false },
        { Answer: "BhimSen Thapa", isCorrect: true },
      ],
    },
    {
      Question: "Who is the father of Computers?",
      AnswerText: [
        { Answer: "James Gosling", isCorrect: false },
        { Answer: "Charles Babbage", isCorrect: true },
        { Answer: "Dennis Ritchie", isCorrect: false },
        { Answer: "Bill Gates", isCorrect: false },
      ],
    },
  ];

  //useState hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
  if(isCorrect)
  {
      setScore(score+1);
  }

 const nextQuestion= currentQuestion+1;
 if(nextQuestion<Questionbank.length)
 {
  setCurrentQuestion(nextQuestion);
 }
 else{
  setShowScore(true);
 }
}

const resetQuiz=()=>
{
  setCurrentQuestion(0);
  setScore(0);
  setShowScore(false);
}

  return (
      <div className='app'>
          {showScore ? (
              <div className='score-section'>
                  You have scored {score} out of {Questionbank.length}
                  <>
                     <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                  </>
              </div>
          )
              : (
                  <>
                      <div className='question-section'>
                          <div className='question-count'>
                             <span>{currentQuestion+1}</span>/{Questionbank.length}
                          </div>

                          <div className='question-text'>
                           {Questionbank[currentQuestion].Question}
                          </div>
                      </div>

                      <div className='answer-section'>
                        {Questionbank[currentQuestion].Answers.map((answer)=>
                        (
                            <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                        ))}
                      </div>
                  </>
              )
          }

      </div>
  );
};
export default QuizComponent;
