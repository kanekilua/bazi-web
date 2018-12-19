import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import fortune from "./module/fortune"
import bazi from "./module/bazi"
import peach from "./module/peach"
// popup
import main from "./module/main"
import love from "./module/love"
import fengshuiKnowledge from "./module/fengshui-Knowledge"
import xiangshu from "./module/xiangshu"
import zhougongHome from "./module/zhougong-Home"
import nameHome from "./module/name-home"
import familyNameInner from "./module/familyname-inner"

export default new vuex.Store ({
    state : {
        loginAccount : '',
    },
    modules : {
        fortune: fortune,
        bazi : bazi,
        peach : peach,
        // popup
        main : main,
        love : love,
        fengshuiKnowledge : fengshuiKnowledge,
        xiangshu : xiangshu,
        zhougongHome : zhougongHome,
        nameHome : nameHome,
        familyNameInner : familyNameInner,
    },
    mutations: {
        updateLoginAccount: function (state,value) {
            state.loginAccount = value;
        }
    },
    actions : {
    }
})