<template>
    <div class="birth">
        <v-active-header :navTitle="navTitle"></v-active-header>
        <div class="birth-form">
            <h2 class="form-title">生辰八字</h2>
            <input type="text" class="input-name" placeholder="请输入您的名字" v-model="name">
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
            <input type="text" class="input-born" placeholder="请选择您的出生日期" @click="showDatePlugin" readonly="readonly" v-model="birthDate">
            <x-button :gradients="[gradientStart, gradientEnd]" id="save-confirm" @click.native="saveData">确认保存</x-button>
        </div>
    </div>
</template>

<script>
import {mapState } from 'vuex';
import { Datetime } from 'vux'

export default {
    computed: {
        ...mapState(['loginAccount'])
    },
    data () {
        return {
            navTitle: "生辰八字",
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            name : "",
            gender : "1",
            birthDate: "",
            dateArray: []
        }
    },
    components: {
        Datetime
    },
    methods : {
        showDatePlugin : function () {
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
            let timestamp = new Date(this.dateArray[0],this.dateArray[1],this.dateArray[2],this.dateArray[3],0,0).getTime()/1000;
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
            if(localStorage.hasOwnProperty(global.APP_ACCOUNT_INFO)) {
                accountInfo = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO));
                accountInfo[this.loginAccount] = result.data;
            }else {
                accountInfo = {
                    [this.loginAccount] : result.data
                }
            }
            localStorage.setItem(global.APP_ACCOUNT_INFO,JSON.stringify(accountInfo));
            this.$jump('main/fortune');
        }
    }
}
</script>

<style lang="less" scoped>
.birth{
    background: #fff;
    .birth-form{
        width: 640/75rem;
        height: 660/75rem;
        margin: 100/75rem auto 0 auto;
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
    #save-confirm{
        width: 504/75rem;
        height: 90/75rem;
        border-radius: 40/75rem;
        font-size: 28/75rem;
    }
}
</style>






