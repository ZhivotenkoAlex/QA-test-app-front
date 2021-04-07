import s from './TestPage.module.css';

const CardView = ({ question, answers, setAnswers }) => {
  console.log(answers);

  const handleChoise = e => {
    if (answers) {
    }

    setAnswers([
      ...answers,
      {
        questionId: question.questionId,
        answer: e.target.value,
      },
    ]);
  };

  return (
    <div style={s.container}>
      <div>{question.question}</div>

      {question.answers.map(answer => (
        <label key={answer}>
          <input
            type="radio"
            name="answer"
            value={answer}
            onClick={handleChoise}
          />
          {answer}
        </label>
      ))}

      <label>
        <input type="radio" name="answer" value="I don't know" />I don't know
      </label>
    </div>
  );
};

export default CardView;
