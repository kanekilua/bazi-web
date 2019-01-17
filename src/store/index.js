import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import fortune from "./module/fortune"
import bazi from "./module/bazi"
import peach from "./module/peach"
import love from "./module/love"
import fengshuiKnowledge from "./module/fengshui-knowledge"
import xiangshu from "./module/xiangshu"
import zhougongHome from "./module/zhougong-Home"
import nameHome from "./module/name-home"
import familyNameInner from "./module/familyname-inner"
import weather from "./module/weather"
import recruitment from "./module/recruitment"


export default new vuex.Store ({
    state : {
        loginAccount : '',
        deepLink : '',
        loginAccountInfo : null
    },
    modules : {
        fortune: fortune,
        bazi : bazi,
        peach : peach,
        love : love,
        fengshuiKnowledge : fengshuiKnowledge,
        xiangshu : xiangshu,
        zhougongHome : zhougongHome,
        nameHome : nameHome,
        familyNameInner : familyNameInner,
        weather : weather,
        recruitment : recruitment
    },
    mutations: {
        updateLoginAccount: function (state,value) {
            state.loginAccount = value;
        },
        updateDeepLink : function (state ,value) {
            state.deepLink = value;
        },
        updateLoginAccountInfo : function (state,value) {
            state.loginAccountInfo = value;
            
            let appAccountInfo = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO));
            appAccountInfo[state.loginAccount] = value;
            localStorage.setItem(global.APP_ACCOUNT_INFO,JSON.stringify(appAccountInfo));
        }
    },
    actions : {
    }
})