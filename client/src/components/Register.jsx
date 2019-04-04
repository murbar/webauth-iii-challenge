import React from 'react';
import styled from 'styled-components';

const RegisterWrapper = styled.div``;

const Register = () => {
  return (
    <RegisterWrapper>
      <h2>Register</h2>
      <form>
        <input type="text" name="username" />
        <input type="text" name="department" />
        <input type="password" name="password" />
        <button>Create Account</button>
      </form>
    </RegisterWrapper>
  );
};

export default Register;
