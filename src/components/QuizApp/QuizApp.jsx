import { useState } from "react";
import Card from "./Card";
import data from "../../data/quiz.json"
import Result from "./Result";
import "./QuizApp.css"



const quizLength = data.length;

export default function QuizApp() {
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    };

    const newQuestionId = questionId + 1;
    (newQuestionId < quizLength)
      ? setQuestionId(newQuestionId) 
      : setShowResult(true);

    setQuestionId(newQuestionId);
  };

  const handleRestart = () => {
    setQuestionId(0);
    setScore(0);
    setShowResult(false);
  };

  return(
    <>
      <h2>Quiz App</h2>
      {showResult 
        ? <Result quizLength={quizLength} score={score} handleRestart={handleRestart}/>
        : <Card data={data} quizLength={quizLength} score={score} questionId={questionId} handleAnswer={handleAnswer}/>
      }
    </>
  );
};
