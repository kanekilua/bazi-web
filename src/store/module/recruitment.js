export default {
    namespaced: true,
    state: {
        masterInfo : null
    },
    mutations :{
        updateMasterInfo (state,value) {
            state.masterInfo = value;
        }
    }
}