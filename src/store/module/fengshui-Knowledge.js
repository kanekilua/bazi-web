export default {
    namespaced: true,
    state: {
        navIndex : 0,
        activeBtn : "家居风水",
    },
    mutations :{
        updateNavIndex (state,value) {
            state.navIndex = value;
        },
        updateActiveBtn (state,value) {
            state.activeBtn = value
        }
    }
}