import {IUser} from './user';

export interface IPayload {
    namespaced: boolean;
    token: string;
    //user: IUser;
    mutations: any;
    actions: any;
    getters: any;
}
