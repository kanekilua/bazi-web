<template>
    <div class="wrap">
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
                    {{clickItem.lunarMonthName}}{{clickItem.lunarDayName}}  星期一
                </div>
                <div class="info-gz">
                    <span>干支</span>  {{clickItem.GanZhiYear}} {{clickItem.GanZhiMonth}} {{clickItem.GanZhiDay}}
                </div>
                <div class="info-yi" v-show="moreInfo != null">
                    <div class="title">宜</div>
                    <div>祭祀  解除  破屋  坏垣  馀事</div>
                </div>
                <div class="info-ji" v-show="moreInfo != null">
                    <div class="left">
                        <div class="title">忌</div>
                        <div>无</div>
                    </div>
                    <div class="more" @click="moreDetail">
                        <div>更多详情</div><i></i>
                    </div>
                </div>
                <div class="info-more"></div>
            </div>
            <div class="article">
                <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                <div class="swiper">
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide v-for="(item,index) in articleList" :key="index">
                            <div class="article-cell" v-for="(articleItem,articleIndex) in item" :key="articleIndex">
                                <h2>{{articleItem}}</h2><i></i>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import lunarCalendar from "lunar-calendar"

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
    created() {
        this.init();
    },
    computed : {
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
                if(this.todayItem === null && lunarData[i].day === parseInt(currentDay) && lunarData[i].month === parseInt(currentMonth) && lunarData[i].year === parseInt(currentYear)) {
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
            todayItem : null,
            navList : ['吉日查询','农历查询','民俗节日'],
            navIndex : 0,
            swiperOption : { initialSlide: this.navIndex },
            articleList : [
                ['女人哪个月出生富贵','女人最富贵的出生日','2019年几月结婚最好','2019年哪天搬家最好','2017年12月出行的黄道','2017年11月出行的黄道','2017年10月出行的黄道','2017年9月出行的黄道吉','2017年8月出行的黄道吉日查询','2017年7月出行的黄道吉','2017年6月出行的黄道吉'],
                ['女人哪个月出生富贵','女人最富贵的出生日','2019年几月结婚最好','2019年哪天搬家最好','2017年12月出行的黄道','2017年11月出行的黄道','2017年10月出行的黄道','2017年9月出行的黄道吉','2017年8月出行的黄道吉日查询','2017年7月出行的黄道吉','2017年6月出行的黄道吉'],
                ['女人哪个月出生富贵','女人最富贵的出生日','2019年几月结婚最好','2019年哪天搬家最好','2017年12月出行的黄道','2017年11月出行的黄道','2017年10月出行的黄道','2017年9月出行的黄道吉','2017年8月出行的黄道吉日查询','2017年7月出行的黄道吉','2017年6月出行的黄道吉']
            ],
            moreInfo : null,
        }
    },
    methods : {
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
                'not-click-day' : !(dayItem.year === this.clickItem.year && dayItem.month === this.clickItem.month && dayItem.day === this.clickItem.day && (dayItem.year != currentYear || dayItem.month != currentMonth || dayItem.day != currentDay)),
                'lunar-click-day' : dayItem.year === this.clickItem.year && dayItem.month === this.clickItem.month && dayItem.day === this.clickItem.day && (dayItem.year != currentYear || dayItem.month != currentMonth || dayItem.day != currentDay)
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
                this.moreInfo = res.data.content;
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
                    dateInfo : this.clickItem
                }
            });
        }
    }
}
</script>
<style lang="less" scoped>
@lunarFestivalColor: #FDC52E;
@solarFestivalColor: @baseColor;

.btn(@width:110) {
    width: @width/75rem;
    height: 50/75rem;
    border: 0;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    background-color: #fff;
    .round(14/75rem);
    font-size: 26/75rem;
}
.select{
    .flex-around();
    & > i {
        display: inline-block;
        width: 22/75rem;
        height: 22/75rem;
        background: url('../assets/image/common/select@2x.png') no-repeat center center / 100% 100%;
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
        background-color: @baseColor;
        color: #fff;
    }
}
i{
    display: block;
    width: 44/75rem;
    height: 44/75rem;
    background: url("../assets/image/common/right@2x.png") no-repeat center center / 100% 100%;
}
.article-cell {
    .flex-between();
    margin-top: 32/75rem;
}
h2 {
    font-size: 28/75rem;
    font-weight: normal;
}

.content-wrap {
    position: absolute;
    top: 169/75rem;
    bottom: 110/75rem;
    left: 0;
    width: 100%;
    overflow: auto;
    .border-box();
    .btn-list {
        .flex-around();
        .btn-seleced {
            background-color: @baseColor !important;
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
                    background:@baseColor;
                    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                    border-radius:50%;
                    color: #fff;
                }
                .solar-click-day {
                    border-radius:50%;
                    background:rgba(0,0,0,0.1);
                }
                .not-click-day {
                    & > p {
                        .ellipsis(1);
                    }
                }
                .lunar-click-day {
                    & > p {
                        .ellipsis(2);
                    }
                } 
                .lunar-today {
                    color : @baseColor;
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
                    font-size:24/75rem;
                    text-align: center;
                }
            }
        }
    }
    .info-without-more {
        height:150/75rem !important;
    }
    .info {
        width:95%;
        margin : 10/75rem auto 0 auto;
        height:281/75rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        border-radius:29/75rem;
        padding : 0 24/75rem 24/75rem 24/75rem;
        overflow: hidden;
        .border-box();
        & > div {
            margin-top : 24/75rem;
            font-size: 24/75rem;
        }
        .info-header {
            color: @baseColor;
            font-size: 28/75rem;
            font-weight: bold;
        }
        .info-gz {
            & > span {
                font-size: 26/75rem;
            }
        }
        .info-yi {
            .flex-start();
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
        }
        .info-ji {
            .flex-between();
            .left {
                .info-yi();
                .title { 
                    color : @baseColor;
                }
            }
            .more {
                .flex-end();
                & > div {
                    margin-right : 16/75rem;
                    font-size: 28/75rem;
                    font-weight: bold;
                    color: rgba(0, 0, 0, 0.5);
                }
            }
        }
    }
    .article {
        /deep/ .nav {
            margin-right: 16/75rem;
            margin-bottom: 0;
            /deep/ .nav-list {
                .flex-between();
            }
        }
        .swiper {
            padding: 0 20/75rem 0 32/75rem;;
        }
    }
}
</style>

