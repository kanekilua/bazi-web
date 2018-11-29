export default {
    namespaced: true,
    state: {
        baziUserInfo : {}
    },
    mutations :{
        updateBaziUserInfo (state,value) {
            state.baziUserInfo = value;
        }
    }
}