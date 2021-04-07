import cat from '../../img/cat.svg';
import s from './Results.module.scss';
import { VictoryPie, VictoryLabel } from 'victory';

export default function Results() {
  const rightAnswers = 8;
  return (
    <div className={s.mainConteiner}>
      <h2 className={s.title}>Results</h2>
      <p className={s.textContent1}>[ Testing theory_]</p>
      <div className={s.lineHorizontal}></div>
      <div className={s.imgGraf}>
        <VictoryPie
          animate={{
            duration: 2000,
          }}
          colorScale={['#FF6B01', '#D7D7D7']}
          data={[
            { x: 'Correct ', y: rightAnswers },
            { x: 'Incorrect ', y: 12 - rightAnswers },
          ]}
          padding={100}
          labelComponent={<VictoryLabel style={{ fontSize: 16 }} />}
        />
      </div>
      <div className={s.resultTextContent}>
        <p>
          Correct answers - <span>{rightAnswers}</span>
        </p>
        <div className={s.lineVertical}></div>
        <p>
          Total questions - <span>{12 - rightAnswers}</span>
        </p>
      </div>
      <img className={s.catImage} src={cat} alt="" />
      <p className={s.grateText}>Not bad!</p>
      <p className={s.sentenceText}>
        But you still need to learn some materials.
      </p>
      <button className={s.btnTryAgain}>Try again</button>
    </div>
  );
}
