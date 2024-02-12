import { useState} from "react";
import "./Quiz.scss";
import Result from "../result/Result";
import Game from "../game/Game";


const questions = [
    {
      title: "React - это ... ?",
      variants: ["библиотека", "фреймворк", "приложение"],
      correct: 0,
    },
    {
      title: "Компонент - это ... ",
      variants: ["приложение", "часть приложения или страницы", "то, что я не знаю что такое"],
      correct: 1,
    },
    {
      title: "Что такое JSX?",
      variants: [
        "Это простой HTML",
        "Это функция",
        "Это тот же HTML, но с возможностью выполнять JS-код",
      ],
      correct: 2,
    },
    {
      title: "Что такое useState?",
      variants: [
        "Это функция для хранения данных компонента",
        "Это глобальный стейт",
        "Это когда ты никому не нужен",
      ],
      correct: 0,
    },
];


export default function Quiz () {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
  
    const question = questions[step];
  
    const lengthQuestions = questions.length;
  
    const onClickVariant = (index) => {
      if (index === question.correct) {  
        setCorrect(correct + 1);
      }
        setStep(step + 1);
    }
  
    function openGame () {
      setStep(0);
      setCorrect(0);
    }
  
    return (
        <div className="quiz">
            {
              step !== lengthQuestions ? (
                <Game question={question} onClickVariant={onClickVariant} step={step} lengthQuestions={lengthQuestions}/> 
                ) : (
                <Result correct={correct} lengthQuestions={lengthQuestions} openGame={openGame}/>
              )
            }
        </div>
    );
}