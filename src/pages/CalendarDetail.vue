<template>
    <div class="calendar-detail-wrap">
        <v-title-header>
            <div class="title-header" @click="showDatePlugin(selectDay)"><h2>{{selectDay[0]}}.{{selectDay[1]}}.{{selectDay[2]}}</h2><i></i></div>
            <div slot="right-ico" class="today" @click="selectToday"></div>
        </v-title-header> 
        <div class="content-wrap">
            <div class="date-info">
                <div class="arrow arrow-left" :class="{'arrow-left-active':arrowActive[0]}" @touchstart="$set(arrowActive,0,true)" @touchend="$set(arrowActive,0,false)" @click="selectPre"></div>
                <div class="date">
                    <div class="lunar-info">农历 {{dateInfo.lunarMonthName}} {{dateInfo.lunarDayName}}日</div>
                    <div class="solar-info"><span>{{moreInfo.lunarYearName}}年</span><span class="month">{{moreInfo.week}}</span></div>
                </div>
                <div class="arrow arrow-right" :class="{'arrow-right-active':arrowActive[1]}" @touchstart="$set(arrowActive,1,true)" @touchend="$set(arrowActive,1,false)" @click="selectLater"></div>
            </div>
            <div class="info-content">
                <div class="xingzuo-shengxiao">
                    <div class="key-value">星座<span>{{moreInfo.xingzuo}}</span></div>
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
                        <div v-for="(item,index) in moreInfo.ganzhi.nayin" :key="index"><span>{{item}}</span></div>
                    </div>
                    <div>
                        <div v-for="(item,index) in moreInfo.ganzhi.xunkong" :key="index"><span>{{item}}</span></div>
                    </div>
                </div>
                <div class="lunar-info-title">
                    <div><span>值神</span></div>
                    <div><span>吉神</span></div>
                    <div><span>凶神</span></div>
                </div>
                <div class="lunar-info-content">
                    <div>
                        <div v-for="(item,index) in moreInfo.ganzhi.zhishen" :key="index"><span>{{item}}</span></div>
                    </div>
                    <div>
                        <div v-for="(item,index) in moreInfo.ganzhi.jishen" :key="index"><span>{{item}}</span></div>
                    </div>
                    <div>
                        <div v-for="(item,index) in moreInfo.ganzhi.xiongshen" :key="index"><span>{{item}}</span></div>
                    </div>
                </div>
            </div>
            <div class="lunar-yi-ji">
                <div class="lunar-yiji-common lunar-yi">
                    <div class="left">宜</div>
                    <div class="right">{{moreInfo.yiji.yi}}</div>
                </div>
                <div class="lunar-yiji-common lunar-ji">
                    <div class="left">忌</div>
                    <div class="right">{{moreInfo.yiji.ji}}</div>
                </div>
            </div>
            <div class="lunar-info-2">
                <div class="lunar-info-2-wrap">
                    <div class="lunar-info-wrap">
                        <div class="info-content-wrap">
                            <div><span>今日胎神</span><i></i></div>
                            <div>{{moreInfo.taishen.taishen}}</div>
                        </div>
                        <div class="info-content-wrap">
                            <div><span>彭祖百忌</span><i></i></div>
                            <div>{{moreInfo.taishen.pengzu}}</div>
                        </div>
                        <div class="info-content-wrap">
                            <div><span>十二神</span><i></i></div>
                            <div>{{moreInfo.taishen.shiershen}}</div>
                        </div>
                    </div>
                    <div class="lunar-info-wrap">
                        <div class="info-content-wrap">
                            <div><span>九星</span><i></i></div>
                            <div>{{moreInfo.taishen.jiuxing}}</div>
                        </div>
                        <div class="info-content-wrap">
                            <div><span>星宿</span><i></i></div>
                            <div>{{moreInfo.taishen.xingxiu}}</div>
                        </div>
                        <div class="info-content-wrap">
                            <div><span>日禄</span><i></i></div>
                            <div>{{moreInfo.taishen.rilu}}</div>
                        </div>
                    </div>
                    <div class="lunar-info-wrap">
                        <div class="info-content-wrap">
                            <div><span>六曜</span><i></i></div>
                            <div>{{moreInfo.taishen.liuyao}}</div>
                        </div>
                        <div class="info-content-wrap">
                            <div><span>相冲</span><i></i></div>
                            <div>{{moreInfo.taishen.xiangchong}}</div>
                        </div>
                        <div class="info-content-wrap">
                            <div><span>大殓吉时</span><i></i></div>
                            <div>{{moreInfo.taishen.dalian}}</div>
                        </div>
                    </div>
                    <div class="jinrichonghe">
                        <header class="header">今日冲合</header>
                        <div class="content">{{moreInfo.chonghe}}</div>
                    </div>
                    <div class="xishen">
                        <div class="xishen-line">
                            <div class="xishen-wrap">
                                <div class="title">喜神</div>
                                <div class="content">{{moreInfo.xishen.xishen}}</div>
                            </div>
                            <div class="xishen-wrap">
                                <div class="title">福神</div>
                                <div class="content">{{moreInfo.xishen.fushen}}</div>
                            </div>
                            <div class="xishen-wrap">
                                <div class="title">财神</div>
                                <div class="content">{{moreInfo.xishen.chaishen}}</div>
                            </div>
                        </div>
                        <div class="xishen-line">
                            <div class="xishen-wrap">
                                <div class="title">阳贵</div>
                                <div class="content">{{moreInfo.xishen.yanggui}}</div>
                            </div>
                            <div class="xishen-wrap">
                                <div class="title">阴贵</div>
                                <div class="content">{{moreInfo.xishen.yingui}}</div>
                            </div>
                            <div class="xishen-wrap">
                                <div class="title">生门</div>
                                <div class="content">{{moreInfo.xishen.shengmen}}</div>
                            </div>
                        </div>
                        <div class="xishen-line">
                            <div class="xishen-wrap">
                                <div class="title">死门</div>
                                <div class="content">{{moreInfo.xishen.simen}}</div>
                            </div>
                            <div class="xishen-wrap">
                                <div class="title">五鬼</div>
                                <div class="content">{{moreInfo.xishen.wugui}}</div>
                            </div>
                            <div class="xishen-wrap">
                                <div class="title">白虎</div>
                                <div class="content">{{moreInfo.xishen.baihu}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="jishi">
                <v-title-nav>
                    <h2>当日吉时</h2>
                </v-title-nav>
                <div class="content">
                    <div v-for="(item,index) in moreInfo.jishi" :key="index" class="item" :style="{'text-align':index%3===0 ?'left':index%3===1?'center':'right'}">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import lunarCalendar from "lunar-calendar"

export default {
    created () {
        this.init();
    },
    beforeRouteEnter : function (to, from ,next) {
        if(to.params.dateInfo === undefined) {
            next('/main/calendar');
        }else {
            next();
        }
    },
    data () {
        return {
            dateInfo : {},
            moreInfo : {},
            ganzhiInfo : [],
            selectDay : [],
            today : [],
            arrowActive : [false,false]
        }
    },
    watch: {
        'selectDay' (val) {
            if(val[0] !== this.dateInfo.year || val[1] !== this.dateInfo.month || val[2] !== this.dateInfo.day) {
                this.dateInfo = lunarCalendar.solarToLunar(val[0],val[1],val[2]);
                let postData = {
                    'cid' : 97,
                    'y' : val[0] + "",
                    'm' : val[1] + "",
                    'd' : val[2] + ""
                };
                this.$http.post('/suan/apidata',postData,'cesuan',null,(res) => {
                    if(res !== undefined) {
                        this.dateInfo = lunarCalendar.solarToLunar(val[0],val[1],val[2]);
                        this.moreInfo = this.handleDateInfo(res.data.content);
                    }
                },null);
            }
        }
    },
    methods : {
        init : function () {
            if(this.$route.params.dateInfo === undefined) {
                this.$router.push('/main/calendar');
                return;
            }
            this.dateInfo = this.$route.params.dateInfo;
            this.selectDay = [this.dateInfo.year,this.dateInfo.month,this.dateInfo.day];
            this.today = [this.dateInfo.year,this.dateInfo.month,this.dateInfo.day];
            this.ganzhiInfo = [this.dateInfo.GanZhiYear + "年",this.dateInfo.GanZhiMonth + "月", this.dateInfo.GanZhiDay + "日"];
            this.moreInfo = this.$route.params.moreInfo;
        },
        showDatePlugin : function (selectDay) {
            this.$vux.datetime.show({
                cancelText: '取消',
                confirmText: '确定',
                format: 'YYYY-M-D',
                yearRow : '{value}年',
                monthRow : '{value}月',
                dayRow : '{value}日',
                minYear: '1900',
                maxYear : '2100',
                defaultSelectedValue : selectDay[0] + '-'+selectDay[1]+'-' + selectDay[2],
                onConfirm:(val) => {
                    // 点击确定，将年月日赋值给dateArray，将格式化的日期赋值给birthDate
                    let valArray = val.split('-');
                    this.selectDay = valArray;
                }
            });
        },
        selectToday : function () {
            this.selectDay = this.today;
        },
        selectPre : function () {
            let lunarDateInfo = lunarCalendar.solarToLunar(this.selectDay[0],this.selectDay[1],this.selectDay[2] - 1);
            let solarDateInfo = lunarCalendar.lunarToSolar(lunarDateInfo.lunarYear,lunarDateInfo.lunarMonth,lunarDateInfo.lunarDay);
            this.selectDay = [solarDateInfo.year,solarDateInfo.month,solarDateInfo.day];
        },
        selectLater : function () {
            let lunarDateInfo = lunarCalendar.solarToLunar(this.selectDay[0],this.selectDay[1],this.selectDay[2] + 1);
            let solarDateInfo = lunarCalendar.lunarToSolar(lunarDateInfo.lunarYear,lunarDateInfo.lunarMonth,lunarDateInfo.lunarDay);
            this.selectDay = [solarDateInfo.year,solarDateInfo.month,solarDateInfo.day];
        },
        handleDateInfo : function (res) {
            let handleResult = {};
            let resWithoutHtml = this.$utils.delHtmlTag(res);
            // 星期
            let solarDateString = resWithoutHtml.slice(resWithoutHtml.indexOf("公历  ") + 4,resWithoutHtml.indexOf("农历  "));
            let week = solarDateString.split('月')[1].trim().slice(-3);
            handleResult['week'] = week;
            // 年的中文
            let lunarDateString = resWithoutHtml.slice(resWithoutHtml.indexOf("农历   ") + 5,resWithoutHtml.indexOf("农历   ") + 15);
            let lunarYear = lunarDateString.split('年 ')[0].slice(-4);
            handleResult['lunarYearName'] = lunarYear;
             // 星座
            const xingzuoKey = ['星座','生肖'];
            handleResult['xingzuo'] = this.getDateInfo(resWithoutHtml,xingzuoKey);
            // 干支等
            const ganzhiList = [['干支','纳音','　'],['纳音','旬空','　'],['旬空','星座','　'],['值神','吉神',','],['吉神','凶神',' '],['凶神','宜',' ']];
            const ganzhiKeyList = ['ganzhi','nayin','xunkong','zhishen','jishen','xiongshen'];
            let ganzhiObject = {};
            for(let i=0;i<ganzhiList.length;++i) {
                ganzhiObject[ganzhiKeyList[i]] = this.getDateInfo(resWithoutHtml,ganzhiList[i]);
            }
            handleResult['ganzhi'] = ganzhiObject;
            // 宜，忌
            const yijiList = [['宜','忌'],['忌','儒略日']];
            const yijiKeyList = ['yi','ji'];
            let yijiObject = {};
            for(let i=0;i<yijiList.length;++i) {
                yijiObject[yijiKeyList[i]] = this.getDateInfo(resWithoutHtml,yijiList[i]);
            }
            handleResult['yiji'] = yijiObject;
            // 今日胎神等
            const taishenList = [
                ['今日胎神','彭祖百忌'],['彭祖百忌','月名'],['十二神','今日胎神'],['九星','星宿'],
                ['星宿','日禄'],['日禄','六曜'],['六曜','相冲'],['相冲','大殓吉时'],['大殓吉时','的呼之人']
            ];
            const taishenKeyList = ['taishen','pengzu','shiershen','jiuxing','xingxiu','rilu','liuyao','xiangchong','dalian'];
            let taishenObject = {};
            for(let i=0;i<taishenList.length;++i) {
                taishenObject[taishenKeyList[i]] = this.getDateInfo(resWithoutHtml,taishenList[i]);
            }
            handleResult['taishen'] = taishenObject;
            // 今日冲合
            const chongheKey = ['今日冲合','年三煞'];
            handleResult['chonghe'] = this.getDateInfo(resWithoutHtml,chongheKey);
            // 喜神等
            const xishenList = [['喜神','福神'],['福神','财神'],['财神','阳贵'],['阳贵','阴贵'],['阴贵','生门'],['生门','死门'],['死门','五鬼'],['五鬼','白虎'],['白虎','当日吉时']];
            const xishenKeyList = ['xishen','fushen','chaishen','yanggui','yingui','shengmen','simen','wugui','baihu'];
            let xishenObject = {};
            for(let i=0;i<xishenList.length;++i) {
                xishenObject[xishenKeyList[i]] = this.getDateInfo(resWithoutHtml,xishenList[i]);
            }
            handleResult['xishen'] = xishenObject;
            // 当日吉时
            let jishiString = resWithoutHtml.slice(resWithoutHtml.indexOf("当日吉时  ") + 4,resWithoutHtml.length -2).trim();
            handleResult['jishi'] = jishiString.split('  ');
            return handleResult;
        },
        getDateInfo : function (str,keyArr) {
            if(keyArr.length === 3) {
                return str.slice(str.indexOf(keyArr[0] + "  ") + 4,str.indexOf(" " + keyArr[1] + "  ")).trim().split(keyArr[2]);
            }else {
                return str.slice(str.indexOf(keyArr[0] + "  "),str.indexOf(" "+keyArr[1]+"  ")).trim().split("  ")[1];
            }
        }
    }
}
</script>
<style lang="less" scoped>
.title-header {
    .flex-start();
    h2 {
        font-size: 40/75rem;
        color: @baseBoldColor;
    }
    i {
        width: 24/75rem;
        height: 24/75rem;
        background: url('../assets/image/calendar/select.png') no-repeat center center / 100% 100%;
        margin-left: 31/75rem;
    }
} 
.today {
    width: 44/75rem;
    height: 44/75rem;
    background: url('../assets/image/calendar-detail/today.png') no-repeat center center / 100% 100%;
}
.calendar-detail-wrap {
    .content-wrap {
        padding: 90/75rem 0 50/75rem 0;
        .border-box();
        width: 100%;
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
            .arrow-left-active {
                background: url("../assets/image/calendar-detail/arrow-left-active.png") no-repeat center center / 100% 100%;
            }
            .arrow-right {
                background: url("../assets/image/calendar-detail/arrow-right.png") no-repeat center center / 100% 100%;
            }
            .arrow-right-active {
                background: url("../assets/image/calendar-detail/arrow-right-active.png") no-repeat center center / 100% 100%;
            }
            .date {
                .lunar-info {
                    font-size: 32/75rem;
                    color : @baseBoldColor;
                    font-weight: bold;
                    margin-bottom: 5/75rem;
                }
                .solar-info {
                    font-size: 26/75rem;
                    color: #171717;
                    .flex-between();
                    & > span {
                        display: inline-block;
                    }
                    .month {
                        font-size: 24/75rem;
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
                    color: @baseBoldColor;
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
                        color : @baseBoldColor;
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
                .flex-start-only();
                margin-top : 10/75rem;
                & > div{
                    width:220/75rem;
                    text-align: center;
                    & > div {
                        height:50/75rem;
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
                    font-size: 24/75rem;
                    word-spacing : 30/75rem;
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
                    background-color: #D52E2D;
                }
            }
        }
        .lunar-info-2 {
            width:100%;
            padding: 30/75rem 0;
            border-bottom: 1px solid #eee;
            .lunar-info-2-wrap {
                width: 90%;
                margin:0 auto;
                .lunar-info-wrap:nth-child(1) {
                    margin-top: 0;
                }
                .lunar-info-wrap {
                    margin:24/75rem auto 0 auto;
                    .flex-around-only();
                    .info-content-wrap {
                        width: 33.33%;
                        div:nth-child(1) {
                            font-size: 26/75rem;
                            color : @baseBoldColor;
                            text-align: center;
                        }
                        div:nth-child(2) {
                            height: 63/75rem;
                            font-size: 24/75rem;
                            margin-top: 30/75rem;
                            text-align: center;
                            overflow: hidden;
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
                    background:rgba(255,252,248,1);
                    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                    .round(10/75rem);
                    .border-box();
                    margin-top : 32/75rem;
                    padding: 32/75rem 20/75rem 20/75rem 32/75rem;
                    .header {
                        color: @baseBoldColor;
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
                                color: @baseBoldColor;
                            }
                            .content {
                                font-size: 24/75rem;
                            }
                        }
                    }
                }
            }
        }
        .jishi {
            width: 90%;
            margin: 0 auto;
            /deep/ .title-nav {
                padding-left: 0;
            }
            h2 {
                font-size: 28/75rem;
                font-weight: normal;
                color: @baseBoldColor;
            }
            .content {
                .flex-start();
                flex-wrap:wrap;
                font-size: 24/75rem;
                .item:nth-child(1) {
                    color: @baseBoldColor;
                }
                .item {
                    width: 33.33%;
                    line-height: 50/75rem;
                }
            }
        }
    }
}

</style>


