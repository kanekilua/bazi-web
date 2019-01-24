<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            手机号
        </v-title-header>
        <div class="content-wrap">
            <div class="phone-box">
               <div>+86</div>
               <input type="number" placeholder="请输入手机号码" v-model="phone">
               <div>中国大陆</div>
            </div>
            <div class="verification">
                <input type="number" placeholder="请输入验证码" v-model="captcha">
                <div v-show="show" class="verification-txt" @click="getCaptcha">获取验证码</div>
                <div v-show="!show" class="verification-txt">{{count}} s</div>
            </div>
            <button class="confirm" @click="showDialogStyle=true">确定绑定</button>
        </div>
        <!-- 头像弹窗 -->
        <div v-transfer-dom>
            <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '20%', 'background-color': 'transparent'}">
                <div class="confirm-dialog">
                    <h2>确定换绑到下方手机号？</h2>
                    <div class="middle-text">手机号：{{phone}}</div>
                    <div class="btn-list">
                        <button @click="showDialogStyle = false">取消</button>
                        <button @click="bind">确定</button>
                    </div>
                </div>
            </x-dialog>
        </div>
    </div>
</template>
<script>
import {XDialog,TransferDomDirective as TransferDom} from 'vux'
export default {
    directives: {
        TransferDom
    },
    data () {
        return {
            showDialogStyle: false,//弹窗显示
            phone: "",
            captcha : "",
            show : true,
            count : '',
            timer : null,
        }
    },
    methods: {
        getCaptcha : function () {
            if(!this.show) {
                return;
            }
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            if(this.captchaFlag) {
                this.$vux.toast.text(global.REPEAT_CAPTCHA,'top');
                return;
            }
            this.captchaFlag = true;
            let header = {
                'Authorization' : localStorage.getItem(global.APP_TOKEN)
            }
            let postData = {mobile : this.phone};
            this.$http.post('/bindingPhone',postData,'app',header,() =>{
                this.show = false;
                this.count = global.TIME_COUNT;
                this.timer = setInterval(()=>{
                    if(this.count > 0 && this.count <= global.TIME_COUNT) {
                        this.count -- ;
                    }else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.time = null;
                    }
                },1000);
            },null);
            this.captchaFlag = false;
        },
        bind : function () {
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            if(!this.$utils.checkCaptcha(this.captcha,this)) {
                return;
            }
            let header = {'Authorization':result.data.token};
            let params = {
                mobile : this.phone,
                captcha : this.captcha,
                event : 'bindingphone'
            };
            this.$http.post('/submit',params,'app',header,(res) => {
                if(res.code === "success") {
                    let loginAccountInfo = this.$store.state.loginAccountInfo;
                    loginAccountInfo.phone = this.phone;
                    this.$store.commit('updateLoginAccountInfo',loginAccountInfo);

                    this.$router.go(-1);
                }
            },null);
        }
    }
}
</script>
<style lang="less" scoped>

.content-wrap{
    padding: 90/75rem 57/75rem;
    .border-box();
    .phone-box{
        width: 100%;
        height: 80/75rem;
        margin-top: 320/75rem;
        font-size: 30/75rem;
        .flex-between();
        border-bottom: 1px solid rgba(238,238,238,1);
        input{
            width: 66%;
            border: none;
            padding-left: 20/75rem;
            .border-box();
            border-left: 1px solid rgba(221,221,221,1);
        }
    }
    .verification{
        height: 80/75rem;
        margin-top: 67/75rem;
        .flex-end();
        font-size: 30/75rem;
        border-bottom: 1px solid rgba(238,238,238,1);
        input{
            width: 65%;
            border: none;
            padding-left: 20/75rem;
            .border-box();
            border-left: 1px solid rgba(221,221,221,1);
        }
        .verification-txt{
            width: 150/75rem;
            color: @baseBoldColor;
        }
    }
    .confirm{
        width: 640/75rem;
        height: 85/75rem;
        background: @baseBoldColor;
        .my-button();
        .round(50/75rem);
        margin-top: 80/75rem;
    }
    .btn-list{
        .flex-start();
        width: 100%;
        height: 65/75rem;
    }
}
.weui-dialog{
    .flex-center();
    .confirm-dialog{
        width: 440/75rem;
        margin: 0 auto;
        .round(20/75rem);
        background: #fff;
        h2{
          font-size: 34/75rem;  
        }
        .middle-text{
            margin: 28/75rem auto;
        }
        .btn-list{
            .flex-start();
            width: 100%;
            height: 65/75rem;
            button{
                .my-button();
                width: 50%;
                height: 100%;
                background: @baseBoldColor;
                border-top:1px solid rgba(238,238,238,1);
            }
            button:nth-child(1){
                background: #fff;
                color: #999;
                .round(0 0 0 20/75rem);
            }
            button:nth-child(2){
                .round(0 0 20/75rem 0);
            }
        }
    }
}
</style>

