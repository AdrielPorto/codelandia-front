import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://44.202.38.56:3000',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

