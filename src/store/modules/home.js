/* eslint-disable */
export default {
    namespaced: true,
    state: {
        address: 'default address'
    },
    mutations: {
        setAddress(state, payload) {
            state.address = payload;
        }
    },
}