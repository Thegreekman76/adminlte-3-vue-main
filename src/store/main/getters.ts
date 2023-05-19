/* eslint-disable prettier/prettier */
import {MainState} from './state';
import {getStoreAccessors} from 'typesafe-vuex';
import {State} from '../state';

export const getters = {
    userProfile: (state: MainState) => state.userProfile,
    token: (state: MainState) => state.token
};

const {read} = getStoreAccessors<MainState, State>('');

export const readToken = read(getters.token);
export const readUserProfile = read(getters.userProfile);
