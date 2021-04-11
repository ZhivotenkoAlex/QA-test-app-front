import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import {
  logIn,
  register,
} from '../../redux/authorization/authorization-operations';

import styles from './AuthPage.module.css';
import AuthForm from '../../components/AuthForm';
import GoogleRedirect from '../../components/GoogleRedirect';
const AuthPage = () => {
  const dispatch = useDispatch();

  // submit function
  const handleSubmint = async (credentials, targetName) => {
    switch (targetName) {
      case 'signIn':
        console.log(targetName, credentials.email, credentials.password);
        await dispatch(logIn(credentials));

        break;
      case 'signUp':
        console.log(targetName, credentials.email, credentials.password);
        await dispatch(register(credentials));

        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.homeLogin}>
        <div className={styles.proTest}>
          <h1 className={styles.homeLoginTitle}>Pro Test</h1>
          <p className={styles.homeText}>
            <span className={styles.homeAccent}>[</span> We will help you find
            weak points in knowledge so that you can strengthen it. We will show
            you what is relevant to know for a <span className={styles.homeAccent}>QA Engineer</span> and will try to make
            the learning process more diverse_
            <span className={styles.homeAccent}>]</span>
          </p>
        </div>
        <div className={styles.formRegister}>
          <p className={styles.authorizeTitle}>
            You can use your Google Account to authorize:
          </p>

          {/* <button onClick={() => dispatch(googleRegister())}> */}
          <a
            className={styles.buttonGoogleLink}
            href="https://safe-bayou-94848.herokuapp.com/api/auth/google"
          >
            <button className={styles.buttonGoogle}></button>
          </a>

          <p className={styles.authorizeTitle}>
            Or login to our app using e-mail and password:
          </p>
          <AuthForm onSubmit={handleSubmint} />
        </div>
      </div>
      <Route path="/auth/google">
        <GoogleRedirect />
      </Route>
    </div>
  );
};
export default AuthPage;
