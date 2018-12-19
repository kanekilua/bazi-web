<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            <div class="title-header"><h2>{{dateInfo.year}}.{{dateInfo.month}}.{{dateInfo.day}}</h2><i></i></div>
            <div slot="icon" class="today"></div>
        </v-title-header> 
        <div class="content-wrap">
            <div class="date-info">
                <div class="arrow arrow-left"></div>
                <div class="date">
                    <div class="lunar-info">农历 {{dateInfo.lunarMonthName}} {{dateInfo.lunarDayName}}日</div>
                    <div class="solar-info"><span>二○一八年</span><span>星期四</span></div>
                </div>
                <div class="arrow arrow-right"></div>
            </div>
            <div class="info-content">
                <div class="xingzuo-shengxiao">
                    <div class="key-value">星座<span>射手座</span></div>
                    <div class="key-value">生肖<span>{{dateInfo.zodiac}}</span></div>
                </div>
                <div class="lunar-info-title">
                    <div><span>干支</span></div>
                    <div><span>纳音</span></div>
                    <div><span>旬空</span></div>
                </div>
                <div class="lunar-info-content">
                    <div>
                        <div v-for="(item,index) in ganzhiInfo" :key="index"><span>{{item}}</span></div>
                    </div>
                    <div>
                        <div v-for="(item,index) in dataList" :key="index"><span>{{item}}</span></div>
                    </div>
                    <div>
                        <div v-for="(item,index) in dataList" :key="index"><span>{{item}}</span></div>
                    </div>
                </div>
                <div class="lunar-info-title">
                    <div><span>值神</span></div>
                    <div><span>吉神</span></div>
                    <div><span>凶神</span></div>
                </div>
                <div class="lunar-info-content">
                    <div>
                        <div v-for="(item,index) in dataList" :key="index"><span>{{item}}</span></div>
                    </div>
                    <div>
                        <div v-for="(item,index) in dataList" :key="index"><span>{{item}}</span></div>
                    </div>
                    <div>
                        <div v-for="(item,index) in dataList" :key="index"><span>{{item}}</span></div>
                    </div>
                </div>
            </div>
            <div class="lunar-yi-ji">
                <div class="lunar-yiji-common lunar-yi">
                    <div class="left">宜</div>
                    <div class="right"><span v-for="(item,index) in yiList" :key="index">{{item}}</span></div>
                </div>
                <div class="lunar-yiji-common lunar-ji">
                    <div class="left">忌</div>
                    <div class="right"><span v-for="(item,index) in jiList" :key="index">{{item}}</span></div>
                </div>
            </div>
            <div class="lunar-info-2">
                <div class="lunar-info-wrap">
                    <div class="info-content-wrap">
                        <div><span>今日胎神</span><i></i></div>
                        <div>仓库炉外西南</div>
                    </div>
                    <div class="info-content-wrap">
                        <div><span>彭祖百忌</span><i></i></div>
                        <div>壬不汲水 申不安床</div>
                    </div>
                    <div class="info-content-wrap">
                        <div><span>十二神</span><i></i></div>
                        <div>收执位</div>
                    </div>
                </div>
                <div class="lunar-info-wrap">
                    <div class="info-content-wrap">
                        <div><span>九星</span><i></i></div>
                        <div>九紫-天乙星(火)</div>
                    </div>
                    <div class="info-content-wrap">
                        <div><span>星宿</span><i></i></div>
                        <div>西方奎木狼-凶</div>
                    </div>
                    <div class="info-content-wrap">
                        <div><span>日禄</span><i></i></div>
                        <div>亥命是互禄 庚命进禄</div>
                    </div>
                </div>
                <div class="lunar-info-wrap">
                    <div class="info-content-wrap">
                        <div><span>六曜</span><i></i></div>
                        <div>大安</div>
                    </div>
                    <div class="info-content-wrap">
                        <div><span>相冲</span><i></i></div>
                        <div>猴日冲(丙寅)虎</div>
                    </div>
                    <div class="info-content-wrap">
                        <div><span>大殓吉时</span><i></i></div>
                        <div>宜用未、申、亥时</div>
                    </div>
                </div>
                <div class="jinrichonghe">
                    <header class="header">今日冲合</header>
                    <div class="content">与肖虎相冲，与肖虎相刑，与肖猪相害，与肖蛇相破 ，与肖蛇相合，与肖鼠肖龙三合，与肖蛇六合</div>
                </div>
                <div class="xishen">
                    <div class="xishen-line">
                        <div class="xishen-wrap">
                            <div class="title">喜神</div>
                            <div class="content">正南</div>
                        </div>
                        <div class="xishen-wrap">
                            <div class="title">喜神</div>
                            <div class="content">正南</div>
                        </div>
                        <div class="xishen-wrap">
                            <div class="title">喜神</div>
                            <div class="content">正南</div>
                        </div>
                    </div>
                    <div class="xishen-line">
                        <div class="xishen-wrap">
                            <div class="title">喜神</div>
                            <div class="content">正南</div>
                        </div>
                        <div class="xishen-wrap">
                            <div class="title">喜神</div>
                            <div class="content">正南</div>
                        </div>
                        <div class="xishen-wrap">
                            <div class="title">喜神</div>
                            <div class="content">正南</div>
                        </div>
                    </div>
                    <div class="xishen-line">
                        <div class="xishen-wrap">
                            <div class="title">喜神</div>
                            <div class="content">正南</div>
                        </div>
                        <div class="xishen-wrap">
                            <div class="title">喜神</div>
                            <div class="content">正南</div>
                        </div>
                        <div class="xishen-wrap">
                            <div class="title">喜神</div>
                            <div class="content">正南</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jishi">
                <v-title-nav>
                    <h2 slot="title">当日吉时</h2>
                    <div slot="more"></div>
                </v-title-nav>
                <div class="content">
                    <div v-for="(item,index) in jishiList" :key="index" class="item" :style="{'text-align':index%3===0 ?'left':index%3===1?'center':'right'}">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
        <button class="save-btn">立刻分享</button>
    </div>
