import Axios from 'axios';

const mockAPI = Axios.create({
  baseURL: 'https://66204fea3bf790e070af8763.mockapi.io/maro',
});

const getContacts = async () => {
  try {
    const res = await mockAPI.get('/contacts');
    return res;
  } catch (error) {
    return error;
  }
};

const postContact = async data => {
  try {
    const res = await mockAPI.post('/contacts', data);
    return res;
  } catch (error) {
    return error;
  }
};

const deleteContact = async id => {
  try {
    const res = await mockAPI.delete(`/contacts/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};

const API = {
  getContacts,
  postContact,
  deleteContact,
};

export default API;
