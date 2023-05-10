import {createStore} from 'vuex';

import authModule from './auth';
import uiModule from './ui';
import payloadModule from './payload';
import userModule from './user';

export default createStore({
    modules: {
        auth: authModule,
        ui: uiModule,
        payload: payloadModule,
        user: userModule
    }
});