</template>
<script>
export default {
    created () {
        this.init();
    },
    data () {
        return {
            dateInfo : {},
            ganzhiInfo : [],
            dataList : ['戊戌年','癸亥月','壬申日'],
            yiList : ['沐浴','清扫','伐木'],
            jiList : [
                '祈福','祈福','祈福','祈福','祈福','祈福','祈福','祈福',
                '祈福','祈福','祈福','祈福','祈福','祈福','祈福','祈福',
                '祈福','祈福','祈福','祈福','祈福','祈福'
            ],
            jishiList : [
                '23:00-00:59','03:00-04:59','11:00-12:59','13:00-14:59','17:00-18:59'
            ]
        }
    },
    methods : {
        init : function () {
            this.dateInfo = this.$route.params.dateInfo;
            console.log(this.dateInfo);
            this.ganzhiInfo = [this.dateInfo.GanZhiYear + "年",this.dateInfo.GanZhiMonth + "月", this.dateInfo.GanZhiDay + "日"];
        }
    }
}
</script>
<style lang="less" scoped>
.title-header {
    .flex-start();
    h2 {
        font-size: 40/75rem;
        color: @baseColor;
    }
    i {
        width: 24/75rem;
        height: 24/75rem;
        background: url('../assets/image/calendar-detail/arrow-down.png') no-repeat center center / 100% 100%;
        margin-left: 31/75rem;
    }
} 
.today {
    width: 44/75rem;
    height: 44/75rem;
    background: url('../assets/image/calendar-detail/today.png') no-repeat center center / 100% 100%;
}
.content-wrap {
    position: absolute;
    top: 169/75rem;
    bottom: 110/75rem;
    left: 0;
    width: 100%;
    overflow: auto;
    .border-box();
    .date-info {
        height: 152/75rem;
        .border-box();
        .flex-between();
        padding: 32/75rem;
        border-bottom: 1px solid #eee;
        .arrow {
            width: 57/75rem;
            height: 88/75rem;
        }
        .arrow-left {
            background: url("../assets/image/calendar-detail/arrow-left.png") no-repeat center center / 100% 100%;
        }
        .arrow-right {
            background: url("../assets/image/calendar-detail/arrow-right.png") no-repeat center center / 100% 100%;
        }
        .date {
            color : @baseColor;
            .lunar-info {
                font-size: 32/75rem;
                font-weight: bold;
                margin-bottom: 5/75rem;
            }
            .solar-info {
                font-size: 26/75rem;
                .flex-between();
                & > span {
                    display: inline-block;
                }
            }
        }
    }
    .info-content {
        padding : 24/75rem 41/75rem;
        .border-box();
        border-bottom: 1px solid #eee;
        .xingzuo-shengxiao {
            .flex-around();
            .key-value {
                font-size: 32/75rem;
                font-weight: bold;
                color: @baseColor;
                & > span {
                    display: inline-block;
                    color:rgba(0,0,0,0.5);
                    margin-left: 32/75rem;
                }
            }
        }
        .lunar-info-title {
            .flex-between();
            margin-top: 24/75rem;
            & > div{
                width:220/75rem;
                height:50/75rem;
                box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                text-align: center;
                & > span {
                    line-height: 50/75rem;
                    font-size: 26/75rem;
                    color : @baseColor;
                    font-weight: bold;
                    opacity:0.8;
                }
            }
            div:nth-child(1) {
                border-radius:20/75rem 0 0 20/75rem;
            }
            div:nth-child(2) {
                border-radius:0;
            }
            div:nth-child(3) {
                border-radius:0 20/75rem 20/75rem 0;
            }
        }
        .lunar-info-content {
            .flex-around();
            margin-top : 10/75rem;
            & > div{
                width:220/75rem;
                & > div {
                    height:50/75rem;
                    .flex-col();
                    & > span {
                        line-height: 50/75rem;
                        font-size: 24/75rem;
                    }
                }
            }
        }
    }
    .lunar-yi-ji {
        .border-box();
        padding : 20/75rem 7/75rem 20/75rem 32/75rem;
        border-bottom: 1px solid #eee;
        .lunar-yiji-common {
            .flex-start-only();
            .left {
                width: 64/75rem;
                height: 64/75rem;
                .round(50%);
                color: #fff;
                line-height: 64/75rem;
                text-align: center;
                font-size: 32/75rem;
                margin-right: 32/75rem;
            }
            .right {
                width: 90%;
                line-height: 58/75rem;
                & > span {
                    width: 12.5%;
                    display: inline-block;
                    font-size: 24/75rem;
                }
            }
        }
        .lunar-yi {
            .left {
                background-color: #FDC52E;
            }
        }
        .lunar-ji {
            margin-top: 30/75rem;
            .left {
                background-color: @baseColor;
            }
        }
    }
    .lunar-info-2 {
        width:90%;
        margin:0 auto;
        padding: 30/75rem 0;
        border-bottom: 1px solid #eee;
        .lunar-info-wrap:nth-child(1) {
            margin-top: 0;
        }
        .lunar-info-wrap {
            margin:34/75rem auto 0 auto;
            .flex-around();
            .info-content-wrap {
                width: 33.33%;
                div:nth-child(1) {
                    font-size: 26/75rem;
                    color : @baseColor;
                    text-align: center;
                }
                div:nth-child(2) {
                    font-size: 24/75rem;
                    margin-top: 30/75rem;
                    text-align: center;
                }
                & > div > i {
                    width: 10/75rem;
                    height: 20/75rem;
                    background: url("../assets/image/calendar-detail/enter.png") no-repeat center center / 100% 100%;
                    display: inline-block;
                    margin-left: 16/75rem;
                }
            }
        }
        .jinrichonghe {
            height:183/75rem;
            background:rgba(235,241,255,1);
            box-shadow:0px 3px 6px rgba(0,0,0,0.16);
            border-radius:30/75rem;
            .border-box();
            margin-top : 32/75rem;
            padding: 32/75rem 20/75rem 20/75rem 32/75rem;
            .header {
                color: @baseColor;
                font-size: 26/75rem;
                margin-bottom: 16/75rem;
            }
            .content { 
                font-size: 24/75rem;
            }
        }
        .xishen {
            margin-top: 19/75rem;
            .xishen-line {
                .flex-between();
                margin-top:33/75rem;
                .xishen-wrap {
                    width: 25%;
                    .flex-between();
                    .title { 
                        font-size: 26/75rem;
                        color: @baseColor;
                    }
                    .content {
                        font-size: 24/75rem;
                    }
                }
            }
        }
    }
    .jishi {
        width: 90%;
        margin: 0 auto;
        h2 {
            font-size: 28/75rem;
            font-weight: normal;
            color: @baseColor;
        }
        .content {
            .flex-start();
            flex-wrap:wrap;
            font-size: 24/75rem;
            .item:nth-child(1) {
                color: @baseColor;
            }
            .item {
                width: 33.33%;
                line-height: 50/75rem;
            }
        }
    }
}
</style>


