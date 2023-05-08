import {IPayload} from '@/interfaces/payload';

export default {
    payload: (token: IPayload): string => token.token
};
