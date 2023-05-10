/* eslint-disable no-async-promise-executor */
import {sleep, saveLocalToken, getLocalToken} from './helpers';
import {api} from '@/api';
import $store from '@/store';

export const authLogin = (email: string, password: string) => {
    return new Promise(async (res, rej) => {
        await sleep(500);
        /* greekman */
        try {
            const response = await api.logInGetToken(email, password);
            const token = response.data.access_token;
            if (token) {
                saveLocalToken(response.data.access_token);
                localStorage.setItem(
                    'authentication',
                    JSON.stringify({profile: {email: email}})
                );
                try {
                    const response = await api.getMe(getLocalToken());
                    if (response.data) {
                        $store.dispatch('user/setUser', response);
                    }
                } catch (error) {
                    return rej({message: 'Credentssssals are wrong!'});
                }
                return res({profile: {email: email}});
            } else {
                return rej({message: 'Credentials are wrong!'});
            }
        } catch (error) {
            return rej({message: 'Credentials are wrong!'});
        }
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
