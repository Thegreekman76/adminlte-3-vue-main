import {IUser} from '@/interfaces/user';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const userModule: IUser = {
    namespaced: true,
    id: null,
    is_active: null,
    is_superuser: null,
    email: null,
    full_name: null,
    getters,
    mutations,
    actions
};

export default userModule;
