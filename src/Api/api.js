import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://44.202.38.56:3000',
});