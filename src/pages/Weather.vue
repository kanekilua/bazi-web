<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            <div class="position">
                <i class="position-icon" @click="$jump('/main/calendar/weather/province')"></i>
                <div>福田</div>
                <i class="unfold-icon"></i>
            </div>
        </v-title-header>
        <div class="content-wrap">
            <div class="weather-wrap">
                <div class="weather-info">
                    <div class="temperature">20℃</div>
                    <div class="city">深圳福田</div>
                    <div class="weather">晴</div>
                    <div class="temperature-range">25℃~35℃</div>
                    <div class="air">空气良</div>
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
                    <div class="pre">
                        <div>12月4日明天</div>
                        <div class="center" :style="{backgroundImage: 'url(' + imgList[0] + ')'}"></div>
                        <div>25℃/32℃</div>
                    </div>
                    <div class="pre">
                        <div>12月5日星期三</div>
                        <div class="center" :style="{backgroundImage: 'url(' + imgList[2] + ')'}"></div>
                        <div>25℃/32℃</div>
                    </div>
                    <div class="pre">
                        <div>12月5日星期三</div>
                        <div class="center" :style="{backgroundImage: 'url(' + imgList[0] + ')'}"></div>
                        <div>25℃/32℃</div>
                    </div>
                    <div class="pre">
                        <div>12月5日星期三</div>
                        <div class="center" :style="{backgroundImage: 'url(' + imgList[2] + ')'}"></div>
                        <div>25℃/32℃</div>
                    </div>
                    <div class="pre">
                        <div>12月5日星期三</div>
                        <div class="center" :style="{backgroundImage: 'url(' + imgList[1] + ')'}"></div>
                        <div>25℃/32℃</div>
                    </div>
                    <div class="pre">
                        <div>12月5日星期三</div>
                        <div class="center" :style="{backgroundImage: 'url(' + imgList[2] + ')'}"></div>
                        <div>25℃/32℃</div>
                    </div>
                    <div class="pre">
                        <div>12月5日星期三</div>
                        <div class="center" :style="{backgroundImage: 'url(' + imgList[2] + ')'}"></div>
                        <div>25℃/32℃</div>
                    </div>
                    <div class="pre">
                        <div>12月5日星期三</div>
                        <div class="center" :style="{backgroundImage: 'url(' + imgList[0] + ')'}"></div>
                        <div>25℃/32℃</div>
                    </div>
                    <div class="pre">
                        <div>12月5日星期三</div>
                        <div class="center" :style="{backgroundImage: 'url(' + imgList[2] + ')'}"></div>
                        <div>25℃/32℃</div>
                    </div>
                    <div class="more">查看更多天预报</div>
                </div>
            </div>
            <div class="air-wrap">
                <v-title-nav>
                    <span slot="title" class="title">空气质量</span>
                    <div slot="more"></div>
                </v-title-nav>
                <div class="air-content">
                    <div class="air-left">
                        <div class="item">
                            <div>PM10</div>
                            <div>56</div>
                        </div>
                        <div class="item">
                            <div>PM2.5</div>
                            <div>30</div>
                        </div>
                        <div class="item">
                            <div>PM2.5</div>
                            <div>30</div>
                        </div>
                    </div>
                    <div class="air-center"></div>
                    <div class="air-right">
                        <div class="item">
                            <div>SO2</div>
                            <div>7</div>
                        </div>
                        <div class="item">
                            <div>O3</div>
                            <div>34</div>
                        </div>
                        <div class="item">
                            <div>CO</div>
                            <div>0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="life-wrap">
                <v-title-nav>
                    <span slot="title">今日生活指数</span>
                    <div slot="more"></div>
                </v-title-nav>
                <div class="life-content">
                    <div v-for="(item,index) in lifeList" :key="index" class="item" :style="{'margin-right': index%4===3 ? 0 : '8%'}">
                        <div class="icon" :style="{backgroundImage: 'url(' + item.icon + ')'}"></div>
                        <div class="label">{{item.label}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgList : [
                require('../assets/image/calendar-weather/sunny.png'),
                require('../assets/image/calendar-weather/cloudy.png'),
                require('../assets/image/calendar-weather/rain.png'),
            ],
            lifeList : [
                {icon : require('../assets/image/calendar-weather/qiche.png') , label : '天气较舒适'},
                {icon : require('../assets/image/calendar-weather/yusan.png') , label : '无需带伞'},
                {icon : require('../assets/image/calendar-weather/yao.png') , label : '少发感冒'},
                {icon : require('../assets/image/calendar-weather/taiyang.png') , label : '紫外线强'},
                {icon : require('../assets/image/calendar-weather/yijia.png') , label : '适宜晾晒'},
                {icon : require('../assets/image/calendar-weather/chenlian.png') , label : '较适宜晨练'},
                {icon : require('../assets/image/calendar-weather/diaoyu.png') , label : '适宜钓鱼'},
            ]
        }
    },
}
</script>
<style lang="less" scoped>
.wrap {
    width: 100%;
    background: url('../assets/image/calendar-weather/cloudy-bg.png') no-repeat center center / 100% auto;
    .position {
        width: 180/75rem;
        .flex-between();
        .position-icon {
            width: 38/75rem;
            height: 44/75rem;
            background: url('../assets/image/calendar-weather/position.png') no-repeat center center / 100% 100%;
        }
        .unfold-icon {
            width: 24/75rem;
            height: 24/75rem;
            background: url('../assets/image/calendar-weather/unfold.png') no-repeat center center / 100% 100%;
        }
    }
    .weather-wrap {
        width: 100%;
        padding-bottom: 30/75rem;
        border-bottom: 1px solid #eee;
        .center {
            height: 44/75rem;
            margin : 15/75rem 0 25/75rem 0;
            background-repeat: no-repeat;
            background-size: auto 44/75rem;
            background-position: center;
        }
        .weather-info {
            width: 100%;
            font-size: 32/75rem;
            padding: 68/75rem 0 108/75rem 0 ;
            .temperature {
                width: 258/75rem;
                height: 170/75rem;
                margin: 0 auto 0 auto;
                font-size: 122/75rem;
            }
            .city {
                width: 128/75rem;
                height: 45/75rem;
                margin: 7/75rem auto 0 auto;
            }
            .weather {
                width: 32/75rem;
                height: 45/75rem;
                margin : 15/75rem auto 0 auto;
            }
            .temperature-range {
                width: 152/75rem;
                height: 45/75rem;
                margin : 5/75rem auto 0 auto;
            }
            .air {
                width: 96/75rem;
                height: 45/75rem;
                margin : 10/75rem auto 0 auto;
            }
        }
        .weather-detail {
            width: 100%;
            .flex-around();
            .item {
                width: 116/75rem;
                height: 150/75rem;
                font-size: 24/75rem;
                text-align : center;
            }
        }
        .weather-pre {
            margin-top: 15/75rem;
            padding: 0 45/75rem 0 15/75rem;
            font-size: 24/75rem;
            .pre {
                .flex-between();
                div:nth-last-child(1) {
                    text-align: right;
                }
                & > div{
                    width: 180/75rem;
                }
            }
            .more {
                width: 100%;
                text-align: center;
            }
        }
    }
    .air-wrap {
        padding: 0 40/75rem 30/75rem 35/75rem;
        border-bottom: 1px solid #eee;
        font-size: 24/75rem;
        /deep/ .title {
            font-size: 24/75rem !important;
        }
        .air-content {
            .flex-between();
            margin-top: 20/75rem;
            & > div {
                width: 180/75rem;
            }
            .air-left {
                .item:nth-child(2) {
                    margin: 45/75rem 0;
                }
                .item {
                    .flex-around();
                }
            }
            .air-right {
                .air-left();
            }
        }
    }
    .life-wrap {
        margin-bottom: 84/75rem;
        font-size: 24/75rem;
        padding: 0 35/75rem 0 35/75rem !important;
        .border-box();
        /deep/ .title {
            font-size: 24/75rem !important;
        }
        .life-content {
            .flex-start();
            flex-wrap: wrap;
            .item {
                width: 19%;
                margin-top: 25/75rem;
                .icon {
                    width: 100%;
                    height: 44/75rem;
                    background-size: auto 44/75rem;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .label {
                    width: 100%;
                    margin-top: 25/75rem;
                    text-align: center;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>


