import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-ca0fc.firebaseio.com/'
});

export default instance;