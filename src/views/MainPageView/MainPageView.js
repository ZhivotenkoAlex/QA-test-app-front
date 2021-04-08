import { Link } from 'react-router-dom';

import { testTypes } from './constants';
import s from './MainPageView.module.css';

import { techQuestions } from '../../temp/tech-questions.json';
import { theoryQuestions } from '../../temp/theory-questions.json';

const MainPageView = ({ setQuestions }) => {
  async function fetchTrendingMovies(page) {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=7e78d9d0b80a5a9938ce5aba09bf2c47&page=${page}`,
    );

    return await response.json();
  }

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
