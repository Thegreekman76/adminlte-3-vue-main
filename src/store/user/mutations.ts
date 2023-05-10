import {IUser} from '@/interfaces/user';

export default {
    setUser: (state: IUser, payload: IUser): void => {
        state = payload;
    }
};
