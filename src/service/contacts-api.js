import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getContacts = () => {
  return axios.get('/contacts').then(({ data }) => data);
};

const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

const deleteContact = id => {
  return axios.delete(`/contacts/${id}`);
};

const editContact = ({ id, name, number }) => {
  return axios
    .patch(`/contacts/${id}`, { name, number })
    .then(({ data }) => data);
};

const registerNewUser = async credentials => {
  return axios.post('/users/signup', credentials).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};

const loginUser = credentials => {
  return axios.post('/users/login', credentials).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};

const getCurrentUser = persistToken => {
  token.set(persistToken);
  return axios.get('/users/current').then(({ data }) => {
    return data;
  });
};

const logOutUser = () => {
  axios.post('/users/logout');
  token.unset();
};

const phoneBookApi = {
  getContacts,
  addContact,
  deleteContact,
  editContact,
  registerNewUser,
  loginUser,
  getCurrentUser,
  logOutUser,
};
export default phoneBookApi;
