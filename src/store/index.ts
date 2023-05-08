import {createStore} from 'vuex';
import authModule from './auth';
import uiModule from './ui';
import payloadModule from './payload';

export default createStore({
    modules: {
        auth: authModule,
        ui: uiModule,
        payload: payloadModule
    }
});
