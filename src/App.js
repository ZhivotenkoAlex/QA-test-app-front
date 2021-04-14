import { useEffect, Suspense, useState, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';
import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import {
  getIsFetchingCurrentUser,
  getIsLoggedIn,
} from './redux/authorization/authorization-selectors';
import { fetchCurrentUser } from './redux/authorization/authorization-operations';
import Navigation from './components/Navigation/Navigation';
import ResultsPage from './components/Results/Results';
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
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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
                <MainPageView
                  setTypeQuestions={setTypeQuestions}
                ></MainPageView>
              </PrivateRoute>

              <PublicRoute path="/auth/google" restricted redirectTo="/">
                <GoogleRedirect />
              </PublicRoute>

              <PublicRoute path="/auth" exact restricted redirectTo="/">
                <AuthPage />
              </PublicRoute>
              <PublicRoute path="/auth/google" restricted redirectTo="/">
                <GoogleRedirect />
              </PublicRoute>

              <PrivateRoute path="/test" redirectTo="/auth">
                <TestPage
                  typeQuestions={typeQuestions}
                  setTypeQuestions={setTypeQuestions}
                  answers={answers}
                  setAnswers={setAnswers}
                ></TestPage>
              </PrivateRoute>

              <PublicRoute path="/results" redirectTo="/auth">
                {<ResultsPage answers={answers} setAnswers={setAnswers} />}
              </PublicRoute>

              <PrivateRoute path="/useful-info" redirectTo="/auth">
                <UsefullInfo />
              </PrivateRoute>

              <PublicRoute path="/contacts">
                <ContactsPage />
              </PublicRoute>

              <Route>
                {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/auth" />}
              </Route>
            </Suspense>
          </Switch>
          <ToastContainer transition={Flip} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
