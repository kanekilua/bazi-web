<template>
    <div class="calendar-wrap">
        <div class="calendar-header-wrap">
            <div class="left">
                <div class="title">黄历</div>
                <div class="today" @click="clickItem = todayItem"></div>
            </div>
            <div class="center">
                <div class="content">
                    <div class="solar-date">{{todayItem.year}}.{{todayItem.month}}.{{todayItem.day}}</div>
                    <div class="lunar-date">{{todayItem.lunarMonthName}}{{todayItem.lunarDayName}}    {{todayMoreInfo ? todayMoreInfo.week : ""}}</div>
                </div>
            </div>
            <div class="right" @click="$jump('/main/calendar/weather')">
                <div class="content">
                    <div class="upper">
                        <i class="weather" :style="{backgroundImage: 'url(' + weatherIcon + ')'}"></i>
                        <div class="city">{{weather.weather.HeWeather6[0].basic.location}}</div>
                    </div>
                    <div class="under">
                        {{weather.weather.HeWeather6[0].daily_forecast[0].tmp_min}}~{{weather.weather.HeWeather6[0].daily_forecast[0].tmp_max}}℃
                    </div>
                </div>
            </div>
        </div>
        <div class="content-wrap">
            <div class="btn-list">
                <button class="btn" :class="{'btn-seleced' : calendarType}" @click="switchSelector(1)">公历</button>
                <button class="btn" :class="{'btn-seleced' : !calendarType}" @click="switchSelector(0)">农历</button>
                <div class="year-pick">
                    <div class="select" @click="showSelector('yearSelect')">
                        <div>{{yearSelect}}</div>
                        <i :class="showYearSelector ? 'select-up' :'select-down'"></i>
                    </div>
                    <div class="year-pop" v-show="showYearSelector" ref="yearSelect">
                        <div v-for="(item,index) in yearArr" :key="index" @click="changePickerValue('yearSelect',item)" :class="{'selected' : yearSelectIndex-1 === index}">{{item.value}}</div>
                    </div>
                </div>
                <div class="month-pick">
                    <div class="select" @click="showSelector('monthSelect')">
                        <div>{{monthSelect}}</div>
                        <i :class="showMonthSelector ? 'select-up' :'select-down'"></i>
                    </div>
                    <div class="month-pop" v-show="showMonthSelector" ref="monthSelect">
                        <div v-for="(item,index) in monthArr" :key="index" @click="changePickerValue('monthSelect',item)" :class="{'selected' : calendarType ? (clickItem.month - 1 === index ): (clickItem.lunarMonth - 1 === index)}">{{item.value}}</div>
                    </div>
                </div>
                <div class="day-pick">
                    <div class="select" @click="showSelector('daySelect')">
                        <div>{{daySelect}}</div>
                        <i :class="showDaySelector ? 'select-up' :'select-down'"></i>
                    </div>
                    <div class="day-pop" v-show="showDaySelector" ref="daySelect">
                        <div v-for="(item,index) in dayArr" :key="index" @click="changePickerValue('daySelect',item)" :class="{'selected' : calendarType ? (clickItem.day - 1 === index) : (clickItem.lunarDay - 1 === index)}">{{item.value}}</div>
                    </div>
                </div>
            </div>
            <div class="calendar">
                <div class="calendar-header">
                    <div v-for="(item,index) in calendarHeader" :key="index">{{item}}</div> 
                </div>
                <div class="calendar-wrap">
                    <div v-for="(weekItem,weekIndex) in monthData" :key="weekIndex" class="week-item">
                        <div v-for="(dayItem,dayIndex) in weekItem" :key="dayIndex" class="day-item" @click="recordClick(dayItem)">
                            <div class="solar-day" :class="solarClass(dayItem)">{{dayItem.day}}</div>
                            <div class="lunar-day" :class="lunarClass(dayItem)"><p>{{dayItem.lunarFestival ? dayItem.lunarFestival : dayItem.term ? dayItem.term : dayItem.solarFestival ? dayItem.solarFestival.split(" ")[0] : dayItem.lunarDayName}}</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info" :class="{'info-without-more' : moreInfo === null}">
                <div class="info-header">
                    <div class="info-title">{{clickItem.lunarMonthName}}{{clickItem.lunarDayName}}  {{moreInfo ? moreInfo.week : ""}}</div>
                    <div class="more" @click="moreDetail">
                        更多详情<i></i>
                    </div>
                </div>
                <div class="info-gz">
                    <span>干支</span>  {{clickItem.GanZhiYear}} {{clickItem.GanZhiMonth}} {{clickItem.GanZhiDay}}
                </div>
                <div class="info-yi" v-if="moreInfo != null">
                    <div class="title">宜</div>
                    <div class="yiji">{{moreInfo.yiji.yi}}</div>
                </div>
                <div class="info-ji" v-if="moreInfo != null">
                    <div class="title">忌</div>
                    <div class="yiji">{{moreInfo.yiji.ji}}</div>
                </div>
                <div class="info-more"></div>
            </div>
            <div class="article">
                <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                <div class="swiper">
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide v-for="(item,index) in articleList" :key="index">
                            <div class="article-cell" v-for="(articleItem,articleIndex) in item" :key="articleIndex" @click="jumpArticle(articleItem)">
                                <h2>{{articleItem.title}}</h2><i></i>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <v-tab-bar></v-tab-bar>
    </div>
