import router from '@/router';
import axios from 'axios';

const Instance_axios = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

Instance_axios.interceptors.request.use(
    (request) => request,
    (error) => Promise.reject(error)
);

Instance_axios.interceptors.response.use(
    function (response) {
        // Cualquier código de estado que este dentro del rango de 2xx causa la ejecución de esta función
        // Haz algo con los datos de la respuesta
        return response;
    },
    function (error) {
        // Cualquier código de estado que este fuera del rango de 2xx causa la ejecución de esta función
        // Haz algo con el error
        //console.log(error.response.data.detail);
        if (error.response.data.detail == 'Incorrect email or password') {
            //router.push('/login');
        }
        return Promise.reject(error);
    }
);

export default Instance_axios;
