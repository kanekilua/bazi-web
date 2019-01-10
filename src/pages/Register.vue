<template>
    <div class="register-wrap">
        <v-title-header>注册</v-title-header>
        <div class="content-wrap">
            <div class="form-wrap">
                <div class="form">
                    <div class="phone-input">
                        <div class="start">
                            <i></i><i></i>
                        </div>
                        <div class="input-wrap">
                            <input type="text" placeholder="请输入手机号码" v-model="phone">
                        </div>
                    </div>
                    <div class="capcha-input">
                        <div class="start">
                            <i></i><i></i>
                        </div>
                        <div class="input-wrap">
                            <input type="text" placeholder="请输入验证码" v-model="captcha">
                            <span v-show="show" @click="getCaptcha">获取验证码</span>
                            <span v-show="!show">{{count}} s</span>
                        </div>
                    </div>
                    <div class="password-input">
                        <div class="start">
                            <i></i><i></i>
                        </div>
                        <div class="input-wrap">
                            <input :type="pwdType" placeholder="请输入密码" v-model="password">
                            <i :class="pwdVisible ? 'visible' : 'unvisible'" @click="pwdVisible = !pwdVisible"></i>
                        </div>
                    </div>
                </div>
                <div class="user-agreement" >
                    <div class="check-icon" :class="checkUserAgreement ? 'check-icon-active' : 'check-icon-normal'" @click="checkUserAgreement = !checkUserAgreement"></div>
                    <div @click="checkUserAgreement = !checkUserAgreement">我已阅读并同意</div><span @click="$jump('/userAgreement')">《用户协议》</span>
                </div>
                <button class="register-btn" @click="register">提交</button>
            </div>
            <!-- <div class="form">
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
            </div> -->
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
            pwdVisible : false,
            checkUserAgreement : false,
            count : '',
            timer : null,
            show : true
        }
    },
    computed: {
        'pwdType' () {
            if(this.pwdVisible) {
                return  'text';
            }else {
                return 'password';  
            }
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
.register-wrap {
    /deep/ .header  {
        top : 20/75rem;
        border : 0;
        .boxshadow(0,0,0,0);
    }
    .content-wrap {
        padding-top: 90/75rem;
        .border-box();
        .form-wrap {
            width: 647/75rem;
            margin: 180/75rem auto 0 auto;
            .form {
                padding : 0 22/75rem;
                .border-box();
                .input {
                    .flex-start();
                    height: 55/75rem;
                    margin-top: 60/75rem;
                    padding: 0 22/75rem 5/75rem 15/75rem;
                    .border-box();
                    border-bottom: 1px solid #eee;
                    .start {
                        .flex-between();
                        width: 80/75rem;
                        i:nth-child(1) {
                            width: 50/75rem;
                            height: 45/75rem;
                        }
                        i:nth-child(2) {
                            width: 2/75rem;
                            height: 33/75rem;
                            background: url('../assets/image/login/bar.png') no-repeat center center / 100% 100%;
                        }
                    }
                    .input-wrap {
                        width: 100%;
                        margin-left: 19/75rem;
                        .flex-between();
                        input {
                            font-size: 30/75rem;
                            background : none;
                            outline: none;
                            border : 0;
                        }
                        span {
                            width: 170/75rem;
                            font-size: 34/75rem;
                            color : @baseBoldColor;
                            text-align: center;
                        }
                        ::-webkit-input-placeholder { /* WebKit browsers */
                            font-size: 30/75rem;
                            color : #DDD;
                        }
                        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                            font-size: 30/75rem;
                            color : #DDD;
                        }
                        ::-moz-placeholder { /* Mozilla Firefox 19+ */
                            font-size: 30/75rem;
                            color : #DDD;
                        }
                        :-ms-input-placeholder { /* Internet Explorer 10+ */
                            font-size: 30/75rem;
                            color : #DDD;
                        }
                    }
                    
                }
                .phone-input {
                    .input();
                    .start {
                        i:nth-child(1) {
                            background: url('../assets/image/login/phone.png') no-repeat center center / auto 100%;
                        }
                    }
                }
                .capcha-input {
                    .input();
                    .start {
                        i:nth-child(1) {
                            background: url('../assets/image/login/capcha.png') no-repeat center center / auto 100%;
                        }
                    }
                }
                .password-input {
                    .input();
                    .start {
                        i:nth-child(1) {
                            background: url('../assets/image/login/password.png') no-repeat center center / auto 100%;
                        }
                    }
                    .input-wrap {
                        .visible {
                            width: 50/75rem;
                            height: 40/75rem;
                            background: url('../assets/image/login/visible.png') no-repeat center center / 100% 100%;
                        }
                        .unvisible {
                            width: 50/75rem;
                            height: 28/75rem;
                            background: url('../assets/image/login/unvisible.png') no-repeat center center / 100% 100%;
                        }
                    }
                }
            }
            .user-agreement {
                .flex-start();
                padding: 46/75rem 46/75rem 0 46/75rem;
                font-size: 26/75rem;
                color: #555;
                .check-icon {
                    margin-right: 14/75rem;
                    .round(50%);
                }
                .check-icon-active {
                    width: 28/75rem;
                    height: 28/75rem;
                    background: url('../assets/image/login/check-icon.png') no-repeat center center / 100% 100%;
                }
                .check-icon-normal {
                    width: 24/75rem;
                    height: 24/75rem;
                    border: 1px solid #999;
                }
                span {
                    // text-decoration: underline;
                    color: @baseBoldColor;
                }
            }
            .register-btn {
                width: 100%;
                height: 92/75rem;
                margin-top: 109/75rem;
                border : 0 ;
                outline: none;
                background-color: @baseBoldColor;
                .round(50/75rem);
                font-size: 34/75rem;
                color: #fff;
                .boxshadow();
            }
        }
    }
    
}

</style>


