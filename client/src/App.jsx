import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import UsersList from './components/UsersList';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import RegisterForm from './components/RegisterForm';
import ProtectedRoute from './components/common/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const AppWrapper = styled.main`
  max-width: 40rem;
  margin: 1rem auto;
`;

const App = () => {
  return (
    <AuthProvider>
      <AppWrapper>
        <h1>Auth API demo</h1>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/users" component={UsersList} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </AppWrapper>
    </AuthProvider>
  );
};

export default App;
