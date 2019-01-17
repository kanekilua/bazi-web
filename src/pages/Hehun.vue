<template>
    <div class="wrap">
        <div class="content-wrap">
            <div class="content">
                <div class="banxin">
                    <h2 class="male-msg">男方信息</h2>
                    <input type="text" class="name-input" placeholder="请输入您的姓名" placeholder-align="left" v-model="maleName">
                    <div class="birthPlace">
                        <div @click="showProvinceFunc('1')"><span id="province">{{maleProvince}}</span><i></i></div>
                        <div class="saparator"></div>
                        <div @click="showCityFunc('1')"><span id="city">{{maleCity}}</span><i></i></div>
                    </div>
                    <div class="check-box">
                        <input type="radio" id="male-gongli" name="male-date" v-model="maleDateType" value="1">
                        <label for="male-gongli">公历</label>
                        <input type="radio" id="male-nongli" name="male-date" v-model="maleDateType" value="0">
                        <label for="male-nongli">农历</label>
                    </div>
                    <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择出生日期" @click="showDatePlugin('1')" readonly="readonly" v-model="maleBirthDate">
                    <!-- 女方 -->
                    <h2 class="female-msg">女方信息</h2>
                    <input type="text" class="name-input" placeholder="请输入您的姓名" placeholder-align="left" v-model="femaleName">
                    <div class="birthPlace">
                        <div @click="showProvinceFunc('0')"><span id="province">{{femaleProvince}}</span><i></i></div>
                        <div class="saparator"></div>
                        <div @click="showCityFunc('0')"><span id="city">{{femaleCity}}</span><i></i></div>
                    </div>
                    <div class="female-check-box">
                        <input type="radio" id="female-gongli" name="female-date" v-model="femaleDateType" value="1">
                        <label for="female-gongli">公历</label>
                        <input type="radio" id="female-nongli" name="female-date" v-model="femaleDateType" value="0">
                        <label for="female-nongli">农历</label>
                    </div>
                    <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择出生日期" @click="showDatePlugin('0')" readonly="readonly" v-model="femaleBirthDate">
                    <button class="begin-test" @click="jumpTest">开始测算</button>
                </div>
            </div>
        </div>
        <div class="article">
            <v-title-nav>
                八字合婚文章
            </v-title-nav>
            <div class="hItem" v-for="(item,index) in article" :key="index" @click="jumpArticle(item)">
                <h2>{{item.title}}</h2><i></i>
            </div>
        </div>
    </div>
</template>
<script>
import solarLunar from 'solarLunar'
import { dateFormat } from 'vux'
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
                ...global.DATETIME_OPTION,
                endDate :  dateFormat(new Date(), 'YYYY-MM-DD'),
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
                    let birthDateTemp = dateArrayTemp[0] + '年' + dateArrayTemp[1] + '月' + dateArrayTemp[2] + '日' + ' ' + dateArrayTemp[3] + '点' + dateArrayTemp[4] + '分';
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
        },
        jumpTest : function () {
            if(!this.$utils.checkName(this.maleName,this)) {
                this.$vux.toast.text('请填写男方的正确姓名','top');
                return;
            }
            if(!this.maleBirthDate){
                this.$vux.toast.text('请选择男方的出生日期','top');
                return;
            }
            if(!this.$utils.checkName(this.femaleName,this)) {
                this.$vux.toast.text('请填写女方的正确姓名','top');
                return;
            }
            if(!this.femaleBirthDate){
                this.$vux.toast.text('请选择女方的出生日期','top');
                return;
            }
            this.$router.push({
                name : 'hehunAnalyze',
                params : {
                    maleDateArr : this.maleDateArray,
                    femaleDateArr : this.femaleDateArray
                }
            })
        },
        jumpArticle : function (article) {
            this.$router.push({
                name : 'article',
                query : {
                    cid : '95',
                    id : article.id
                }
            })
        }
        
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
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
        padding-top: 220/75rem;
        .border-box();
        .male-msg, .female-msg{
            margin: 32/75rem 0;
            color: #fff;
            font-size: 38/75rem;
            line-height: 53/75rem;
            text-align: center;
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
            width: 462/75rem;
            height: 80/75rem;
            margin: 0 auto;
            .round(10/75rem);
            border: none;
            outline: none;
            padding-left: 32/75rem;
            font-size: 30/75rem;
            box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        }
        .birthPlace {
            .flex-start();
            overflow: hidden;
            height: 80/75rem;
            line-height: 80/75rem; 
            margin: 32/75rem auto;
            .round(10/75rem);
            font-size: 30/75rem;
            background: #fff;
            box-shadow:0px 3px 6px rgba(0,0,0,0.16);
            // padding: 0 30/75rem;
            box-sizing: border-box;
            div:nth-child(2) {
                width: 1px;
                height: 70%;
                border-right: 1px solid #C9C9C9;
            }
            & > div {
                width: 50%;
                height: 100%;
                text-align: center;
                .flex-start();
                & > span {
                    display: block;
                    width: 80%;
                    height: 100%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap
                }
            }
            & > div > i {
                display: inline-block;
                width: 22/75rem;
                height: 22/75rem;
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
                font-size: 28/75rem;
            }
            input[type="radio"]:checked + label{
                background: #36BDE8;
                color: #fff;
            }
        }
        .female-check-box {
            .check-box();
            input[type="radio"]:checked + label{
                background: #FF9A9A;
            }
        }
        .begin-test{
            width: 100%;
            height: 90/75rem;
            display: block;
            margin: 50/75rem auto 85/75rem auto;
            .round(75/75rem);
            background:#FF9A9A;
            color: #fff;
            font-size: 34/75rem;
            border: none;
            &:active{
                background: #eee;
            }
        }
    }
}
.article {
    margin-top: 12/75rem;
    .hItem:nth-child(2) {
        margin-top: 0;
    }
    .hItem{
        margin: 30/75rem 42/75rem 0 32/75rem;
        .flex-between();
        margin-bottom: 32/75rem;
        & > h2{
            font-size: 28/75rem;
            font-weight: normal;
        }
        & > i{
            display: inline-block;
            width: 13/75rem;
            height: 25/75rem;
            background: url("../assets/image/common/more.png") no-repeat center center / 100% 100%;
        }
    }
}
</style>


