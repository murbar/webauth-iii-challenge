import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavWrapper = styled.nav`
  position: relative;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  ul {
    padding: 1rem 0;
    margin: 0;
    display: flex;
  }
  li {
    list-style: none;
    margin-right: 1.5rem;
  }
  a {
    color: tomato;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      font-weight: bold;
    }
  }
  .welcome {
    position: absolute;
    right: 0;
    margin-right: 0;
  }
`;

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">Users List</NavLink>
        </li>
        {!auth.user && (
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
        )}

        {auth.user && (
          <>
            <li className="welcome">Welcome, {auth.user.username}!</li>
            <li>
              <NavLink to="/logout">Log out</NavLink>
            </li>
          </>
        )}
      </ul>
    </NavWrapper>
  );
};

export default App;
