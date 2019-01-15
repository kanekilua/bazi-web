export default {
    namespaced: true,
    state: {
        navIndex : 0,
        baziUserInfo : {},
        hideText : true
    },
    mutations :{
        updateNavIndex (state,value) {
            state.navIndex = value;
        },
        updateBaziUserInfo (state,value) {
            state.baziUserInfo = value;
        },
        updateHideText (state,value) {
            state.hideText = value;
        }
    }
}