import { useDispatch } from 'react-redux';

import {
  logIn,
  register,
  googleRegister,
} from '../../redux/authorization/authorization-operations';

import styles from './AuthPage.module.css';
import googleLogo from './images/Google-logo.svg';
import AuthForm from '../../components/AuthForm';

const AuthPage = () => {
  const dispatch = useDispatch();

  // submit function
  const handleSubmint = async (credentials, tegetName) => {
    switch (tegetName) {
      case 'signIn':
        console.log(tegetName, credentials.email, credentials.password);
        await dispatch(logIn(credentials));

        break;
      case 'signUp':
        console.log(tegetName, credentials.email, credentials.password);
        await dispatch(register(credentials));

        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.AuthPage}>
      <div className={styles.description}>
        <h1>Pro Test</h1>
        <p>
          [ We will help you find weak points in knowledge so that you can
          strengthen it. We will show you what is relevant to know for a QA
          Engineer and will try to make the learning process more diverse_ ]
        </p>
      </div>
      <div className={styles.login_register}>
        <p>You can use your Google Account to authorize:</p>

        <a href="https://safe-bayou-94848.herokuapp.com/api/auth/google">
          <button onClick={() => dispatch(googleRegister())}>
            <img src={googleLogo} alt="Google logo" />
            Google
          </button>
        </a>

        <p>Or login to our app using e-mail and password:</p>
        <AuthForm onSubmit={handleSubmint} />
      </div>
    </div>
  );
};
export default AuthPage;
