import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const handleFinishClick = () => {
    isCompleted
      ? console.log('Відправляємо дані на бек-енд')
      : console.log('Немає всіх відповідей');
  };

  return (
    <div style={s.container}>
      <Link
        onClick={handleFinishClick}
        to={{
          pathname: isCompleted ? '/results' : '/',
        }}
      >
        Завершити тест
      </Link>

      <CardView
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        questionIndex={questionIndex}
        setIsCompleted={setIsCompleted}
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
