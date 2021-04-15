import { useDispatch } from 'react-redux';

import {
  logIn,
  register,
} from '../../redux/authorization/authorization-operations';

import styles from './AuthPage.module.css';
import AuthForm from '../../components/AuthForm';
const AuthPage = () => {
  const dispatch = useDispatch();

  // submit function
  const handleSubmint = async (credentials, targetName) => {
    switch (targetName) {
      case 'signIn':
        await dispatch(logIn(credentials));

        break;
      case 'signUp':
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
            weak points <br/> in knowledge so that you can strengthen it. We will show
            you what is relevant to know for a
            <span className={styles.homeAccent}> QA Engineer</span> and will try
            to make the learning process more diverse_
            <span className={styles.homeAccent}>]</span>
          </p>
        </div>
        <div className={styles.formRegister}>
          <p className={styles.authorizeTitle}>
            You can use your Google Account to authorize:
          </p>

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
    </div>
  );
};
export default AuthPage;
