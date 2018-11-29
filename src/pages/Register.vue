<template>
    <div class="register">
        <v-logo-header></v-logo-header>
        <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号" v-model="phone" keyboard="number" is-type="china-mobile" :max="11"></x-input>
                <x-input placeholder="请输入您的验证码" v-model="captcha" :max="4" id="captcha">
                    <x-button slot="right" :gradients="[gradientStart, gradientEnd]" @click.native="getCaptcha" mini>
                        <span v-show="show">获取验证码</span>
                        <span v-show="!show">{{count}} s</span>
                    </x-button>
                </x-input>
                <x-input placeholder="请设置您的密码" v-model="password" :min="8" :max="18" type="password"></x-input>
                <div class="userAgreement" :class="{'check-class' : checkUserAgreement}">
                    <check-icon :value.sync="checkUserAgreement"></check-icon>
                    <span>我已阅读并同意</span><router-link to="userAgreement">《注册服务协议》</router-link>
                </div>
                <x-button :gradients="[gradientStart, gradientEnd]" @click.native="register">立刻注册</x-button>
            </group>
        </div>
    </div>
</template>
<script>
import {mapMutations } from 'vuex';
import { CheckIcon } from 'vux';

export default {
    name : 'Register',
    data() {
        return {
            phone : "",
            captcha : "",
            captchaFlag : false,
            password : "",
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            checkUserAgreement : false,
            count : '',
            timer : null,
            show : true
        }
    },
    components: {
        CheckIcon
    },
    methods : {
        ...mapMutations (['updateLoginAccount']),
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
            let postData = {mobile : this.phone};
            this.$http.post('/register',postData,'app',null,() => {
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
        register : function () {
            if(!this.checkUserAgreement) {
                this.$vux.toast.text(global.CHECK_TIP,'top');
                return;
            }
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            if(!this.$utils.checkCaptcha(this.captcha,this)) {
                return;
            }
            if(!this.$utils.checkPassword(this.password,this)) {
                return;
            }
            let postData = {
                mobile : this.phone,
                password : this.password,
                captcha : this.captcha,
                event : 'register'
            };
            this.$http.post('/submit',postData,'app',null,this.registerSuccess,null);
        },
        registerSuccess : function () {
            let loginData = {
                account : this.phone,
                password : this.password
            }
            this.$http.post('/login',loginData,'app',null,this.loginSuccess,null);
        },
        loginSuccess : function (result) {
            this.updateLoginAccount(this.phone);
            localStorage.setItem(global.APP_TOKEN,result.data.token);
            this.$jump('birth');
        }
    }
}
</script>
<style lang="less" scoped>
.register {
    overflow: hidden;
    .form {
        .loginForm();
        .weui-cell /deep/ .weui-btn {
            margin-top: 0;
            height: 60/75rem;
            font-size: 28/75rem;
        }
        #captcha /deep/ .weui-input {
            width: 75%;
        }
        .userAgreement {
            font-size: 24/75rem;
            margin-top : 32/75rem;
            color : @inputColor;
            /deep/ .weui-icon-circle {
                font-size: 25/75rem;
            }
            /deep/ .weui-icon-success {
                font-size: 25/75rem;
                color: @checkBackGroud;
            }
            /deep/ .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before {
                color: @checkBackGroud;
            }
            a:hover,a:active {
                color: @linkColor;
            }
        }
        .check-class {
            color : #111;
            a:link,a:visited{
                color:#111;
            }
        }
    }
}

</style>


