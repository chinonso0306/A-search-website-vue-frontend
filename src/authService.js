import axios from './views/axios-config'

export const login = async (credentials) => {
    const response = await axios.post('/login', credentials);
    const token = response.data.token;
    localStorage.setItem('token', token);
    return token;
  };
  
  export const logout = async () => {
    await axios.post('/logout');
    localStorage.removeItem('token');
  };
  
  export const getUser = async () => {
    const response = await axios.get('/user');
    return response.data.user;
  };