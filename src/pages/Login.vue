<template>
    <div class="login">
        <v-logo-header></v-logo-header>
        <div class="form">
            <v-nav :navList="navList" :nowIndex="navIndex"  @updateNavIndex="updateNavIndex"></v-nav>
            <group>
                <x-input placeholder="请输入您的手机号" v-model="phone" keyboard="number" is-type="china-mobile" :max="11"></x-input>
                <x-input placeholder="请输入您的密码" v-if="!navIndex" v-model="password" :min="8" :max="18" type="password"></x-input>
                <x-input placeholder="请输入验证码" v-else v-model="captcha"  :max="4">
                    <x-button slot="right"  :gradients="[gradientStart, gradientEnd]" @click.native="getCaptcha" mini>
                        <span v-show="show">获取验证码</span>
                        <span v-show="!show">{{count}} s</span>
                    </x-button>
                </x-input>
                <div class="resetPassword">
                    <span :style="{color:resetPwdColor}" @touchstart="resetStyleChange" @click="$jump('resetPwd')">忘记密码?</span>
                    <span>/</span>
                    <span :style="{color:registerColor}" @touchstart="registerStyleChange"  @click="$jump('register')">立即注册</span>
                </div>
                <x-button :gradients="[gradientStart, gradientEnd]" @click.native="login">立刻登入</x-button>
            </group>
            <div class="externLink">
                <img src="../assets/image/login/qq@3x.png" alt="qq">
                <img src="../assets/image/login/sina@3x.png" alt="sina">
                <img src="../assets/image/login/wechat@3x.png" alt="wechat">
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';

export default {
    name : 'Login',
    data() {
        return {
            phone : "",
            password : "",
            captcha : "",
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            resetPwdColor : global.INPUTCOLOR,
            registerColor :  global.INPUTCOLORl,
            navList : global.NAV_LIST,
            navIndex : 0,
            count : '',
            timer : null,
            show : true
        }
    },
    methods : {
        ...mapMutations (['updateLoginAccount']),
        resetStyleChange : function() {
            this.resetPwdColor = global.LINKCOLOR;
        },
        registerStyleChange : function () {
            this.registerColor = global.LINKCOLOR;
        },
        updateNavIndex : function (value) {
            this.navIndex = value;
        },
        getCaptcha : function () {
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            if(this.show) {
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
                let postData = {mobile : this.phone};
                this.$http.post('/register',postData,'app',null,null,null);
            }
        },
        login :function () {
            if(!this.$utils.checkPhone(this.phone,this)) {
                return;
            }
            if(!this.navIndex) {
                if(!this.$utils.checkPassword(this.password,this)) {
                    return;
                }
                let loginData = {
                    account : this.phone,
                    password : this.password
                };
                this.$http.post('/login',loginData,'app',null,this.loginSuccess,null);
            }else {
                // if(!this.$utils.checkCaptcha(this.captcha,this)) {
                //     return;
                // }
                // let loginData = {
                //     account : this.phone,
                //     captcha : this.captcha
                // };
            }
        },
        loginSuccess : function(result) {
            this.updateLoginAccount(this.account);
            localStorage.setItem(global.APP_TOKEN,result.data.token);
            this.$jump('main');
        }
    }
}
</script>
<style lang="less" scoped>
.login {
    overflow: hidden;
    .form {
        .loginForm();
        /deep/ .nav {
            margin-bottom : 0;
        }
        /deep/ .nav .nav-list {
            -webkit-justify-content: space-between;
            -moz-justify-content: space-between;
            -ms-justify-content: space-between;
            -o-justify-content: space-between;
            justify-content: space-between;
        }
        /deep/ .weui-cells,.vux-no-group-title {
            margin-top: 0;
        }
        .weui-cell /deep/ .weui-btn {
            margin-top: 0;
            height: 60/75rem;
            font-size: 28/75rem;
        }
        .resetPassword {
            .flex-end();
            font-size: 24/75rem;
            margin-top : 30/75rem;
            color : @inputColor;
        }
        & /deep/ weui-btn {
            margin-top : 75/75rem;
        }
        .externLink {
            margin-top : 80/75rem;
            .flex-between();
            img {
                height: 88/75rem;
                width: 88/75rem;
            }
        }
    }
}

</style>


