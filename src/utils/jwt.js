export const setProfile = (data) => {
  return localStorage.setItem('x-tt-profiles', data);
};

export const getProfile = () => {
  return localStorage.getItem('x-tt-profiles');
};

export const setToken = (data) => {
  return localStorage.setItem('token', JSON.stringify(data));
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  if (token !== undefined) return JSON.parse(token);
  else return null;
};

const JWT = {
  setProfile,
  getProfile,
  setToken,
  getToken
};

export default JWT;