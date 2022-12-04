import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Input, Button } from '../LoginForm/LoginForm.styled';

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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label>
        <p>Username</p>
        <Input placeholder="Enter Username" type="text" name="name" />
      </label>
      <label>
        <p>Email</p>
        <Input placeholder="Enter email" type="email" name="email" />
      </label>
      <label>
        <p>Password</p>
        <Input placeholder="Your password" type="password" name="password" />
      </label>

      <Button type="submit">Register</Button>
    </Form>
  );
};
