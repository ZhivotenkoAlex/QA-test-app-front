import { useState } from 'react';

import CardView from './CardView';
import s from './TestPage.module.css';

const TestPage = ({ questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(questions.length);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handlePrevClick = () => {
    setQuestionIndex(questionIndex - 1);
  };

  const handleNextClick = () => {
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div style={s.container}>
      <button>Завершити тест</button>

      <CardView
        question={questions[questionIndex]}
        answers={answers}
        setAnswers={setAnswers}
      />

      {Boolean(questionIndex) && (
        <button onClick={handlePrevClick}>Попереднє</button>
      )}

      {totalQuestions - 1 !== questionIndex && (
        <button onClick={handleNextClick}>Наступне</button>
      )}
    </div>
  );
};

export default TestPage;
