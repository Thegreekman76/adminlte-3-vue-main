/* eslint-disable no-async-promise-executor */
//import {UserManager, UserManagerSettings} from 'oidc-client-ts';
import {sleep} from './helpers';
import instance from '@/utils/axios';
//import {Component, Vue, Watch} from 'vue-facing-decorator';
//import {IPayload} from '@/interfaces/payload';

export const authLogin = (email: string, password: string) => {
    return new Promise(async (res, rej) => {
        await sleep(500);
        /* greekman */
        const payloads = new URLSearchParams();
        payloads.append('username', email);
        payloads.append('password', password);
        await instance
            .post('login/access-token', payloads)
            .then(function (response) {
                console.log(response.data.access_token);
                // greekman
                localStorage.setItem(
                    'payload',
                    'Bearer: ' + response.data.access_token
                );
                console.log('Payload= ' + localStorage.getItem('payload'));
                localStorage.setItem(
                    'authentication',
                    JSON.stringify({profile: {email: email}})
                );
                return res({profile: {email: email}});
            })
            .catch(function (error) {
                if (error.response) {
                    // La respuesta fue hecha y el servidor respondió con un código de estado
                    // que esta fuera del rango de 2xx
                    console.log(error.response.data);
                    return rej({message: 'Credentials are wrong!'});
                    //console.log(error.response.status);
                    //console.log(error.response.headers);
                } else if (error.request) {
                    // La petición fue hecha pero no se recibió respuesta
                    // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
                    // http.ClientRequest en node.js
                    console.log(error.request);
                } else {
                    // Algo paso al preparar la petición que lanzo un Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    });
};

export const getAuthStatus = () => {
    return new Promise(async (res) => {
        await sleep(500);
        try {
            let authentication = localStorage.getItem('authentication');
            if (authentication) {
                authentication = JSON.parse(authentication);
                return res(authentication);
            }
            return res(undefined);
        } catch (error) {
            return res(undefined);
        }
    });
};
