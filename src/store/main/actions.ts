/* eslint-disable prettier/prettier */
import {api} from '@/api';
import {getLocalToken, removeLocalToken, saveLocalToken} from '../../utils/helpers';
//import {AxiosError} from 'axios';
import {getStoreAccessors} from 'typesafe-vuex';
import {ActionContext} from 'vuex';
import {State} from '../state';
import {
    commitSetToken,
    commitSetUserProfile,
} from './mutations';
import {MainState} from './state';
import router from '@/router';

type MainContext = ActionContext<MainState, State>;

export const actions = {
    async actionLogIn(
        context: MainContext,
        payload: {username: string; password: string}
    ) {
        try {
            const response = await api.logInGetToken(
                payload.username,
                payload.password
            );
            const token = response.data.access_token;
            if (token) {
                saveLocalToken(token);
                commitSetToken(context, token);
                await dispatchGetUserProfile(context);
            } else {
                removeLocalToken();
                commitSetToken(context, '');
                //router.push('/login');
            }
        } catch (err) {
            //;
        }
    },
    async actionGetUserProfile(context: MainContext) {
        try {
            const response = await api.getMe(context.state.token);
            if (response.data) {
                commitSetUserProfile(context, response.data);
            }
        } catch (error) {
            //
        }
    },
    
};

const {dispatch} = getStoreAccessors<MainState | any, State>('');


export const dispatchGetUserProfile = dispatch(actions.actionGetUserProfile);
export const dispatchLogIn = dispatch(actions.actionLogIn);
