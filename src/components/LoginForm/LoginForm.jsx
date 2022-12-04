import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <p>Email</p>
        <input placeholder="Enter Username" type="email" name="email" />
      </label>
      <label>
        <p>Password</p>
        <input placeholder="Enter password" type="password" name="password" />
      </label>

      <button type="submit">Log In</button>
    </form>
  );
};
