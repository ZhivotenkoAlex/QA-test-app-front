import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AuthForm.module.css';
import passwordVisible from '../../img/password-visible.png';

const AuthForm = ({ onSubmit }) => {
  const passwordInputRef = useRef();
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
  const hendlerFormEnter = e => {
    if (e.key !== 'Enter') {
      return;
    }
    e.target.name = 'signIn';
    handleFormSubmit(e);
  };
  return (
    <form className={styles.formLogin} onKeyDown={e => hendlerFormEnter(e)}>
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
          ref={passwordInputRef}
          onChange={e => setPassword(e.target.value)}
        />
        {
          <img
            src={passwordVisible}
            width="30px"
            alt="eye"
            onClick={() => {
              passwordInputRef.current.getAttribute('type')
                ? passwordInputRef.current.removeAttribute('type')
                : passwordInputRef.current.setAttribute('type', 'password');
            }}
          />
        }
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
