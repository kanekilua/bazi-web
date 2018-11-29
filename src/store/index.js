import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import fortune from "./module/fortune"
import bazi from "./module/bazi"
import baziMingPan from "./module/bazi-mingpan"

export default new vuex.Store ({
    state : {
        loginAccount : '',
    },
    modules : {
        fortune: fortune,
        bazi : bazi,
        baziMingPan : baziMingPan
    },
    mutations: {
        updateLoginAccount: function (state,value) {
            state.loginAccount = value;
        }
    },
    actions : {
    }
})