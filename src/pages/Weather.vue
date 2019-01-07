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
                <div class="item">
                    <div>下午1：00</div>
                    <div class="center" :style="{backgroundImage: 'url(' + imgList[0] + ')'}"></div>
                    <div>25℃</div>
                </div>
                <div class="item">
                    <div>下午2：00</div>
                    <div class="center" :style="{backgroundImage: 'url(' + imgList[1] + ')'}"></div>
                    <div>25℃</div>
                </div>
                <div class="item">
                    <div>下午3：00</div>
                    <div class="center" :style="{backgroundImage: 'url(' + imgList[2] + ')'}"></div>
                    <div>24℃</div>
                </div>
                <div class="item">
                    <div>下午4：00</div>
                    <div class="center" :style="{backgroundImage: 'url(' + imgList[1] + ')'}"></div>
                    <div>23℃</div>
                </div>
                <div class="item">
                    <div>傍晚5：00</div>
                    <div class="center" :style="{backgroundImage: 'url(' + imgList[1] + ')'}"></div>
                    <div>23℃</div>
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
            weatherData.weekday = this.$store.state.weather.weather.weekday;
            weatherData.air = this.$store.state.weather.weather.air.HeWeather6[0].air_now_city.qlty;
            weatherData.city = this.$store.state.weather.weather.weather.HeWeather6[0].basic.location;
            weatherData.weather = this.$store.state.weather.weather.weather.HeWeather6[0].daily_forecast;
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

                weatherData.weather[i].icon = night ? require('../assets/image/calendar-weather/' + global.WEATHER[weatherData.weather[i].cond_code_n] + '.png') : require('../assets/image/calendar-weather/' + global.WEATHER[weatherData.weather[i].cond_code_d] + '.png');

                weatherData.weather[i].weekday = weekStrArray[todayWeek];
                if(todayWeek + 1 === 7) {
                    todayWeek = 0;
                }else {
                    todayWeek++;
                }
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
            .flex-around();
            .item {
                width: 116/75rem;
                height: 150/75rem;
                font-size: 24/75rem;
                text-align : center;
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


