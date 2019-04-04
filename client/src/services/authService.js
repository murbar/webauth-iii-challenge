import jwtDecode from 'jwt-decode';
import http from './httpService';
import { apiUrl } from '../config.json';

const tokenKey = 'token';

http.setToken(getToken());

export function register({ username, password, department }) {
  const newUser = {
    username,
    password,
    department
  };
  return http.post(`${apiUrl}/register`, newUser);
}

export async function login(username, password) {
  const { data } = await http.post(`${apiUrl}/login`, { username, password });
  console.log(data);
  localStorage.setItem(tokenKey, data.token);
  http.setToken(data.token);
}

export function loginWithToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem(tokenKey);
    const user = jwtDecode(token);
    if (Date.now() / 1000 > user.exp) {
      logout();
      return null;
    } else {
      return jwtDecode(token);
    }
  } catch (ex) {
    return null;
  }
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithToken,
  logout,
  getCurrentUser,
  getToken
};
