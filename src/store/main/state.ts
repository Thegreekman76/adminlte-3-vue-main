/* eslint-disable prettier/prettier */
import {IUser} from '@/interfaces/user';

export interface MainState {
    token: string;
    userProfile: IUser | null;
    
}