</template>

<script>
import lunarCalendar from "lunar-calendar"
import {mapState,mapMutations} from 'vuex';

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();
var yearArrayTmp = [];
for(let i=1900,j=1;i<= 2100; ++i,++j) {
    yearArrayTmp.push({index : j , value : i + "年"});
}
const yearArray = yearArrayTmp;
var solarMonthArray = [];
for(let i=1;i<=12;++i) {
    solarMonthArray.push({index : i - 1, value :i + "月"});
}
var lunarMonthArray = [
    {index : 0,value : "正月"},{index : 1,value : "二月"},{index : 2,value : "三月"},
    {index : 3,value : "四月"},{index : 4,value : "五月"},{index : 5,value : "六月"},
    {index : 6,value : "七月"},{index : 7,value : "八月"},{index : 8,value : "九月"},
    {index : 9,value : "十月"},{index : 10,value : "冬月"},{index : 11,value : "腊月"}
];
var solarDayArray = [];
for(let i=1;i<=31;++i) {
    solarDayArray.push({index : i - 1, value :i + "日"});
}
var lunarDayArray = [
    {index : 0 , value : "初一"},{index : 1 , value : "初二"},{index : 2 , value : "初三"},
    {index : 3 , value : "初四"},{index : 4 , value : "初五"},{index : 5 , value : "初六"},
    {index : 6 , value : "初七"},{index : 7 , value : "初八"},{index : 8 , value : "初九"},
    {index : 9 , value : "初十"},{index : 10 , value : "十一"},{index : 11 , value : "十二"},
    {index : 12 , value : "十三"},{index : 13 , value : "十四"},{index : 14 , value : "十五"},
    {index : 15 , value : "十六"},{index : 16 , value : "十七"},{index : 17 , value : "十八"},
    {index : 18 , value : "十九"},{index : 19 , value : "二十"},{index : 20 , value : "廿一"},
    {index : 21 , value : "廿二"},{index : 22 , value : "廿三"},{index : 23 , value : "廿四"},
    {index : 24 , value : "廿五"},{index : 25 , value : "廿六"},{index : 26 , value : "廿七"},
    {index : 27 , value : "廿八"},{index : 28 , value : "廿九"},{index : 29 , value : "三十"}
];

