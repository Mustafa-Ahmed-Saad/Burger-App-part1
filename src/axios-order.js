import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://react-my-burger-94116-default-rtdb.firebaseio.com/',
});

export let kkFun = 'main';

export default axiosInstance;
