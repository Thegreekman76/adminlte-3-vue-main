export default {
    setPayload: (context: any, payload: string): void => {
        context.commit('setPayload', payload);
    }
};
