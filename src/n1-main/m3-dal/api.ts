import axios from 'axios';


export const instance = axios.create({
    baseURL: 'http://localhost:7542/1.0/'
})
