<template>
    <div class="resetpwd-wrap">
        <v-title-header>修改密码</v-title-header>
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
                    <div class="password-input">
                        <div class="start">
                            <i></i><i></i>
                        </div>
                        <div class="input-wrap">
                            <input :type="pwdConfirmType" placeholder="请再次输入密码" v-model="passwordComfirm" @keyup="listenKey">
                            <i :class="pwdComfirmVisible ? 'visible' : 'unvisible'" @click="pwdComfirmVisible = !pwdComfirmVisible"></i>
                        </div>
                    </div>
                </div>
                <button class="submit-btn" @click="resetPwd">确定修改</button>
            </div>
        </div>
        <!-- <div class="form">
            <group>
                <x-input placeholder="请输入您的手机号" v-model='phone' keyboard="number" is-type="china-mobile" :max="11"></x-input>
                <x-input placeholder="请输入您的验证码" v-model='captcha' :max="4" id="captcha">
                    <x-button slot="right" :gradients="[gradientStart, gradientEnd]" @click.native="getCaptcha" mini>
                        <span v-show="show">获取验证码</span>
                        <span v-show="!show">{{count}} s</span>
                    </x-button>
                </x-input>
                <x-input placeholder="请设置您的密码" v-model='password' :min="8" :max="18" type="password"></x-input>
                <x-input placeholder="请再次确认您的密码" v-model='passwordComfirm' :min="8" :max="18" type="password" :equal-with="password"></x-input>
                <x-button :gradients="[gradientStart, gradientEnd]" @click.native="resetPwd">确认</x-button>
            </group>
        </div> -->
    </div>
</template>
<script>
import {mapMutations } from 'vuex';
export default {
    name : 'ResetPwd',
    data() {
        return {
            phone : "",
            captcha : "",
            captchaFlag : false,
            password : "",
            pwdVisible : false,
            passwordComfirm : "",
            pwdComfirmVisible : false,
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
        },
        'pwdConfirmType' () {
            if(this.pwdComfirmVisible) {
                return  'text';
            }else {
                return 'password';  
            }
        }
    },
    methods : {
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
            this.$http.post('/changepwd',postData,'app',null,() => {
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
        resetPwd : function () {
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            if(!this.$utils.checkCaptcha(this.captcha,this)) {
                return;
            }
            if(!this.$utils.checkPassword(this.password,this)) {
                return;
            }
            if(!this.$utils.checkPassword(this.passwordComfirm,this)) {
                return;
            }
            // 接口还没有测试
            let postData = {
                mobile : this.phone,
                password : this.password,
                captcha : this.captcha,
                event : 'changepwd'
            };
            this.$http.post('/submit',postData,'app',null,this.resetPwdSuccess,null);
        },
        resetPwdSuccess : function (result) {
            this.$vux.toast.text(result.msg,'top');
            this.$jump('login');
        },
        listenKey: function (e) {
            let keyCode = e.keyCode;
            if(keyCode === 13) { //监听enter键
                this.resetPwd();
            }
        }
    }
}
</script>
<style lang="less" scoped>
.resetpwd-wrap {
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
                            font-size: 32/75rem;
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
            .submit-btn {
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


// .form {
//     // .loginForm();
//     #captcha /deep/ .weui-input {
//         width: 75%;
//     }
// }
// .weui-cell /deep/ .weui-btn {
//     margin-top: 0;
//     height: 60/75rem;
//     font-size: 28/75rem;
// }
</style>