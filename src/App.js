import { useEffect, Suspense, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import { getIsFetchingCurrentUser } from './redux/authorization/authorization-selectors';
import { fetchCurrentUser } from './redux/authorization/authorization-operations';
import Navigation from './components/Navigation/Navigation';
import ResultsPage from './components/Results/Results';
import Footer from './components/Footer';

import MainPageView from './views/MainPageView/MainPageView';
import TestPage from './views/TestPage/TestPage';

import './App.css';

function App() {
  const [typeQuestions, setTypeQuestions] = useState(null);
  const [answers, setAnswers] = useState([]);

  console.log('Відповід:');
  console.log(answers);

  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <p>Loader</p>
      ) : (
        <>
          {/* <AppBar /> */}
          <Switch>
            <Suspense fallback={<p>Loader</p>}>
              <Route>
                <Navigation />
              </Route>

              {/* <PrivateRoute path="/" exact redirectTo="/auth">
                <MainPageView></MainPageView>
              </PrivateRoute> */}

              <PublicRoute path="/" exact redirectTo="/auth">
                <MainPageView
                  setTypeQuestions={setTypeQuestions}
                ></MainPageView>
              </PublicRoute>

              <PublicRoute path="/auth" restricted redirectTo="/">
                {/* <AuthorizationPage /> */}
              </PublicRoute>

              {/* <PrivateRoute path="/test" redirectTo="/auth">
                <TestPage />
              </PrivateRoute> */}

              <PublicRoute path="/test" redirectTo="/auth">
                <TestPage
                  typeQuestions={typeQuestions}
                  setTypeQuestions={setTypeQuestions}
                  answers={answers}
                  setAnswers={setAnswers}
                ></TestPage>
              </PublicRoute>

              <PublicRoute path="/results-test" redirectTo="/auth">
                <ResultsPage />
              </PublicRoute>

              <PublicRoute path="/results" redirectTo="/auth">
                <ResultsPage />
              </PublicRoute>

              <PrivateRoute path="/useful-info" redirectTo="/auth">
                {/* <InformationPage /> */}
              </PrivateRoute>

              <PublicRoute path="/contacts">
                {/* <ContactsPage /> */}
              </PublicRoute>

              {/* <Route>
                <Redirect to="/auth" />
              </Route> */}
            </Suspense>
          </Switch>
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
