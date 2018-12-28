export default {
    namespaced: true,
    state: {
        navIndex : 0,
        showProvince : false,
        showMaleCity : false,
        showFemaleCity : false,
        hehunInputFlag : '1',
        maleCityList : [],
        femaleCityList : [],
        maleProvince : '省份',
        femaleProvince : '省份',
        maleCity : '城市',
        femaleCity : '城市'
    },
    mutations :{
        updateNavIndex (state,value) {
            state.navIndex = value;
        },
        updateShowProvince (state,value) {
            state.showProvince = value;
        },
        updateShowMaleCity (state,value) {
            state.showMaleCity = value;
        },
        updateShowFemaleCity (state,value) {
            state.showFemaleCity = value;
        },
        updateHehunInputFlag (state,value) {
            state.hehunInputFlag = value;
        },
        updateMaleCityList (state,value) {
            state.maleCityList = value;
        },
        updateFemaleCityList (state,value) {
            state.femaleCityList = value;
        },
        updateMaleProvince (state,value) {
            state.maleProvince = value;
        },
        updateFemaleProvince (state,value) {
            state.femaleProvince = value;
        },
        updateMaleCity (state,value) {
            state.maleCity = value;
        },
        updateFemaleCity (state,value) {
            state.femaleCity = value;
        }
    }
}