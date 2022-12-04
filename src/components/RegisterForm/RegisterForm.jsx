import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <p>Username</p>
        <input placeholder="Enter Username" type="text" name="name" />
      </label>
      <label>
        <p>Email</p>
        <input placeholder="Enter email" type="email" name="email" />
      </label>
      <label>
        <p>Password</p>
        <input placeholder="Your password" type="password" name="password" />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
