import { useState } from 'react';
import styles from './AuthForm.module.css';

const AuthForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // empty field validation function
  const formValidation = () => {
    if (email === '') {
      alert('Enter email');
      return false;
    }
    if (password === '') {
      alert('Enter password');
      return false;
    }
    return true;
  };

  // form clearing function
  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  // form submit function
  const handleFormSubmit = e => {
    e.preventDefault();
    if (formValidation()) {
      onSubmit({ email, password }, e.target.name);
      formReset();
    }
    return;
  };
  return (
    <form className={styles.formLogin}>
      <div className={styles.formField}>
        <input
          className={styles.formInput}
          value={email}
          name="mail"
          id="mail"
          autoComplete="true"
          type="email"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <label
          className={`${styles.formLabel} ${styles.formEmail}`}
          for="mail"
        ></label>
      </div>
      <div className={styles.formField}>
        <input
          className={styles.formInput}
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <label
          className={`${styles.formLabel} ${styles.formPassword}`}
          for="password"
        ></label>
      </div>
      <div className={styles.signButtons}>
        <button
          className={`${styles.button} ${styles.signin}`}
          name="signIn"
          type="button"
          onClick={e => handleFormSubmit(e)}
        >
          Sign in
        </button>
        <button
          className={styles.button}
          name="signUp"
          type="button"
          onClick={e => handleFormSubmit(e)}
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
export default AuthForm;
