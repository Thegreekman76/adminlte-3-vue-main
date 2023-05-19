/* eslint-disable no-async-promise-executor */
import router from '@/router';
import {sleep, saveLocalToken, getLocalToken} from './helpers';
//import {api} from '@/api';
import $store from '@/store';
import {dispatchLogIn} from '@/store/main/actions';

export const authLogin = (email: string, password: string) => {
    return new Promise(async (res, rej) => {
        await sleep(500);

        dispatchLogIn($store, {username: email, password});
        
        if (getLocalToken() != null) {
            localStorage.setItem(
                'authentication',
                JSON.stringify({profile: {email: email}})
            );
            return res({profile: {email: email}});
        } else {
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
