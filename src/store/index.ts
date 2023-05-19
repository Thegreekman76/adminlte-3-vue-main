import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';

import {createStore} from 'vuex';

import authModule from './auth';
import uiModule from './ui';
import payloadModule from './payload';

import {mainModule} from './main';
import {State} from './state';


const storeOptions: StoreOptions<State> = {
    modules: {
      auth: authModule,
      ui: uiModule,
      main: mainModule,
    },
  };
  
  export const store = new Vuex.Store<State>(storeOptions);
  
  export default store;

// export default createStore<StateInterface>({
//     modules: {
//         auth: authModule,
//         ui: uiModule,
//         payload: payloadModule,
//         user: userModule
//         //example: exampleModule
//     }
// });
