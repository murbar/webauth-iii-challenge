import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { register } from '../services/authService';
import useForm from '../hooks/useForm';
import Input from './common/Input';
import Button from './common/Button';

const RegisterForm = ({ history }) => {
  const { auth } = useContext(AuthContext);

  const registerUser = async e => {
    try {
      const { data } = await register(newUser);
      auth.loginWithToken(data.token);
      history.replace('/users');
    } catch (ex) {
      console.log(ex);
    }
  };

  const { values: newUser, handleChange, handleSubmit } = useForm(registerUser);

  return (
    <section>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={newUser.username}
          onChange={handleChange}
          placeholder="Username"
          label="Username"
          required
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={newUser.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Input
          name="department"
          label="Department"
          value={newUser.department}
          onChange={handleChange}
          placeholder={`"Sales", "Admin", or "Management"`}
          required
        />
        <Button>Sign up</Button>
      </form>
    </section>
  );
};

export default RegisterForm;
