import { Link } from 'react-router-dom';

import { testTypes } from './constants';
import s from './MainPageView.module.css';

import { techQuestions } from '../../temp/tech-questions.json';
import { theoryQuestions } from '../../temp/theory-questions.json';

const MainPageView = ({ setQuestions }) => {
  const fetchQuestions = e => {
    if (e.target.id === testTypes.tech) {
      setQuestions(techQuestions);
    }

    setQuestions(theoryQuestions);
  };

  return (
    <div style={s.container}>
      <Link
        id={testTypes.tech}
        onClick={fetchQuestions}
        to={{
          pathname: `/test`,
        }}
      >
        QA tech
      </Link>

      <Link
        id={testTypes.theory}
        to={{
          pathname: `/test`,
        }}
      >
        Theory
      </Link>
    </div>
  );
};

export default MainPageView;
