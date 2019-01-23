<template>
    <div class="bazi-birth-wrap">
        <v-header></v-header>
        <v-title-header>奇门遁甲资料</v-title-header>
        <div class="birth-form">
            <h2 class="form-title">启盘资料</h2>
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
            <input type="text" class="input-things" placeholder="请输入您需要占卜的事" v-model="zhanshi">
            <div class="dateType">
                日期类型：
                <div class="gregorian">
                    <div class="date-txt">公历</div>
                    <input type="radio" id="gregorian" name='dateType' v-model="dateType" value="1">
                    <label for="gregorian"></label>
                </div>
                <div class="lunar">
                    <div  class="date-txt">农历</div>
                    <input type="radio" id="lunar" name='dateType' v-model="dateType" value="0">
                    <label for="lunar"></label>
                </div>
            </div>
            <input id="dateInput" type="text" class="input-born" placeholder="请选择您的出生日期" @click="showDatePlugin" readonly="readonly" v-model="birthDate">
            <h2 class="qiju-title">按公历起局</h2>
            <div class="qimenList">
                <div class="qijuItem">
                    <input type="radio" id="gongli" name='qimenList' v-model="qimenList" value="zp">
                    <label for="gongli"></label>
                    <div class="qiju-txt">转盘奇门</div>
                </div>
                <div class="qijuItem">
                    <input type="radio" id="sizhu" name='qimenList' v-model="qimenList" value="fg">
                    <label for="sizhu"></label>
                    <div  class="qiju-txt">飞盘奇门</div>
                </div>
            </div>
            <div class="feipanList-box">
                <div class="feipanList" v-show="qimenList==='fg'">
                    <div class="qijuItem">
                        <input type="radio" id="reverse" name='feipanList' v-model="feipanList" value="1">
                        <label for="reverse"></label>
                        <div  class="qiju-txt">阳顺阴逆</div>
                    </div>
                    <div class="qijuItem">
                        <input type="radio" id="sort" name='feipanList' v-model="feipanList" value="0">
                        <label for="sort"></label>
                        <div  class="qiju-txt">全部顺排</div>
                    </div>
                </div>
            </div>
            <x-button  id="save-confirm" @click.native="saveData">开始起局</x-button>
        </div>
    </div>
</template>
<script>
import solarLunar from 'solarLunar'
import {mapMutations} from 'vuex'
import { dateFormat } from 'vux'

