import axios from 'axios';

const intance = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

intance.interceptors.request.use(
    (request) => request,
    (error) => Promise.reject(error)
);

intance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default intance;
