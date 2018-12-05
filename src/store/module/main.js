export default {
    namespaced: true,
    state: {
        showShare : false
    },
    mutations :{
        switchShowShare (state,value) {
            state.showShare = value;
        }
    }
}