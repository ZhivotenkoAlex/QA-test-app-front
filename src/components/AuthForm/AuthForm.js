import { useState } from 'react';

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
    <form>
      <label>
        Email
        <input
          value={email}
          autoComplete
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </label>

      <button name="signIn" type="button" onClick={e => handleFormSubmit(e)}>
        Sign in
      </button>
      <button name="signUp" type="button" onClick={e => handleFormSubmit(e)}>
        Sign up
      </button>
    </form>
  );
};
export default AuthForm;
