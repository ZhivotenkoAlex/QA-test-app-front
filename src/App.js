import { useEffect, Suspense, useState, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';
import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import { getIsFetchingCurrentUser } from './redux/authorization/authorization-selectors';
import {
  fetchCurrentUser,
  refreshTokens,
} from './redux/authorization/authorization-operations';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer';
import GoogleRedirect from './components/GoogleRedirect';

const MainPageView = lazy(() =>
  import(
    './views/MainPageView/MainPageView' /* webpackChunkName: "home-page" */
  ),
);
const AuthPage = lazy(() =>
  import('./views/AuthPage' /* webpackChunkName: "auth-page" */),
);
const TestPage = lazy(() =>
  import('./views/TestPage/TestPage' /* webpackChunkName: "test-page" */),
);
const ResultsPage = lazy(() =>
  import('./components/Results/Results' /* webpackChunkName: "results-page" */),
);
const UsefullInfo = lazy(() =>
  import(
    './components/UsefullInfo/UsefullInfo' /* webpackChunkName: "materials-page" */
  ),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

function App() {
  const [typeQuestions, setTypeQuestions] = useState(null);
  const [answers, setAnswers] = useState([]);

  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, []);

  axios.interceptors.response.use(
    response => response,
    error => {
      const status = error.response ? error.response.status : null;

      console.log(error.response.config.headers.Authorization);

      if (status === 401 && error.response.config.headers.Authorization) {
        dispatch(refreshTokens(error.config));

        error.config.headers['Authorization'] =
          axios.defaults.headers.common.Authorization;
        error.config.baseURL = undefined;

        return axios.request(error.config);
      }

      return Promise.reject(error);
    },
  );

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <Switch>
            <Suspense fallback={<Loader />}>
              <PrivateRoute path="/" exact redirectTo="/auth">
                <>
                  <MainPageView
                    setTypeQuestions={setTypeQuestions}
                  ></MainPageView>
                  <Footer />
                </>
              </PrivateRoute>

              <PublicRoute path="/auth" restricted redirectTo="/">
                <>
                  <AuthPage />
                  <Footer />
                </>
              </PublicRoute>

              <PublicRoute path="/google-redirect" restricted redirectTo="/">
                <GoogleRedirect />
              </PublicRoute>

              <PrivateRoute path="/test" redirectTo="/auth">
                <>
                  <TestPage
                    typeQuestions={typeQuestions}
                    setTypeQuestions={setTypeQuestions}
                    answers={answers}
                    setAnswers={setAnswers}
                  ></TestPage>
                  <Footer />
                </>
              </PrivateRoute>

              <PrivateRoute path="/results" redirectTo="/auth">
                <>
                  {<ResultsPage answers={answers} setAnswers={setAnswers} />}
                  <Footer />
                </>
              </PrivateRoute>

              <PrivateRoute path="/useful-info" redirectTo="/auth">
                <>
                  <UsefullInfo />
                  <Footer />
                </>
              </PrivateRoute>

              <PublicRoute path="/contacts">
                <>
                  <ContactsPage />
                  <Footer />
                </>
              </PublicRoute>
            </Suspense>
          </Switch>
          <ToastContainer transition={Flip} />
        </>
      )}
    </>
  );
}

export default App;
