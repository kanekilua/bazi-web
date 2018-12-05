export default {
    namespaced: true,
    state: {
        navIndex : 0,
        baziUserInfo : {}
    },
    mutations :{
        updateNavIndex (state,value) {
            state.navIndex = value;
        },
        updateBaziUserInfo (state,value) {
            state.baziUserInfo = value;
        }
    }
}