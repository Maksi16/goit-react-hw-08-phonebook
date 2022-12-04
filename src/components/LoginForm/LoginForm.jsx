import { useDispatch } from 'react-redux';
import { Form, Input, Button } from './LoginForm.styled';
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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <p>Email</p>
        <Input placeholder="Enter Username" type="email" name="email" />
      </label>
      <label>
        <p>Password</p>
        <Input placeholder="Enter password" type="password" name="password" />
      </label>

      <Button type="submit">Log In</Button>
    </Form>
  );
};
