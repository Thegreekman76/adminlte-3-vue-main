/* eslint-disable prettier/prettier */
import {IUser} from '@/interfaces/user';
import {MainState} from './state';
import {getStoreAccessors} from 'typesafe-vuex';
import {State} from '../state';

export const mutations = {
    setToken(state: MainState, payload: string) {
        state.token = payload;
    },
    setUserProfile(state: MainState, payload: IUser) {
        state.userProfile = payload;
    }
};

const {commit} = getStoreAccessors<MainState | any, State>('');

export const commitSetToken = commit(mutations.setToken);
export const commitSetUserProfile = commit(mutations.setUserProfile);
