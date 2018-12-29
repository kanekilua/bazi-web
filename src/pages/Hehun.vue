<template>
    <div class="wrap">
        <div class="content-wrap">
            <div class="content">
                <div class="banxin">
                    <h2 class="male-msg">男方信息</h2>
                    <input type="text" class="name-input" placeholder="请输入您的姓名" placeholder-align="left" v-model="maleName">
                    <div class="birthPlace">
                        <div @click="showProvinceFunc('1')"><span id="province">{{maleProvince}}</span><i></i></div>
                        <div @click="showCityFunc('1')"><span id="city">{{maleCity}}</span><i></i></div>
                    </div>
                    <div class="check-box">
                        <input type="radio" id="male-gongli" name="male-date" v-model="maleDateType" value="1">
                        <label for="male-gongli">公历</label>
                        <input type="radio" id="female-nongli" name="male-date" v-model="maleDateType" value="0">
                        <label for="female-nongli">农历</label>
                    </div>
                    <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择出生日期" @click="showDatePlugin('1')" readonly="readonly" v-model="maleBirthDate">
                    <!-- 女方 -->
                    <h2 class="female-msg">女方信息</h2>
                    <input type="text" class="name-input" placeholder="请输入您的姓名" placeholder-align="left" v-model="femaleName">
                    <div class="birthPlace">
                        <div @click="showProvinceFunc('0')"><span id="province">{{femaleProvince}}</span><i></i></div>
                        <div @click="showCityFunc('0')"><span id="city">{{femaleCity}}</span><i></i></div>
                    </div>
                    <div class="check-box">
                        <input type="radio" id="gongli" name="date" v-model="femaleDateType" value="1">
                        <label for="gongli">公历</label>
                        <input type="radio" id="nongli" name="date" v-model="femaleDateType" value="0">
                        <label for="nongli">农历</label>
                    </div>
                    <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择出生日期" @click="showDatePlugin('0')" readonly="readonly" v-model="femaleBirthDate">
                    <button class="begin-test" @click="$jump('/HehunAnalyze')">开始测算</button>
                </div>
            </div>
        </div>
        <div class="article">
            <div class="nav">
                <div class="color-line"></div>
                <div class="title">八字合婚文章</div>
            </div>
            <div class="hItem" v-for="(item,index) in article" :key="index">
                <h2>{{item}}</h2><i></i>
            </div>
        </div>
    </div>
