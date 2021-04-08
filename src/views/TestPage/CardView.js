import s from './TestPage.module.css';

const CardView = ({
  questions,
  answers,
  setAnswers,
  questionIndex,
  setIsCompleted,
}) => {
  let isUpdated;

  const handleChoise = e => {
    updateExistingAnswers(e.target.value);

    if (!isUpdated) {
      addNewAnswer(e.target.value);
    }

    chekCompleted();
  };

  const updateExistingAnswers = value => {
    const updatedAnswers = [...answers];
    isUpdated = false;

    answers.map((answer, index) => {
      if (answer.questionId === questions[questionIndex].questionId) {
        updatedAnswers[index].answer = value;
        setAnswers([...updatedAnswers]);
        isUpdated = true;
        return;
      }
    });
  };

  const addNewAnswer = value => {
    setAnswers([
      ...answers,
      {
        questionId: questions[questionIndex].questionId,
        answer: value,
      },
    ]);
  };

  const chekCompleted = () => {
    if (questions.length === answers.length + 1) {
      setIsCompleted(true);
    }
  };

  return (
    <div style={s.container}>
      {questions.map((question, index) => (
        <div className={index !== questionIndex && s.hide}>
          <div key={question.questionId}>{question.question}</div>
          {}
          {question.answers.map(answer => (
            <label key={answer}>
              <input
                type="radio"
                name={`answer-${question.questionId}`}
                value={answer}
                onClick={handleChoise}
              />
              {answer}
            </label>
          ))}
          {}
          <label>
            <input
              type="radio"
              name={`answer-${question.questionId}`}
              value="I don't know"
              onClick={handleChoise}
            />
            I don't know
          </label>
          ;
        </div>
      ))}
    </div>
  );
};

export default CardView;
