import httpAxios from '../httpAxios';

function login(email, password) {
  return httpAxios.post('login',{email,password});
}

function register(name,email, password) {
  return httpAxios.post('register', { name,email, password });
}

const userservice = {
  login: login,
  register: register,
};

export default userservice;