import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import {IPayload} from '@/interfaces/payload';

const ipayloadModule: IPayload = {
    namespaced: true,
    token: undefined,
    mutations,
    actions,
    getters
};

export default ipayloadModule;
