<template>
    <div class="bazi-birth-wrap">
        <v-title-header>生辰八字</v-title-header>
        <div class="birth-form">
            <h2 class="form-title">生辰八字</h2>
            <input type="text" class="input-name" placeholder="请输入您的姓名" v-model="name">
            <div class="gender">
                <div class="male">
                    <input type="radio" id="male" name='gender' v-model="gender" value="1">
                    <label for="male"></label>
                    <div class="gender-txt">男</div>
                </div>
                <div class="female">
                    <input type="radio" id="female" name='gender' v-model="gender" value="0">
                    <label for="female"></label>
                    <div  class="gender-txt">女</div>
                </div>
            </div>
            <div class="birthPlace">
                出生地点：
                <span @click="showProvince=true"><span id="province">{{province}}</span><i></i></span>
                <span @click="showCity=true"><span id="city">{{city}}</span><i></i></span>
            </div>
            <div class="dateType">
                日期类型：
                <div class="gregorian">
                    <input type="radio" id="gregorian" name='dateType' v-model="dateType" value="1">
                    <label for="gregorian"></label>
                    <div class="date-txt">公历</div>
                </div>
                <div class="lunar">
                    <input type="radio" id="lunar" name='dateType' v-model="dateType" value="0">
                    <label for="lunar"></label>
                    <div  class="date-txt">农历</div>
                </div>
            </div>
            <input id="dateInput" type="text" class="input-born" placeholder="请选择您的出生日期" @click="showDatePlugin" readonly="readonly" v-model="birthDate">
            <x-button :gradients="[gradientStart, gradientEnd]" id="save-confirm" @click.native="saveData">确认保存</x-button>

            <!-- 选择省份的弹出框 -->
            <div transfer-dom>
                <popup v-model="showProvince" position="bottom" height="50%">
                    <group>
                        <cell v-for="(item,index) in provinceList" :key="index" :title="item.name" @click.native="selectProvince(item)"></cell>
                    </group>
                </popup>
            </div>
            <!-- 选择城市的弹出框 -->
            <div transfer-dom>
                <popup v-model="showCity" position="bottom" height="50%">
                    <group>
                        <cell v-for="(item,index) in cityList" :key="index" :title="item.name" @click.native="selectCity(item)"></cell>
                    </group>
                </popup>
            </div>
        </div>
        <div class="user-manage" v-if="paipanDataList.length > 1" >
            <v-title-nav>
                <span slot="title" class="navTitle">用户管理</span>
                <span slot='more'></span>
            </v-title-nav>
            <div>
                <div v-for="(item,index) in paipanDataList" :key="index" class="user-item">
                    <div class="avanda"></div>
                    <div class="content">
                        <div><span class="title">姓名：</span><span>{{item.name}}</span></div>
                        <div><span class="title">生辰：</span><span>{{item.year}}年{{item.month}}月{{item.date}}日 {{item.hour}}点</span></div>
                    </div>
                    <div class="switch-btn">
                        <button @touchstart="btnStyleChange(index)" :class="{'active': touchIndex === index}" @click="selectUser(item,index)">切换用户</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import solarLunar from 'solarLunar'
import { dateFormat } from 'vux'
import {mapMutations} from 'vuex'

