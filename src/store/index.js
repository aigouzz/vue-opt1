import Vuex from 'vuex'
import Vue from 'vue'
/*eslint-disable */
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        isLogin: localStorage.getItem('isLogin'),
        loginName: localStorage.getItem('loginName')
    },
    getters: {
        userInfo(state) {
            return {
                name: localStorage.getItem('loginName') || 'default name',
                id: localStorage.getItem('loginId') || 0
            }
        }
    },
    mutations: {
        setLogin(state, payload) {
            state.isLogin = payload;
            localStorage.setItem('isLogin', payload)
        },
        setLoginName(state, payload) {
            state.loginName = payload
            localStorage.setItem('loginName', payload)
        },
    },
})