export default {
    data () {
        return {
            showYearSelector : false,
            showMonthSelector : false,
            showDaySelector : false,
            calendarType : 1, // 默认 0是阴历 1是阳历
            yearArr : [],
            yearSelect : "",
            yearSelectIndex : 0,
            monthArr : [],
            monthSelect : "",
            monthSelectIndex : 0,
            dayArr : [],
            daySelect : "",
            daySelectIndex : 0,
            calendarHeader : ['日','一','二','三','四','五','六'],
            clickItem : {},
            todayItem : {},
            navList : ['吉日查询','农历查询','民俗节日'],
            navIndex : 0,
            swiperOption : { initialSlide: this.navIndex },
            articleList : [[],[],[]],
            moreInfo : {'yiji':{'yi':'','ji':''},'week':''},
            todayMoreInfo : null,
            // weather : {'weather': {'HeWeather6' : [{'basic': { 'location' : ''} , 'daily_forecast' : [{'tmp_min' : ''}]}]}},
            weatherIcon : ''
        }
    },
    created() {
        this.init();
    },
    computed : {
        ...mapState('weather',['weather']),
        'monthData' () {
            // 日期控件的计算属性，以yearSelectIndex和monthSelectIndex为基础发生改变
            let year = parseInt(yearArray[this.yearSelectIndex-1].value.split('年')[0]);
            let month = this.monthSelectIndex + 1;
            let lunarCalendarData = lunarCalendar.calendar(year,month,true);
            // monthSelectIndex或者yearSelectIndex更改说明，天的下拉框数据也要发生变化变化
            if(this.calendarType) {
                let dayArrayTemp = [];
                for(let i=0 ;i< lunarCalendarData.monthDays ; ++i) {
                    dayArrayTemp.push(solarDayArray[i]);
                }
                this.dayArr = dayArrayTemp;
            }
            // 日期数据的变化，monthDataTemp会渲染到页面上
            let lunarData = lunarCalendarData.monthData;
            let weekData = [];
            let monthDataTemp = [];
            for(let i=0;i< lunarData.length; ++i) {
                if(this.todayItem.year === undefined && lunarData[i].day === parseInt(currentDay) && lunarData[i].month === parseInt(currentMonth) && lunarData[i].year === parseInt(currentYear)) {
                    this.todayItem = lunarData[i];
                    this.clickItem = this.todayItem;
                }
                if(i === 35 && lunarData[i].month != (this.monthSelectIndex + 1)) {
                    break;
                }
                weekData.push(lunarData[i]);
                if((i + 1) % 7 === 0) {
                    monthDataTemp.push(weekData);
                    weekData = [];
                }
            }
            return monthDataTemp;
        },
        'swiper' () {
            return this.$refs.mySwiper.swiper;
        }
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
        },
        'clickItem' (val) {
            this.yearSelectIndex = val.year-1899;
            this.monthSelectIndex = val.month - 1;
            this.daySelectIndex = val.day - 1;
            if(this.calendarType) {
                this.yearSelect = val.year + "年";
                this.monthSelect = val.month + "月";
                this.daySelect = val.day + "日";
            }else  {
                this.yearSelect = val.lunarYear + "年";
                this.monthSelect = this.monthArr[val.lunarMonth-1].value;
                this.daySelect = this.dayArr[val.lunarDay-1].value;
            }
            // 在clickItem发生变化时，从后台获取详细信息，并在getMoreInfoSuccess中处理
            let postData = {
                'cid' : 97,
                'y' : val.year + "",
                'm' : val.month + "",
                'd' : val.day + ""
            };
            this.$http.post('/suan/apidata',postData,'cesuan',null,this.getMoreInfoSuccess,null);
        }
    },
    mounted() {
        this.swiper.on('slideChange', () => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
    }, 
    methods : {
        ...mapMutations ('weather',['updateWeather']),
        init : function () {
            // Arr为下拉的数据，select为下拉框的显示值，selectIndex为实际月份/天数减一
            // 年下拉selector数据初始化
            this.yearArr = yearArray;
            this.yearSelect = currentYear + "年";
            this.yearSelectIndex = currentYear - 1899;
            // 月下拉selector数据初始化
            this.monthArr = solarMonthArray;
            this.monthSelect = currentMonth + "月";
            this.monthSelectIndex = currentMonth - 1;
            // 日下拉selector数据初始化
            this.dayArr = solarDayArray;
            this.daySelect = currentDay + "日";
            this.daySelectIndex = currentDay - 1;
            // 获取天气的数据
            this.$http.post('/features/weath',null,null,null,this.getWeatherSussess,null);
            // 获取文章的数据
            let tids = ['801','802','803'];
            for(let tid of tids) {
                let params = {
                    cid : '96',
                    tid : tid
                }
                this.$http.post('/suan/apidata',params,'cesuan',null,(res) => {
                    switch (tid) {
                        case '801':
                            this.articleList[0] = res.data;
                            break;
                        case '802' :
                            this.articleList[1] = res.data;
                            break;
                        case '803' :
                            this.articleList[2] = res.data;
                            break;
                        default:
                            break;
                    }
                });
            }
        },
        getWeatherSussess : function (res) {
            var app = global.APP_NAME;
            
            res.data.air = JSON.parse(res.data.air);
            res.data.hour_weather = JSON.parse(res.data.hour_weather);
            res.data.weather = JSON.parse(res.data.weather);
            
            this.updateWeather(res.data);

            var now = new Date();
            var hour = now.getHours();
            var night;
            if(hour >= 6 && hour <= 18 ) {
                night = false;
            }else {
                night = true;
            }
            this.weatherIcon = night ? require('../assets/image/calendar-weather/' + global.WEATHER[this.weather.weather.HeWeather6[0].daily_forecast[0].cond_code_n] + '.png') : require('../assets/image/calendar-weather/' + global.WEATHER[this.weather.weather.HeWeather6[0].daily_forecast[0].cond_code_d] + '.png');
            // console.log(this.weather.weather.HeWeather6[0].daily_forecast[0].cond_txt_d);
        },
        showSelector : function (target) {
            // 显示拉下框，并将下拉框中的滚轮滑动到对应地方
            let scrollIndex;
            if(target === "yearSelect") {
                this.showYearSelector = !this.showYearSelector;
                if(!this.showYearSelector) {
                    return;
                }
                scrollIndex = this.yearSelectIndex;
            }else if(target === "monthSelect"){
                this.showMonthSelector = !this.showMonthSelector;
                if(!this.showMonthSelector) {
                    return;
                }
                scrollIndex = this.calendarType ? this.clickItem.month : this.clickItem.lunarMonth;
            }else {
                this.showDaySelector = !this.showDaySelector;
                if(!this.showDaySelector) {
                    return;
                }
                scrollIndex = this.calendarType ? this.clickItem.day : this.clickItem.lunarDay;
            }
            let scrollTopIndex;
            if(scrollIndex > 3) {
                scrollTopIndex = scrollIndex-3;
            }else {
                scrollTopIndex = 0;
            }
            this.$nextTick(() => {
                let div = this.$refs[target];
                div.scrollTop = (div.clientHeight/5)*scrollTopIndex;
            });
        },
        changePickerValue : function (target,item) {
            // 修改clickItem的值
            let year,month,day,solarDay,lunarDay;
            if(target === "yearSelect") {
                this.showYearSelector = false;
                if(this.calendarType) {
                    year = parseInt(item.value);
                    month = this.clickItem.month;
                    day = this.clickItem.day;
                    lunarDay = lunarCalendar.solarToLunar(year,month,day);
                    solarDay = lunarCalendar.lunarToSolar(lunarDay.lunarYear,lunarDay.lunarMonth,lunarDay.lunarDay);
                }else {
                    year = parseInt(item.value);
                    month = this.clickItem.lunarMonth;
                    day = this.clickItem.lunarDay;
                    solarDay = lunarCalendar.lunarToSolar(year,month,day);
                    lunarDay = lunarCalendar.solarToLunar(solarDay.year,solarDay.month,solarDay.day);
                }
            } else if(target === "monthSelect") {
                this.showMonthSelector = false;
                if(this.calendarType) {
                    year = this.clickItem.year;
                    month = item.index + 1;
                    day = this.clickItem.day;
                    let calendarData = lunarCalendar.calendar(year,month,false);
                    if(calendarData.monthDays < day) {
                        day = 1;
                    }
                    lunarDay = lunarCalendar.solarToLunar(year,month,day);
                    solarDay = lunarCalendar.lunarToSolar(lunarDay.lunarYear,lunarDay.lunarMonth,lunarDay.lunarDay);
                }else {
                    year = this.clickItem.lunarYear;
                    month = item.index + 1;
                    day = this.clickItem.lunarDay;
                    solarDay = lunarCalendar.lunarToSolar(year,month,day);
                    lunarDay = lunarCalendar.solarToLunar(solarDay.year,solarDay.month,solarDay.day);
                }
            } else {
                this.showDaySelector = false;
                if(this.calendarType) {
                    year = this.clickItem.year;
                    month = this.clickItem.month;
                    day = item.index + 1;
                    lunarDay = lunarCalendar.solarToLunar(year,month,day);
                    solarDay = lunarCalendar.lunarToSolar(lunarDay.lunarYear,lunarDay.lunarMonth,lunarDay.lunarDay);
                }else  {
                    year = this.clickItem.lunarYear;
                    month = this.clickItem.lunarMonth;
                    day = item.index + 1;
                    solarDay = lunarCalendar.lunarToSolar(year,month,day);
                    lunarDay = lunarCalendar.solarToLunar(solarDay.year,solarDay.month,solarDay.day);
                }
            }
            this.clickItem = {
                ...solarDay,
                ...lunarDay
            }
        },
        solarClass : function (dayItem) {
            let solarClass = {
                'not-current-month' : dayItem.month.toString() != (this.monthSelectIndex + 1),
                'solar-today' : dayItem.year === currentYear && dayItem.month === currentMonth && dayItem.day === currentDay,
                'solar-click-day' : dayItem.year === this.clickItem.year && dayItem.month === this.clickItem.month && dayItem.day === this.clickItem.day && (dayItem.year != currentYear || dayItem.month != currentMonth || dayItem.day != currentDay)
            }
            return solarClass;
        },
        lunarClass : function (dayItem) {
            let lunarClass = {
                'not-current-month' : dayItem.month.toString() != (this.monthSelectIndex + 1),
                'lunar-current-month' : dayItem.month.toString() === (this.monthSelectIndex + 1),
                'lunar-today' : dayItem.year === currentYear && dayItem.month === currentMonth && dayItem.day === currentDay,
                'solar-festival' : dayItem.lunarFestival === undefined && dayItem.solarFestival != undefined && dayItem.term === undefined && dayItem.month.toString() ===(this.monthSelectIndex + 1),
                'lunar-festival' : (dayItem.lunarFestival != undefined || dayItem.term != undefined)  && dayItem.month.toString() === (this.monthSelectIndex + 1),
                'not-click-day' : !(dayItem.year === this.clickItem.year && dayItem.month === this.clickItem.month && dayItem.day === this.clickItem.day),
                'lunar-click-day' : dayItem.year === this.clickItem.year && dayItem.month === this.clickItem.month && dayItem.day === this.clickItem.day
            }
            return lunarClass;
        },
        recordClick : function (dayItem) {
            // 点击日期里的dayItem时，修改clickItem，在一个同时点击两次把clickItem设置为todayItem
            if(dayItem.year === this.clickItem.year && dayItem.month === this.clickItem.month && dayItem.day === this.clickItem.day) {
                // 改成变成today的item
                this.clickItem = this.todayItem;
                return ;
            }
            if(dayItem.month != this.clickItem.month) {
                this.monthSelectIndex = dayItem.month - 1;
            }

            this.clickItem = dayItem;
        },
        updateNavIndex : function (value) {
            this.navIndex = value;
        },
        getMoreInfoSuccess : function (res) {
            if(res.data != undefined) {
                this.moreInfo = this.handleDateInfo(res.data.content);
                if(this.clickItem.year === this.todayItem.year && this.clickItem.month === this.todayItem.month && this.clickItem.day === this.todayItem.day && this.todayMoreInfo === null) {
                    this.todayMoreInfo = this.moreInfo;
                    this.weather.weekday = this.todayMoreInfo.week;
                }
            }else {
                this.moreInfo = null;
            }
        },
        switchSelector : function (calendarType) {
            // 修改下拉控件的日期类型，并修改Arr的内容和select的显示内容，selectIndex不能变
            this.calendarType = calendarType;
            this.monthArr = calendarType ? solarMonthArray : lunarMonthArray;
            this.dayArr = calendarType ? solarDayArray : lunarDayArray;

            // let year = parseInt(yearArray[this.yearSelectIndex-1].value.split('年')[0]);
            if(calendarType) {
                this.yearSelect = this.clickItem.year + "年";
                this.monthSelect = this.clickItem.month + "月";
                this.daySelect = this.clickItem.day + "日";
            }else {
                this.yearSelect = this.clickItem.lunarYear + "年";
                this.monthSelect = this.monthArr[this.clickItem.lunarMonth-1].value;
                this.daySelect = this.dayArr[this.clickItem.lunarDay-1].value;
            }
        },
        moreDetail : function () {
            this.$router.push({
                name : "calendarDetail",
                params : {
                    dateInfo : this.clickItem,
                    moreInfo : this.moreInfo
                }
            });
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
        },
        jumpArticle : function (article) {
            this.$router.push({
                name: "article",
                query: {
                    cid : '95',
                    id : article.id
                }
            });
        }
    }
}
</script>
<style lang="less" scoped>
@lunarFestivalColor: #FDC52E;
@solarFestivalColor: @baseBoldColor;

