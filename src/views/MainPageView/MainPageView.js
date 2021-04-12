import { Link } from 'react-router-dom';

import sprite from '../../img/sprite.svg';
import { testTypes } from './constants';
import s from './MainPageView.module.css';

const MainPageView = ({ setTypeQuestions }) => {
  const hanldeTestClick = e => {
    setTypeQuestions(e.currentTarget.id);
  };

  return (
    <div>
      <section className={`${s.home} ${s.container}`}>
        <h4 className={s.homeTitle}>
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </h4>

        <hr className={s.homeLine} />
        <p className={s.homeName}>Linus Torvalds</p>
        <p className={s.homeCompany}>Linux kernel creator, hacker, 1969</p>

        <Link
          id={testTypes.tech}
          className={`${s.homeButton} ${s.training}`}
          onClick={hanldeTestClick}
          to={{
            pathname: `/test`,
          }}
        >
          QA technical
          <br />
          training
          <br />
          <svg className={s.arrow} width="24" height="24">
            <use href={sprite + '#arrow'}></use>
          </svg>
        </Link>

        <Link
          id={testTypes.theory}
          className={`${s.homeButton} ${s.theory}`}
          onClick={hanldeTestClick}
          to={{
            pathname: `/test`,
          }}
        >
          Testing
          <br />
          theory
          <br />
          <svg className={s.arrow} width="24" height="24">
            <use href={sprite + '#arrow'}></use>
          </svg>
        </Link>
      </section>
    </div>
  );
};

export default MainPageView;
