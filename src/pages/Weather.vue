<template>
    <div class="weather-wrap">
        <v-title-header :backLink="backLink">
            <div class="position"  @click="$jump('/main/calendar/weather/province')">
                <i class="position-icon"></i>
                <div>{{weather.city}}</div>
                <i class="unfold-icon"></i>
            </div>
        </v-title-header>
        <div class="content-wrap">
            <div class="weather-info">
                <div>20℃</div>
                <div>{{weather.city}}</div>
                <div>{{night ? weather.weather[0].cond_txt_n : weather.weather[0].cond_txt_d}}</div>
                <div>{{weather.weather[0].tmp_min}}℃~{{weather.weather[0].tmp_max}}℃</div>
                <div>空气{{weather.air}}</div>
            </div>
            <div class="weather-detail">
                <div class="item-list">
                    <div class="item" v-for="(item,index) in weather.hour_weather" :key="index">
                        <div>{{item.hour}}</div>
                        <div class="center" :style="{backgroundImage: 'url(' + item.icon + ')'}"></div>
                        <div>{{item.tmp}}℃</div>
                    </div>
                </div>
                
            </div>
            <div class="weather-pre">
                <div class="pre" v-for="(item,index) in weather.weather" :key="index" v-show="index > 0">
                    <div>{{item.date}}{{item.weekday}}</div>
                    <div class="center" :style="{backgroundImage: 'url(' + item.icon + ')'}"></div>
                    <div>{{item.tmp_min}}℃/{{item.tmp_max}}℃</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            backLink : '/main/calendar',
            weather : {},
            night : false,
            imgList : [
                require('../assets/image/calendar-weather/weather-200.png'),
                require('../assets/image/calendar-weather/weather-300.png'),
                require('../assets/image/calendar-weather/weather-400.png'),
            ]
        }
    },
    created () {
        this.init();
    },
    methods: {
        init : function () {
            //引出对global的引用
            var app = global.APP_NAME;

            var now = new Date();
            var hour = now.getHours();
            var night;
            if(hour >= 6 && hour <= 18 ) {
                night = false;
            }else {
                night = true;
            }
            // this.weather = this.$store.state.weather.weather;
            var weatherData = {};
            weatherData.weekday = this.$store.state.weather.weekday;
            weatherData.air = this.$store.state.weather.weather.air.HeWeather6[0].air_now_city.qlty;
            weatherData.city = this.$store.state.weather.weather.weather.HeWeather6[0].basic.location;
            weatherData.weather = this.$store.state.weather.weather.weather.HeWeather6[0].daily_forecast;
            weatherData.hour_weather = this.$store.state.weather.weather.hour_weather.HeWeather6[0].hourly;
            // 修改weatherData里面为每天增加星期几
            const weekStrArray = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
            var todayWeek = -1;
            for(var i = 0;i < weekStrArray.length; ++i) {
                if(weekStrArray[i] === weatherData.weekday) {
                    todayWeek = i;
                    break;
                }
            }
            for(var i = 0; i < weatherData.weather.length; ++i) {
                var dateArr = weatherData.weather[i].date.split('-');
                if(dateArr.length > 1) {
                    weatherData.weather[i].date = dateArr[1] + '月' + dateArr[2] + '日';
                }

                weatherData.weather[i].icon = night ? 
                    weatherData.weather[i].cond_code_n === 100 ||  weatherData.weather[i].cond_code_n === 101 ? 
                    require('../assets/image/calendar-weather/' + global.WEATHER[weatherData.weather[i].cond_code_n + '-n'] + '.png') : 
                    require('../assets/image/calendar-weather/' + global.WEATHER[weatherData.weather[i].cond_code_n] + '.png') : 
                    require('../assets/image/calendar-weather/' + global.WEATHER[weatherData.weather[i].cond_code_d] + '.png');

                weatherData.weather[i].weekday = weekStrArray[todayWeek];
                if(todayWeek + 1 === 7) {
                    todayWeek = 0;
                }else {
                    todayWeek++;
                }
            }
            for (let i = 0 ;i < weatherData.hour_weather.length ; ++i) {
                let hourWeatherItem = weatherData.hour_weather[i];
                hourWeatherItem.hour = hourWeatherItem.time.split(' ')[1];
                let hourNum = hourWeatherItem.hour.split(':')[0];
                hourWeatherItem.icon = !(parseInt(hourNum) >= 6 && parseInt(hourNum) <= 18) ? 
                    (hourWeatherItem.cond_code === '100' ||  hourWeatherItem.cond_code === '101' ? 
                    require('../assets/image/calendar-weather/' + global.WEATHER[hourWeatherItem.cond_code + '-n'] + '.png') : 
                    require('../assets/image/calendar-weather/' + global.WEATHER[hourWeatherItem.cond_code] + '.png')) : 
                    require('../assets/image/calendar-weather/' + global.WEATHER[hourWeatherItem.cond_code] + '.png');
                weatherData.hour_weather[i] = hourWeatherItem;
            }
            this.weather = weatherData;
        }
    }
}
</script>
<style lang="less" scoped>
.weather-wrap {
    width: 100%;
    background: url('../assets/image/calendar-weather/cloudy-bg.png') no-repeat center center / 100% auto;
    /deep/ .title {
        font-size: 34/75rem !important;
        color : #000 !important;
        font-weight: normal !important;
    }
    .position {
        width: 180/75rem;
        .flex-between();
        .position-icon {
            width: 38/75rem;
            height: 44/75rem;
            background: url('../assets/image/calendar-weather/position.png') no-repeat center center / 100% 100%;
        }
        .unfold-icon {
            width: 22/75rem;
            height: 11/75rem;
            background: url('../assets/image/calendar-weather/unfold.png') no-repeat center center / 100% 100%;
        }
    }
    .content-wrap {
        width: 100%;
        padding-top: 90/75rem;
        padding-bottom: 10/75rem;
        .border-box();
        .center {
            height: 44/75rem;
            margin : 15/75rem 0 25/75rem 0;
            background-repeat: no-repeat;
            background-size: auto 55/75rem;
            background-position: center;
        }
        .weather-info {
            width: 100%;
            font-size: 32/75rem;
            padding: 58/75rem 0 58/75rem 0 ;
            div:nth-child(1) {
                height: 170/75rem;
                font-size: 122/75rem;
            }
            & > div {
                width: 50%;
                height: 45/75rem;
                margin: 0 auto 10/75rem auto;
                font-size: 32/75rem;
                text-align: center;
            }
        }
        .weather-detail {
            width: 100%;
            padding: 25/75rem 0;
            border-bottom: 1px solid #eee;
            overflow-x: scroll;
            .item-list {
                width: 150%;
                .flex-start();
                .item {
                    width: 300/75rem;
                    height: 150/75rem;
                    font-size: 24/75rem;
                    text-align : center;
                }
            }
            
        }
        .weather-pre {
            padding: 0 15/75rem 0 15/75rem;
            font-size: 24/75rem;
            .pre {
                .flex-between();
                div:nth-last-child(1) {
                    text-align: right;
                }
                & > div{
                    width: 33.33%;
                }
            }
            .more {
                width: 100%;
                text-align: center;
            }
        }
    }
}
</style>