export default  {
    created() {
        let app_paipan_data = localStorage.getItem(global.APP_BAZI_DATA);
        if(app_paipan_data != undefined) {
            this.paipanDataList = JSON.parse(app_paipan_data);
        }
    },
    data () {
        return  {
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            name : "",
            gender: "1",
            province : "忽略",
            city : "忽略",
            showProvince : false,
            showCity : false,
            provinceList : global.PROVINCE_LIST,
            cityList : global.CITY_LIST['0'],
            birthDate : "",
            dateType : "1",
            dateArray : [],
            paipanDataList : [],
            touchIndex : -1
        }
    },
    methods : {
        ...mapMutations('baziMingPan',['updateBaziUserInfo']),
        btnStyleChange : function (index) {
            this.touchIndex = index;
        },
        showDatePlugin : function () {
            this.$vux.datetime.show({
                ...global.DATETIME_OPTION,
                endDate :  dateFormat(new Date(), 'YYYY-MM-DD'),
                onHide : (type) => {
                    if(type === 'cancel') {
                        this.birthDate = "";
                        this.dateArray = [];
                    }
                },
                onConfirm:(val) => {
                    // 点击确定，将年月日赋值给dateArray，将格式化的日期赋值给birthDate
                    let valArray = val.split('-');
                    for(let i=0;i<valArray.length ; ++i) {
                        this.dateArray[i] = parseInt(valArray[i]);
                    }
                    this.birthDate = this.dateArray[0] + '年' + this.dateArray[1] + '月' + this.dateArray[2] + '日' + ' ' + this.dateArray[3] + '点' + this.dateArray[4] + '分';
                }
            });
        },
        selectProvince : function (item) {
            this.province = item.name;
            this.cityList = global.CITY_LIST[item.id];
            this.showProvince = false;
        },
        selectCity : function (item) {
            this.city = item.name;
            this.showCity = false;
        },
        saveData : function () {
            if(!this.$utils.checkName(this.name,this)) {
                return;
            }
            if(this.dateArray.length === 0 || this.birthDate === '') {
                this.$vux.toast.text('请选择出生日期','top');
                return;
            }
            if(this.dateType === '0') {
                // 农历转公历的对象
                let solar = solarLunar.lunar2solar(parseInt(this.dateArray[0]),parseInt(this.dateArray[1]),parseInt(this.dateArray[2]));
                this.dateArray[0] =solar.cYear;
                this.dateArray[1] =solar.cMonth;
                this.dateArray[2] =solar.cDay;
            }
            let paipanData = {
                'cid' : 48,
                'name' : this.name,
                'area' : this.province === "忽略" ? null : this.province,
                'sex' : this.gender,
                'year' : this.dateArray[0],
                'month' : this.dateArray[1],
                'date' : this.dateArray[2],
                'hour' : this.dateArray[3],
                'minute' : this.dateArray[4],
                'yezis' : 1
            }
            let app_paipan_data = [];
            // 判断localStorage中是否有global.APP_BAZI_DATA，有的话取出来
            if(localStorage.hasOwnProperty(global.APP_BAZI_DATA)) {
                app_paipan_data = JSON.parse(localStorage.getItem(global.APP_BAZI_DATA));
            }
            // 判断localStorage中的global.APP_BAZI_DATA的长度是否等于最大值，是的话删除最后一个元素
            if(app_paipan_data.length === global.APP_BAZI_DATA_MAX){
                app_paipan_data.splice(global.APP_BAZI_DATA_MAX-1,1);
            }
            app_paipan_data.unshift(paipanData);
            localStorage.setItem(global.APP_BAZI_DATA,JSON.stringify(app_paipan_data));
            this.updateBaziUserInfo(paipanData);
            this.$jump('/bazi');
        },
        selectUser : function (item,index) {
            let app_paipan_data = JSON.parse(localStorage.getItem(global.APP_BAZI_DATA));
            // 删除掉点击的item，再在数组的首部添加item -> 将item移至首位的操作
            app_paipan_data.splice(index,1);
            app_paipan_data.unshift(item);
            localStorage.setItem(global.APP_BAZI_DATA,JSON.stringify(app_paipan_data));
            this.updateBaziUserInfo(item);
            this.$jump('/bazi');
        }
    }
}
</script>
<style lang="less" scoped>
.bazi-birth-wrap {
    .birth-form{
        width: 640/75rem;
        height: 847/75rem;
        margin: 24/75rem auto 0 auto;
        box-sizing: border-box;
        padding: 50/75rem;
        .round(50/75rem);
        background: #fff;
        box-shadow: 0 10/75rem 10/75rem #eee;
    }
    .form-title{
        font-size: 32/75rem;
        margin-bottom: 57/75rem;
    }
    .input-name, .input-born{
        width: 100%;
        height: 65/75rem;
        line-height: 65/75rem;
        padding-left: 15/75rem;
        border: none;
        border-bottom: 1px solid #eee; 
        font-weight: 400;
        font-size: 34/75rem;
        font-weight:400;
        color:rgba(0,0,0,1);
        outline: none;
    }
    .input-born{
        margin-bottom: 80/75rem;
    }
    .gender{
        .flex-between();
        width: 80%;
        margin: 40/75rem;
        font-size: 34/75rem;
        .male,.female{
            .flex-start();
        }
        input[type="radio"]{
            display: none;
        }
        input[type="radio"] + label{
            width: 44/75rem;
            height: 44/75rem;
            .round(50%);
            margin-right: 40/75rem;
            border: 1px solid #eee;
        }
        input[id="male"]:checked  + label{
           background: url('../assets/image/birth/man.png') no-repeat center center / 100% 80%;
           & + div{
                color:rgba(0,0,0,1);
                opacity:0.8;
           }
        }
        input[id="female"]:checked  + label{
           background: url('../assets/image/birth/woman.png') no-repeat center center / 40% 100%;
           & + div{
                color:rgba(0,0,0,1);
                opacity:0.8;
           }
        }
        .gender-txt{
            color:rgba(0,0,0,1);
                opacity:0.2;
        }
    }
    .birthPlace {
        font-size: 34/75rem;
        padding-left: 7.5/75rem;
        color:@inputColor;
        #city {
            margin-left: 30/75rem;
        }
        & > span > i {
            display: inline-block;
            width: 22/75rem;
            height: 22/75rem;
            margin-left: 24/75rem;
            background: url('../assets/image/bazi-birth/unfold.png') no-repeat center center / 100% 100%;
        }
    }
    .birthType {
        margin-top: 28/75rem;
        font-size: 34/75rem;
        padding-left: 7.5/75rem;
        color:@inputColor;
    }
    .dateType {
        .flex-start();
        margin-top: 28/75rem;
        font-size: 34/75rem;
        padding-left: 7.5/75rem;
        color:@inputColor;
        .gregorian{
            .flex-start();
        }
        .lunar {
            .flex-start();
            margin-left: 55/75rem;
        }
        input[type="radio"]{
            display: none;
        }
        input[type="radio"] + label{
            width: 22/75rem;
            height: 22/75rem;
            .round(50%);
            margin-right: 26/75rem;
            border: 1px solid #eee;
        }
        input[name="dateType"]:checked  + label{
            background-color: @baseColor;
           & + div{
                color:rgba(0,0,0,1);
                opacity:0.8;
           }
        }
    }
    #dateInput {
        margin-top: 28/75rem;
    }
    #save-confirm{
        width: 504/75rem;
        height: 90/75rem;
        border-radius: 40/75rem;
        font-size: 28/75rem;
    }
    .user-manage {
        width: 640/75rem;
        margin: 0 auto 0 auto;
        .navTitle {
            font-size:28/75rem;
            color:rgba(0,0,0,1);
            opacity:0.7;
        }
        .user-item:nth-child(1) {
            padding: 10/75rem 0 27/75rem 0;
        }
        .user-item {
            padding: 32/75rem 0 27/75rem 0;
            border-bottom:1px solid rgba(200,200,200,0.35);
            .flex-between();
            .avanda {
                width: 88/75rem;
                height: 88/75rem;
                background-color: @baseColor;
                .round(50%);
            }
            .content {
                margin: 0 60/75rem 0 41/75rem;
                font-size: 24/75rem;
                width: 308/75rem;
                .title {
                    font-weight: bold;
                    color : rgba(0,0,0,0.8);
                }
                div:nth-child(1){
                    margin-bottom: 20/75rem;
                }
            }
            .switch-btn {
                & > button {
                    width: 130/75rem;
                    height: 50/75rem;
                    background-color: #fff;
                    border: 1px solid #eee;
                    color: #000;
                    font-size: 26/75rem;
                    .round(18/75rem);
                    .boxshadow(0,0,8/75rem,rgba(0,0,0,0.13));
                    &.active {
                        background-color: @baseColor;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>

