import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://3.86.163.207:3000',
});
