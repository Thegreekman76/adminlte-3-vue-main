import {IPayload} from '@/interfaces/payload';

export default {
    setPayload: (state: IPayload, payload: string): void => {
        state.token = payload;
    }
};
