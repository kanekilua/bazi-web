<template>
    <div class="wrap">
        <div class="content-wrap">
            <div class="content">
                <div class="banxin">
                    <div class="form">
                        <div class="gender-box">
                            <img src="../assets/image/love/male.png">
                            <div class="right-box">
                                <div class="input-box">
                                    <div class="input-left">男方</div>
                                    <input type="text" class="name-input" placeholder="请输入您的姓名" placeholder-align="left" v-model="maleName">
                                </div>
                                <div class="input-box">
                                    <div class="input-left">
                                        <popup-picker :placeholder="title1" :data="list1" @on-change="onChange"></popup-picker>
                                        <i></i>
                                    </div>
                                    <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择出生日期" @click="showDatePlugin('1')" readonly="readonly" v-model="maleBirthDate">                                    
                                </div>
                            </div>
                            <!-- <div class="birthPlace">
                                <div @click="showProvinceFunc('1')"><span id="province">{{maleProvince}}</span><i></i></div>
                                <div class="saparator"></div>
                                <div @click="showCityFunc('1')"><span id="city">{{maleCity}}</span><i></i></div>
                            </div> -->
                        </div>
                        <!-- 女方 -->
                        <div class="gender-box">
                            <img src="../assets/image/love/female.png">
                            <div class="right-box">
                                <div class="input-box">
                                    <div class="input-left">女方</div>
                                    <input type="text" class="name-input" placeholder="请输入您的姓名" placeholder-align="left" v-model="femaleName">
                                </div>
                                <div class="input-box">
                                    <div class="input-left">
                                        <popup-picker :placeholder="title2" :data="list2" @on-change="onChange2"></popup-picker>
                                        <i class="female-select"></i></div>
                                    <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择出生日期" @click="showDatePlugin('0')" readonly="readonly" v-model="femaleBirthDate">
                                </div>
                            </div>
                        </div>                        
                        <!-- <div class="gender-box">
                            <img src="../assets/image/love/female.png">
                            <input type="text" class="name-input" placeholder="请输入您的姓名" placeholder-align="left" v-model="femaleName">
                            <input id="dateInput" type="text" class="name-input input-born" placeholder="请选择出生日期" @click="showDatePlugin('0')" readonly="readonly" v-model="femaleBirthDate">
                        </div> -->
                    </div>
                    <button class="begin-test" @click="jumpTest"></button>
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
            // maleDateType : "1",
            maleBirthDate : "",
            maleDateArray : [],
            showMaleCity : false,

            // female info
            femaleName : "",
            // femaleDateType : "1",
            femaleBirthDate : "",
            femaleDateArray : [],
            showFemaleCity : false,

            title1: '公历',
            list1: [['公历', '农历']],
            title2: '公历',
            list2: [['公历', '农历']],
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
        // selectProvince : function (item) {
        //     if(this.hehunInputFlag === '1') {
        //         this.maleProvince = item.name;
        //         this.maleCityList = global.CITY_LIST[item.id];
        //     }else if (this.hehunInputFlag === '0') {
        //         this.femaleProvince = item.name;
        //         this.femaleCityList = global.CITY_LIST[item.id];
        //     }
        //     this.showProvince = false;
        // },
        // selectCity : function (item) {
        //     if(this.hehunInputFlag === '1') {
        //          this.maleCity = item.name;
        //          this.showMaleCity = false;
        //     }else if (this.hehunInputFlag === '0') {
        //          this.femaleCity = item.name;
        //          this.showFemaleCity = false;
        //     }
        // },
        // showProvinceFunc : function (flag) { 
        //     this.updateHehunInputFlag(flag);
        //     this.updateShowProvince(true);
        // },
        // showCityFunc :function (flag) {
        //     this.updateHehunInputFlag(flag);
        //     if(this.hehunInputFlag === '1') {
        //         this.updateShowMaleCity(true);
        //     }else if (this.hehunInputFlag === '0') {
        //         this.updateShowFemaleCity(true);
        //     }
        // },
        jumpTest : function () {
            // 公历转农历
            if(this.title1==='农历') {
                let solar = solarLunar.lunar2solar(parseInt(this.maleDateArray[0]),parseInt(this.maleDateArray[1]),parseInt(this.maleDateArray[2]));
                this.maleDateArray[0] =solar.cYear;
                this.maleDateArray[1] =solar.cMonth;
                this.maleDateArray[2] =solar.cDay;
            }if(this.title2==='农历') {
                let solar = solarLunar.lunar2solar(parseInt(this.femaleDateArray[0]),parseInt(this.femaleDateArray[1]),parseInt(this.femaleDateArray[2]));
                this.femaleDateArray[0] =solar.cYear;
                this.femaleDateArray[1] =solar.cMonth;
                this.femaleDateArray[2] =solar.cDay;
            }
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
            MobclickAgent.onEventWithParameters('cesuan', {'type' : 'hehun'});
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
        },
        onChange (val) {
        this.title1 = val[0];
        },
        onChange2 (val) {
        this.title2 = val[0];
        }, 
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    width: 100%;
    overflow-y: auto;
    .content{
        width: 100%;
        height: 916/75rem;
        background: url('../assets/image/love/hehun-bg.png') no-repeat center center / 100% 100%;
        overflow: hidden;
    }
    .banxin{
        margin: 0 auto;
        margin: 395/75rem auto 0 auto;
        padding: 0 20/75rem 20/75rem 20/75rem;
        .border-box();
        .form{
            width: 100%;
            padding: 30/75rem;
            .round(10/75rem);
            .border-box();
            background: rgba(251,247,232,1);
            .gender-box{
                .flex-between();
                .border-box();
                & >img{
                    width: 96/75rem;
                    height: 96/75rem;
                }
                .right-box{
                    .input-box{
                        width: 530/75rem;
                        height: 65/75rem;
                        margin-bottom: 8/75rem;
                        .round(10/75rem);
                        background: #fff;
                        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
                        .flex-start();
                        .input-left{
                            .flex-start();
                            width: 22%;
                            padding-left: 17/75rem;
                            .border-box();
                            & > i{
                                display: block;
                                width: 22/75rem;
                                height: 11/75rem;
                                margin-left: 9/75rem;
                                background: url('../assets/image/love/black-select.png') no-repeat center center / 100% 100%;
                            }
                            .female-select{
                                background: url('../assets/image/love/pink-select.png') no-repeat center center / 100% 100%;
                            }
                        }
                        input{
                            width:77%;
                            height: 37/75rem;
                            line-height: 37/75rem;
                            border: none;
                            border-left: 1px solid rgba(201,201,201,1);
                            padding-left: 12/75rem;
                            .border-box();
                        }
                    }
                }
            }
            .gender-box:nth-child(2){
                margin-top: 25/75rem;
            }
        }
        .begin-test{
            width: 100%;
            height: 90/75rem;
            display: block;
            margin: 30/75rem auto auto auto;
            // .round(75/75rem);
            background: url('../assets/image/love/btn-bg.png') no-repeat center center / 100% 100%;
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


