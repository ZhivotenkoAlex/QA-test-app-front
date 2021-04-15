import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AuthForm.module.css';

const AuthForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // empty field validation function
  const formValidation = () => {
    if (email === '') {
      toast.error('Please enter email!', {
        position: 'top-center',
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    if (password === '') {
      toast.error('Please enter password!', {
        position: 'top-center',
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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

  const handleEnter = e => {
    if (e.key === 'Enter' && formValidation()) {
      onSubmit({ email, password }, 'signIn');
      formReset();
    }
  };

  return (
    <form className={styles.formLogin}>
      <div className={styles.formField}>
        <input
          className={styles.formInput}
          value={email}
          name="mail"
          id="mail"
          autoComplete="on"
          type="email"
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <label
          className={`${styles.formLabel} ${styles.formEmail}`}
          htmlFor="mail"
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
          onKeyDown={handleEnter}
        />
        <label
          className={`${styles.formLabel} ${styles.formPassword}`}
          htmlFor="password"
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

AuthForm.prototype = { onSubmit: PropTypes.func.isRequired };