.btn(@width:110) {
    width: @width/75rem;
    height: 50/75rem;
    border: 0;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    background-color: #fff;
    .round(10/75rem);
    font-size: 26/75rem;
}
.select{
    .flex-around();
    & > i {
        display: inline-block;
        width: 22/75rem;
        height: 11/75rem;
        background: url('../assets/image/calendar/select.png') no-repeat center center / 100% 100%;
    }
    .select-up{
        .rotate(-180deg);
        .tran(transform 0.1s ease-in 0s);
    }
    .select-down{
        .rotate(0deg);
        .tran(transform 0.1s ease-in 0s);
    }
}
.select-pop(@width:167){
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    background: #fff;
    .round(14/75rem);
    width: @width/75rem;
    height: 210/75rem;
    overflow: scroll;
    & > div {
        font-size: 24/75rem;
        text-align: center;
        height: 40/75rem;
        border-bottom: 1px solid #eee;
    }
    .selected {
        background-color: @baseBoldColor;
        color: #fff;
    }
}
.article-cell {
    .flex-between();
    margin-top: 32/75rem;
}


.header-bg {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    & > div {
        height:80/75rem;
        background: @baseBoldColor;
    }
    & > nav {
        width: 100%;
        height:80/75rem;
        // background: url('../assets/image/common/nav.png') no-repeat center center / 100% 100%;
    }
}
.calendar-wrap {
    overflow: hidden;
    .calendar-header-wrap {
        position: fixed;
        z-index: 999;
        .flex-between();
        width: 100%;
        height: 125/75rem;
        color: #2E2E2E;
        background-color: #fff;
        box-shadow:0px 2px 6px rgba(148,148,148,0.14);
        .left {
            width: 25%;
            height: 100%;
            font-size: 40/75rem;
            .flex-start();
            .title {
                margin-left: 31/75rem;
            }
            .today {
                width: 58/75rem;
                height: 58/75rem;
                margin-left: 8/75rem;
                background: url('../assets/image/calendar/today.png') no-repeat center center / 100% 100%;
                .round(50%);
            }
        }
        .center {
            width: 50%;
            height: 100%;
            .flex-center-only();
            .content {
                .solar-date {
                    font-size: 40/75rem;
                    text-align: center;
                }
                .lunar-date {
                    font-size: 22/75rem;
                    text-align: center;
                }
            }
            
        }
        .right {
            .flex-end();
            width: 25%;
            height: 100%;
            .content {
                height: 70/75rem;
                margin-right: 30/75rem;
                color : @baseBoldColor;
                & > div  {
                    height: 35/75rem;
                }
                .upper {
                    .flex-end();
                    font-size: 26/75rem;
                    .weather {
                        width: 50/75rem;
                        height: 38/75rem;
                        margin-right: 8/75rem;
                        background-repeat: no-repeat;
                        background-size: auto 50/75rem;
                        background-position: center;
                    }
                }
                .under {
                    text-align: right;
                    font-size: 27/75rem;
                }
            }
        }
    }
    .content-wrap {
        padding-top: 140/75rem;
        .border-box();
        width: 100%;
        .border-box();
        h2 {
            font-size: 28/75rem;
            font-weight: normal;
        }
        .btn-list {
            .flex-around();
            .btn-seleced {
                background-color: @baseBoldColor !important;
                color: #fff;
            }
            & > .btn {
                .btn();
            }
            .year-pick {
                position: relative;
                & > .select {
                    .btn(167);
                }
                .year-pop{
                    .select-pop();
                }
            }
            .month-pick {
                position: relative;
                & > .select {
                    .btn(129);
                }
                .month-pop {
                    .select-pop(129);
                }
            }
            .day-pick {
                position: relative;
                & > .select {
                    .btn(129);
                }
                .day-pop {
                    .select-pop(129);
                }
            }
        }
        .calendar-header {
            .flex-around();
            margin-top: 30/75rem;
            & > div {
                font-size: 26/75rem;
                font-weight: bold;
                color:rgba(0,0,0,0.8);
            }
        }
        .calendar-wrap {
            .week-item {
                .flex-around();
                width: 98%;
                margin : 0 auto;
                .day-item {
                    width: 100/75rem;
                    height: 95/75rem;
                    margin-top:35/75rem;
                    .not-current-month {
                        color:rgba(0,0,0,0.2);
                    }
                    .lunar-current-month {
                        color:rgba(0,0,0,0.8);
                    }
                    .solar-today {
                        background:@baseBoldColor;
                        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                        border-radius:50%;
                        color: #fff;
                    }
                    .solar-click-day {
                        border-radius:50%;
                        background:rgba(0,0,0,0.1);
                    }
                    .not-click-day {
                        // & > p {
                        //     .ellipsis(1);
                        // }
                        & > p {
                            overflow : hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            // display: -webkit-box;
                            // -webkit-line-clamp: 1;
                            // -webkit-box-orient: vertical;
                        }
                    }
                    .lunar-click-day {
                        overflow: hidden;
                        // & > p {
                        //     .ellipsis(2);
                        // }
                    } 
                    .lunar-today {
                        color : @baseBoldColor;
                        font-weight: bold;
                    }
                    .solar-festival {
                        color : @solarFestivalColor;
                    }
                    .lunar-festival {
                        color : @lunarFestivalColor
                    }
                    .solar-day {
                        width:62/75rem;
                        height:62/75rem;
                        margin: 0 auto;
                        
                        font-weight: bold;
                        font-size: 32/75rem;
                        text-align: center;
                        line-height: 62/75rem;
                    }
                    .lunar-day {
                        width: 100%;
                        max-height: 66/75rem;
                        & > p {
                            width: 100%;
                            text-align: center;
                            font-size:24/75rem;
                        }
                    }
                }
            }
        }
        .info-without-more {
            height:150/75rem !important;
        }
        .info {
            width:95%;
            margin : 25/75rem auto 0 auto;
            background:rgba(255,255,255,1);
            box-shadow:0px 3px 6px rgba(0,0,0,0.16);
            .round(10/75rem);
            padding : 0 0 24/75rem 24/75rem;
            overflow: hidden;
            .border-box();
            & > div {
                margin-top : 24/75rem;
                font-size: 24/75rem;
            }
            .info-header {
                .flex-between();
                .info-title {
                    color: @baseBoldColor;
                    font-size: 28/75rem;
                    font-weight: bold;
                }
                .more {
                    width: 176/75rem;
                    height: 54/75rem;
                    padding-left: 15/75rem;
                    .border-box();
                    line-height: 54/75rem;
                    font-size: 26/75rem;
                    color: #fff;
                    text-align: center;
                    background-color: @baseBoldColor;
                    .round(10/75rem 0 0 10/75rem);
                    & > i {
                        width: 11/75rem;
                        height: 20/75rem;
                        background: url('../assets/image/calendar/arrow-right.png') no-repeat center center / 100% 100%;
                        display: inline-block;
                        margin-left: 15/75rem;
                    }
                }
            }
            .info-gz {
                & > span {
                    font-size: 26/75rem;
                }
            }
            .info-yi {
                .flex-start-only();
                .title {
                    width: 34/75rem;
                    height: 34/75rem;
                    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                    border-radius:50%;
                    margin-right: 17/75rem;
                    line-height: 34/75rem;
                    text-align: center;
                    color : @lunarFestivalColor;
                }
                .yiji {
                    width: 610/75rem;
                }
            }
            .info-ji {
                .info-yi();
                .title { 
                    color : #D52E2D;
                }
            }
        }
        .article {
            width: 95%;
            margin : 0 auto;
            i{
                display: block;
                width: 13/75rem;
                height: 25/75rem;
                background: url("../assets/image/common/more.png") no-repeat center center / 100% 100%;
            }
            /deep/ .nav {
                margin-right: 16/75rem;
                margin-bottom: 0;
                /deep/ .nav-list {
                    .flex-between();
                }
            }
            .swiper {
                padding: 0 10/75rem 0 10/75rem;
            }
        }
    }
}

</style>