export default  {
    data () {
        return  {
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            name : "",
            gender: "1",
            birthDate : "",
            dateType : "1",
            qipanType: "1",
            dateArray : [],
            qimenList : 'zp',
            zhanshi : '',
            feipanList : '1',
            apiParams : {},
        }
    },
    methods : {
        ...mapMutations('baziMingPan',['updateBaziUserInfo']),
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
                    this.birthDate = this.dateArray[0] + '年' + this.dateArray[1] + '月' + this.dateArray[2] + '日' + ' ' + this.dateArray[3] + '点';
                }
            });
        },
        saveData : function () {
            if(!this.$utils.checkName(this.name,this)) {
                return;
            }
            if(this.dateArray.length === 0 || this.birthDate === '') {
                this.$vux.toast.text('请选择出生日期','top');
                return;
            }
            if(this.zhanshi.trim()==''){
                this.$vux.toast.text('请输入您想占卜的事','top');
                return;
            }
            if(this.dateType === '0') {
                // 农历转公历的对象
                let solar = solarLunar.lunar2solar(parseInt(this.dateArray[0]),parseInt(this.dateArray[1]),parseInt(this.dateArray[2]));
                this.dateArray[0] =solar.cYear;
                this.dateArray[1] =solar.cMonth;
                this.dateArray[2] =solar.cDay;
            }
            // 抽取api所需参数
            let apiParams = {
                cid: "52",
                name: this.name,
                birthyear: this.dateArray[0].toString(),
                sex: this.gender,
                zhanshi: this.zhanshi,
                yea: this.dateArray[0].toString(),
                mont: this.dateArray[1].toString(),
                dat: this.dateArray[2].toString(),
                hou: this.dateArray[3].toString(),
                minut: this.dateArray[4].toString(),
                jutag: "0",
                R1: this.qimenList,
                order: this.feipanList
            }
            this.apiParams = apiParams;
            // 传递参数并跳转
            this.$router.push(
                {
                    name: 'qimenPan',
                    query: {data: this.apiParams}
                }
            )
        }
    }
}
</script>
<style lang="less" scoped>
.bazi-birth-wrap {
    .birth-form{
        width: 640/75rem;
        margin: 50/75rem auto 0 auto;
        box-sizing: border-box;
        padding: 20/75rem 50/75rem;
        .round(15/75rem);
        background: #fff;
        box-shadow: 0 0 20/75rem #eee;
    }
    .form-title{
        text-align: center;
        font-size: 32/75rem;
        margin: 30/75rem auto 30/75rem auto;
    }
    .input-name,.input-things,.input-born{
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
        text-align: center;
    }
    .input-things{
        margin-bottom: 43/75rem;
    }
    .input-born{
        margin-bottom: 30/75rem;
    }
    .gender{
        .flex-between();
        width: 60%;
        margin: 40/75rem auto;
        font-size: 34/75rem;
        .male,.female{
            .flex-start();
        }
        input[type="radio"]{
            display: none;
        }
        input[type="radio"] + label{
            width: 22px;
            height: 22px;
            .round(50%);
            margin-right: 40/75rem;
            & + div{
                color:#555555;
           }
        }
        input[id="male"]+ label{
            background: url('../assets/image/common/male1.png') no-repeat center center / 100% 100%;
        }
        input[id="female"]+ label{
            background: url('../assets/image/common/female1.png') no-repeat center center / 100% 100%;
        }
        input[id="male"]:checked  + label{
           background: url('../assets/image/common/male1-active.png') no-repeat center center / 100% 100%;
           
        }
        input[id="female"]:checked  + label{
           background: url('../assets/image/common/female1-active.png') no-repeat center center / 100% 100%;
        }
        .gender-txt{
            color:rgba(0,0,0,0.2);
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
    .dateType{
        .flex-start();
        font-size: 34/75rem;
        padding-left: 12%;
        color:@inputColor;
        .gregorian,{
            .flex-start();
        }
        .lunar {
            .flex-start();
            margin-left: 20/75rem;
        }
        input[type="radio"]{
            display: none;
        }
        input[type="radio"] + label{
            width: 11px;
            height: 11px;
            .round(50%);
            margin-right: 26/75rem;
            border: 1px solid #eee;
        }
        input[name="dateType"]:checked  + label{
            background-color: @baseBoldColor;
            & + div{
                color:rgba(0,0,0,0.8);
           }
        }
        .date-txt{
            margin-right: 15/75rem;
        }
    }
    .qimenList,.feipanList{
        .flex-between();
        flex-wrap: wrap;
        .qijuItem{
            width: 48%;
            margin-bottom: 20/75rem;
            font-size: 34/75rem;
            .flex-end();
            & > input {
                display: none;
            }
            input[type="radio"] + label{
                width: 11px;
                height: 11px;
                .round(50%);
                margin-right: 26/75rem;
                border: 1px solid #707070;
                & + div{
                    color:#555555;
                }
            }
            
            input[type="radio"]:checked  + label{
                background-color: @baseBoldColor;
            }
        }
    }
    .feipanList-box{
        margin-bottom: 10/75rem;
        .flex-end();
        .feipanList{
            width: 34.5%;
            .flex-col();
            .qijuItem{
                .flex-start();
                width: 100%;
                margin-bottom: 10/75rem;
                font-size: 24/75rem;
                label{
                    width: 16/75rem!important;
                    height: 16/75rem!important;
                }
            }
        }
    }
    .qiju-title{
        text-align: center;
        margin-bottom: 20/75rem;
        font-size: 32/75rem;
    }
    #dateInput {
        margin-top: 28/75rem;
    }
    #save-confirm{
        width: 100%;
        height: 80/75rem;
        margin-bottom: 30/75rem;
        border-radius: 50/75rem;
        font-size: 28/75rem;
        background: @baseBoldColor;
        color: #fff;
    }
}
</style>

