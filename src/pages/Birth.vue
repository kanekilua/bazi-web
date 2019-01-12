<template>
    <div class="birth-wrap">
        <v-title-header>生辰八字</v-title-header>
        <div class="content-wrap">
            <div class="birth-form">
                <div class="input-group">
                    <input type="text" class="input-name" placeholder="请输入您的姓名" v-model="name">
                    <div class="gender">
                        <div class="male">
                            <input type="radio" id="male" name='gender' v-model="gender" value="1">
                            <label for="male"></label>
                            <div class="gender-txt-m">男</div>
                        </div>
                        <div class="female">
                            <input type="radio" id="female" name='gender' v-model="gender" value="0">
                            <label for="female"></label>
                            <div class="gender-txt-f">女</div>
                        </div>
                    </div>
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
                    <input type="text" class="input-born" placeholder="请选择您的出生日期" @click="showDatePlugin" readonly="readonly" v-model="birthDate">
                </div>
                <button class="save-confirm">保存</button>
                <!-- <x-button :gradients="[gradientStart, gradientEnd]" id="save-confirm" @click.native="saveData">确认保存</x-button> -->
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations } from 'vuex'
import { dateFormat } from 'vux'
import solarLunar from 'solarLunar'

export default {
    data () {
        return {
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            name : "",
            gender : "1",
            birthDate: "",
            dateArray: [],
            dateType : "1"
        }
    },
    methods : {
        ...mapMutations(['updateLoginAccount']),
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
            let timestamp = new Date(this.dateArray[0],this.dateArray[1],this.dateArray[2],this.dateArray[3],this.dateArray[4],0).getTime()/1000;
            let postData = {
                realname : this.name,
                gender : this.gender,
                birthday : timestamp
            }
            let token = localStorage.getItem(global.APP_TOKEN);
            let header = {'Authorization':token};
            this.$http.post('/scbazi',postData,'app',header,this.saveSuccess,null);
        },
        saveSuccess : function (result) {
            // 保存生辰八字成功的话保存在本地一份然后就跳转到fortune
            let accountInfo;
            let accountId = "" + result.data.id;
            this.updateLoginAccount(accountId);
            if(localStorage.hasOwnProperty(global.APP_ACCOUNT_INFO)) {
                accountInfo = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO));
                accountInfo[accountId] = result.data;
            }else {
                accountInfo = {
                    [accountId] : result.data
                }
            }
            localStorage.setItem(global.APP_ACCOUNT_INFO,JSON.stringify(accountInfo));
            this.$jump('main/fortune');
        }
    }
}
</script>

<style lang="less" scoped>
.birth-wrap{
    padding-top: 90/75rem;
    .border-box();
    /deep/ .header  {
        top : 20/75rem;
        border : 0;
        .boxshadow(0,0,0,0);
    }
    .content-wrap {
        .birth-form{
            width: 636/75rem;
            height: 786/75rem;
            margin: 56/75rem auto 0 auto;
            padding: 60/75rem;
            .border-box();
            .round(15/75rem);
            background: #fff;
            .boxshadow(0,0,20/75rem,#ddd);
            .input-group {
                padding: 15/75rem;
                .border-box();
                .input-born{
                    margin-bottom: 80/75rem;
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
                    text-align: center;
                }
                .gender{
                    .flex-between();
                    width: 70%;
                    margin: 40/75rem auto 40/75rem auto;
                    font-size: 30/75rem;
                    .male,.female{
                        .flex-start();
                        color: #555;
                    }
                    input[type="radio"]{
                        display: none;
                    }
                    input[type="radio"] + label{
                        width: 55/75rem;
                        height: 55/75rem;
                        .round(50%);
                        margin-right: 22/75rem;
                        border: 1px solid #eee;
                    }
                    input[id="male"]  + label{
                        background: url('../assets/image/common/male1.png') no-repeat center center / 100% 100%;
                    }
                    input[id="female"]  + label{
                        background: url('../assets/image/common/female1.png') no-repeat center center / 100% 100%;
                    }
                    input[id="male"]:checked  + label{
                        background: url('../assets/image/common/male1-active.png') no-repeat center center / 100% 100%;
                    }
                    input[id="female"]:checked  + label{
                        background: url('../assets/image/common/female1-active.png') no-repeat center center / 100% 100%;
                    }
                    input[id="male"]:checked +  div {
                        color: #555;
                    }
                }
                .dateType {
                    .flex-start();
                    margin-top: 28/75rem;
                    font-size: 34/75rem;
                    padding-left: 7.5/75rem;
                    color:#555;
                    margin-bottom: 40/75rem;
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
                        margin: 0 15/75rem;
                        border: 1px solid #eee;
                    }
                    input[name="dateType"]:checked  + label{
                        background-color: @baseBoldColor;
                        & + div{
                                color:rgba(0,0,0,1);
                                opacity:0.8;
                        }
                    }
                }
                
            }
            .save-confirm{
                .my-button();
                width: 100%;
                height: 90/75rem;
                margin : 80/75rem auto 0 auto;
                .round(50/75rem);
                font-size: 34/75rem;
                color: #fff;
                background-color: @baseBoldColor;
            }
        }
    }
    
}
</style>






