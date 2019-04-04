import React from 'react';
import styled from 'styled-components';
import useResource from '../hooks/useResource';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';

const ListWrapper = styled.div``;

const UsersList = () => {
  const { state, isLoading, error } = useResource('http://localhost:4000/api/users');

  return (
    <ListWrapper>
      <h2>Users list</h2>
      {isLoading && <LoadingMessage />}
      {error && <ErrorMessage>{error}. Have you logged in?</ErrorMessage>}
      {state.length ? (
        <div className="users-list">
          {state.map(u => (
            <div key={u.id}>
              <h3>{u.username}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div>No users</div>
      )}
    </ListWrapper>
  );
};

export default UsersList;
