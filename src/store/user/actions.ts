import {IUser} from '@/interfaces/user';

export default {
    setUser: (context: any, user: IUser): void => {
        context.commit('setUser', user);
    }
};
