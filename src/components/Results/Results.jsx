import { Link } from 'react-router-dom';

import cat from '../../img/cat.svg';
import s from './Results.module.scss';
import { VictoryPie, VictoryLabel } from 'victory';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as operation from '../../redux/questions/questions-operations';
import action from '../../redux/questions/questions-action';

// import API from '../../service/APIservice';

export default function Results({ answers, setAnswers }) {
  const dispatch = useDispatch();
  const rightAnswers = useSelector(state => state.questions.rightAnswer);
  const curentTest = useSelector(state => state.curentTest);
  const percentRightAnswers = Math.round((100 / 12) * rightAnswers);

  const onTryAgain = () => {
    dispatch(action.getRightAnswersSuccess(null));
    setAnswers([]);
  };

  useEffect(() => {
    dispatch(operation.getRightAnswers(answers, curentTest));
  }, [dispatch, answers, curentTest]);
  return (
    <div className={s.mainConteiner}>
      <h2 className={s.title}>Results</h2>
      <p className={s.textContent1}>[ Testing theory_]</p>
      <div className={s.lineHorizontal}></div>
      <div className={s.imgGraf}>
        <VictoryPie
          width={500}
          startAngle={90}
          endAngle={495}
          responsive={true}
          animate={{
            duration: 1000,
          }}
          colorScale={['#FF6B01', '#D7D7D7']}
          data={[
            {
              x: `${percentRightAnswers}% Correct`,
              y: rightAnswers,
            },
            {
              x: `${100 - percentRightAnswers}% Incorrect`,
              y: 12 - rightAnswers,
            },
          ]}
          labelComponent={
            <VictoryLabel className="myLabel" textAnchor="middle" />
          }
        />
      </div>
      <div className={s.resultTextContent}>
        <p>
          Correct answers - <span>{rightAnswers}</span>
        </p>
        <div className={s.lineVertical}></div>
        <p>
          Total questions - <span>12</span>
        </p>
      </div>
      <img className={s.catImage} src={cat} alt="" />
      <p className={s.grateText}>Not bad!</p>
      <p className={s.sentenceText}>
        But you still need to learn some materials.
      </p>
      <Link
        to={{
          pathname: `/`,
        }}
      >
        <button className={s.btnTryAgain} onClick={onTryAgain}>
          Try again
        </button>
      </Link>
    </div>
  );
}
