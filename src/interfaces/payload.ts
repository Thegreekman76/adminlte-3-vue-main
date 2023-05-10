import {IUser} from './user';

export interface IPayload {
    namespaced: boolean;
    token: string;
    mutations: any;
    actions: any;
    getters: any;
}