</template>
<script>
import solarLunar from 'solarLunar'
import {mapState,mapMutations} from 'vuex'
export default {
    props : ['article'],
    computed : {
        ...mapState('love',['hehunInputFlag','maleProvince','femaleProvince','maleCity','femaleCity']),
    },
    data () {
        return{
            backLink: "/love",
            // male info
            maleName : "",
            maleDateType : "1",
            maleBirthDate : "",
            maleDateArray : [],
            showMaleCity : false,

            // female info
            femaleName : "",
            femaleDateType : "1",
            femaleBirthDate : "",
            femaleDateArray : [],
            showFemaleCity : false
        }
    },
    methods: {
        ...mapMutations('love',['updateShowProvince','updateShowMaleCity','updateShowFemaleCity','updateHehunInputFlag']),
        showDatePlugin : function (flag) {
            this.updateHehunInputFlag(flag);
            this.$vux.datetime.show({
                cancelText: '取消',
                confirmText: '确定',
                format: 'YYYY-M-D-H',
                yearRow : '{value}年',
                monthRow : '{value}月',
                dayRow : '{value}日',
                hourRow : '{value}点',
                minYear: '1890',
                maxYear: '2090',
                onHide : (type) => {
                    if(type === 'cancel') {
                        if(this.hehunInputFlag === '1') {
                            this.maleBirthDate = "";
                            this.maleDateArray = [];
                        }else if (this.hehunInputFlag === '0') {
                            this.femaleBirthDate = "";
                            this.femaleDateArray = [];
                        }
                    }
                },
                onConfirm:(val) => {
                    // 点击确定，将年月日赋值给dateArray，将格式化的日期赋值给birthDate
                    let valArray = val.split('-');
                    let dateArrayTemp = [];
                    for(let i=0;i<valArray.length ; ++i) {
                        dateArrayTemp[i] = parseInt(valArray[i]);
                    }
                    let birthDateTemp = dateArrayTemp[0] + '年' + dateArrayTemp[1] + '月' + dateArrayTemp[2] + '日' + ' ' + dateArrayTemp[3] + '点';
                    if(this.hehunInputFlag === '1') {
                        this.maleBirthDate = birthDateTemp;
                        this.maleDateArray = dateArrayTemp;
                    }else if (this.hehunInputFlag === '0') {
                        this.femaleBirthDate = birthDateTemp;
                        this.femaleDateArray = dateArrayTemp;
                    }
                }
            });
        },
        selectProvince : function (item) {
            if(this.hehunInputFlag === '1') {
                this.maleProvince = item.name;
                this.maleCityList = global.CITY_LIST[item.id];
            }else if (this.hehunInputFlag === '0') {
                this.femaleProvince = item.name;
                this.femaleCityList = global.CITY_LIST[item.id];
            }
            this.showProvince = false;
        },
        selectCity : function (item) {
            if(this.hehunInputFlag === '1') {
                 this.maleCity = item.name;
                 this.showMaleCity = false;
            }else if (this.hehunInputFlag === '0') {
                 this.femaleCity = item.name;
                 this.showFemaleCity = false;
            }
        },
        showProvinceFunc : function (flag) { 
            this.updateHehunInputFlag(flag);
            this.updateShowProvince(true);
        },
        showCityFunc :function (flag) {
            this.updateHehunInputFlag(flag);
            if(this.hehunInputFlag === '1') {
                this.updateShowMaleCity(true);
            }else if (this.hehunInputFlag === '0') {
                this.updateShowFemaleCity(true);
            }
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    bottom: 0;
    left: 0;
    width: 100%;
    overflow-y: auto;
    .content{
        width: 100%;
        background: url('../assets/image/love/hehun-bg@2x.png') no-repeat center center / 100% 100%;
        overflow: hidden;
    }
    .banxin{
        width: 500/75rem;
        margin: 0 auto;
        padding-top: 300/75rem;
        .male-msg, .female-msg{
            margin: 32/75rem 0 12/75rem 32/75rem;
            color: #AE251F;
            font-size: 32/75rem;
            opacity: 0.8;
        }
        .title-img{
            display: block;
            margin: 35/75rem auto;
            width: 408/75rem;
            height: 168/75rem;
        }
        .name-input{
            display: block;
            width: 448/75rem;
            height: 80/75rem;
            margin: 0 auto;
            border-radius: 20px;
            border: none;
            outline: none;
            padding-left: 32/75rem;
            font-size: 26/75rem;
            box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        }
        .birthPlace {
            .flex-between();
            overflow: hidden;
            width: 480/75rem;
            height: 80/75rem;
            line-height: 80/75rem; 
            margin: 32/75rem auto;
            border-radius: 20px;
            font-size: 34/75rem;
            padding-left: 7.5/75rem;
            color:@inputColor;
            background: #fff;
            box-shadow:0px 3px 6px rgba(0,0,0,0.16);
            padding: 0 30/75rem;
            box-sizing: border-box;
            & > div > i {
                display: inline-block;
                width: 22/75rem;
                height: 22/75rem;
                margin-left: 24/75rem;
                background: url('../assets/image/bazi-birth/unfold.png') no-repeat center center / 100% 100%;
            }
        }
        .check-box{
            width: 480/75rem;
            margin: 25/75rem auto;
            .flex-between();
            input[type="radio"]{
                display: none;
            }
            input[type="radio"] + label{
                display: inline-block;
                width: 88/75rem;
                height: 88/75rem;
                line-height: 88/75rem;
                .boxshadow(0,3/75rem,6/75rem,rgba(0,0,0,0.16));
                .round(50%);
                text-align: center;
                background: #fff;
                color: @inputColor;
                font-size: 28/75rem;
            }
            input[type="radio"]:checked + label{
                background: #AE251F;
                color: #fff;
            }
        }
        .begin-test{
            width: 100%;
            height: 116/75rem;
            display: block;
            margin: 50/75rem auto 85/75rem auto;
            .round(36/75rem);
            background:#AE251F;
            color: #fff;
            font-size: 28/75rem;
            border: none;
            &:active{
                background: #eee;
            }
        }
    }
}
.article {
    margin-left : 21/75rem;
    margin-right : 27/75rem;
    & > .nav {
        margin-top: 29/75rem;
        margin-left : 16/75rem;
        .flex-start();
        & > .color-line {
            width: 9/75rem;
            height: 37/75rem;
            background-color: @baseColor;
            .round(5/75rem);
            margin-right:24/75rem;
        }
        & > .title {
            font-size: 28/75rem;
        }
    }
    .hItem{
        margin-top: 30/75rem;
        .flex-between();
        margin-bottom: 32/75rem;
        & > h2{
            font-size: 28/75rem;
            font-weight: normal;
        }
        & > i{
            display: inline-block;
            width: 44/75rem;
            height: 44/75rem;
            background: url("../assets/image/common/right@2x.png") no-repeat center center / 100% 100%;
        }
    }
}
</style>


