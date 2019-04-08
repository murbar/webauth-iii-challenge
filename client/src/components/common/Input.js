import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
    padding: 0.25rem 0;
  }
  input {
    padding: 0.5rem 0.5rem;
    font-size: 0.75rem;
    border: 2px solid #777;
    border-radius: 0.25rem;
  }
  input::placeholder {
    font-style: italic;
    color: #999;
  }
  input:focus {
    border: 2px solid #ccc;
    outline: none;
  }
  .form-error {
    font-size: 0.75em;
    color: crimson;
    padding: 0.25rem;
  }
`;

const Input = ({ type = 'text', name, value, label, error, ...rest }) => {
  return (
    <StyledDiv>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        value={value || ''}
        type={type}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="form-error">{error}</div>}
    </StyledDiv>
  );
};

export default Input;
