import axios from 'axios';

const AxiosAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://usemytechstuffmb.herokuapp.com',
    // headers: {
    //   Authorization: token
    // }
  });
};

export default AxiosAuth;
