/* eslint-disable prettier/prettier */
import  Instance_axios from '@/utils/axios';
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
        
        return Instance_axios.post(`login/access-token`, params);
        
    },
    async getMe(token: string) {
        console.log(authHeaders(token));
        return Instance_axios.get<IUser>(`users/me`, authHeaders(token));
    },
    async updateMe(token: string, data: IUserUpdate) {
        return Instance_axios.put<IUser>(`users/me`, data, authHeaders(token));
    },
    async getUsers(token: string) {
        
        return Instance_axios.get<IUser[]>(`users/`, authHeaders(token));
    },
    async updateUser(token: string, userId: number, data: IUserUpdate) {
        return Instance_axios.put(`users/${userId}`, data, authHeaders(token));
    },
    async createUser(token: string, data: IUserCreate) {
        return Instance_axios.post(`users/`, data, authHeaders(token));
    },
    async passwordRecovery(email: string) {
        return Instance_axios.post(`password-recovery/${email}`);
    },
    async resetPassword(password: string, token: string) {
        return Instance_axios.post('reset-password/', {
            new_password: password,
            token
        });
    }
};
