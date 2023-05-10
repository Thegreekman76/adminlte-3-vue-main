/* eslint-disable prettier/prettier */
import axios from '@/utils/axios';
import {IUser, IUserUpdate, IUserCreate} from './interfaces/user';

function authHeaders(token: string) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
}

export const api = {
    async logInGetToken(username: string, password: string) {
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);

        return axios.post(`login/access-token`, params);
    },
    async getMe(token: string) {
        console.log(authHeaders(token));
        return axios.get<IUser>(`users/me`, authHeaders(token));
    },
    async updateMe(token: string, data: IUserUpdate) {
        return axios.put<IUser>(`users/me`, data, authHeaders(token));
    },
    async getUsers(token: string) {
        
        return axios.get<IUser[]>(`users/`, authHeaders(token));
    },
    async updateUser(token: string, userId: number, data: IUserUpdate) {
        return axios.put(`users/${userId}`, data, authHeaders(token));
    },
    async createUser(token: string, data: IUserCreate) {
        return axios.post(`users/`, data, authHeaders(token));
    },
    async passwordRecovery(email: string) {
        return axios.post(`password-recovery/${email}`);
    },
    async resetPassword(password: string, token: string) {
        return axios.post('reset-password/', {
            new_password: password,
            token
        });
    }
};
