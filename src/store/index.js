import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import fortune from "./module/fortune"
import bazi from "./module/bazi"
import peach from "./module/peach"

export default new vuex.Store ({
    state : {
        loginAccount : '',
    },
    modules : {
        fortune: fortune,
        bazi : bazi,
        peach : peach
    },
    mutations: {
        updateLoginAccount: function (state,value) {
            state.loginAccount = value;
        }
    },
    actions : {
    }
})