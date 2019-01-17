export default {
    namespaced: true,
    state: {
        weather : {'weather': {'HeWeather6' : [{'basic': { 'location' : ''} , 'daily_forecast' : [{'tmp_min' : ''}]}]}},
        weekday : ''
    },
    mutations :{
        updateWeather (state,value) {
            state.weather = value;
        },
        updateWeekday (state,value) {
            state.weekday = value;
        }
    }
}