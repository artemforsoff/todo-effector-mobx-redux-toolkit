import axiosFactory from 'axios';
import { sleep } from './utility';

const axios = axiosFactory.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

axios.interceptors.request.use(async (config) => {
    await sleep(1000);
    return config;
});

export { axios };
