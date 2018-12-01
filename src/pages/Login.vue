<template>
    <div class="login">
        <v-logo-header></v-logo-header>
        <div class="form">
            <v-nav :navList="navList" :nowIndex="navIndex"  @updateNavIndex="updateNavIndex"></v-nav>
            <group>
                <x-input placeholder="请输入您的手机号" v-model="phone" keyboard="number" is-type="china-mobile" :max="11"></x-input>
                <x-input placeholder="请输入您的密码" v-if="!navIndex" v-model="password" :min="8" :max="18" type="password"></x-input>
                <x-input placeholder="请输入您的验证码" v-else v-model="captcha"  :max="4" id="captcha">
                    <x-button slot="right"  :gradients="[gradientStart, gradientEnd]" @click.native="getCaptcha" mini>
                        <span v-show="show">获取验证码</span>
                        <span v-show="!show">{{count}} s</span>
                    </x-button>
                </x-input>
                <div class="resetPassword" v-show="!navIndex">
                    <span :style="{color:resetPwdColor}" @touchstart="resetStyleChange" @click="$jump('resetPwd')">忘记密码?</span>
                    <span>/</span>
                    <span :style="{color:registerColor}" @touchstart="registerStyleChange"  @click="$jump('register')">立即注册</span>
                </div>
                <x-button :gradients="[gradientStart, gradientEnd]" @click.native="login">立刻登入</x-button>
            </group>
            <div class="externLink">
                <img src="../assets/image/login/qq@3x.png" alt="qq">
                <!-- <img src="../assets/image/login/sina@3x.png" alt="sina"> -->
                <img src="../assets/image/login/wechat@3x.png" alt="wechat">
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
    name : 'Login',
    data() {
        return {
            phone : "",
            password : "",
            captcha : "",
            captchaFlag : false,
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
            this.password = "";
            this.captcha = "";
        },
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
            this.$http.post('/verlogin',postData,'app',null,() =>{
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
                if(!this.$utils.checkCaptcha(this.captcha,this)) {
                    return;
                }
                let loginData = {
                    mobile : this.phone,
                    captcha : this.captcha,
                    event : 'verlogin'
                };
                this.$http.post('/submit',loginData,'app',null,this.loginSuccess,null);
            }
        },
        loginSuccess : function(result) {
            // 判断本地有没有存这个手机号对应的account_info
            if(localStorage.hasOwnProperty(global.APP_ACCOUNT_INFO)) {
                let account_info = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO));
                if(account_info[this.phone] === undefined || account_info[this.phone] === null) {
                    let header = {'Authorization':result.data.token};
                    this.$http.post('/scbazi',null,'app',header,this.getUserInfoSuccess,() => {});
                }
            }else {
                let header = {'Authorization':result.data.token};
                this.$http.post('/scbazi',null,'app',header,this.getUserInfoSuccess,() => {});
            }
            this.updateLoginAccount(this.phone);
            localStorage.setItem(global.APP_TOKEN,result.data.token);
            setTimeout(() => {
                this.$jump('main/fortune');
            },500);
        },
        wechatLogin : function () {
            Wechat.isInstalled((installed) => {
                var scope = "snsapi_userinfo",
                state = "_" + (+new Date());
                Wechat.auth(scope, state, (response)=> {
                    // {"code":"","state":"","country":"CN","lang":"zh_CN"}
                    let loginData = {
                        platform : "wechat",
                        code : response.code
                    }
                    this.$http.post('/thirdlogin',loginData,'app',null,this.loginSuccess,null);
                }, (reason) => {
                    this.$vux.toast.text(reason,'top');
                });
            }, (reason) => {
                this.$vux.toast.text('系统尚未安装微信','top');
            });
        },
        qqLogin : function () {
            var args = {};
            args.client = QQSDK.ClientType.QQ;
            QQSDK.checkClientInstalled(() => {
                QQSDK.ssoLogin(result => {
                    // localStorage.setItem('BZ_QQ_TOKEN',{
                    //     'access_token' : result.access_token,
                    //     'userId' : result.userid,
                    //     'expires_time' : new Date(parseInt(result.expires_time))
                    // });
                    let loginData = {
                        platform : 'QQ',
                        openid : result.userid,
                        access_token : result.access_token,
                        expires_in : parseInt(result.expires_time)
                    }
                    this.$http.post('/thirdlogin',loginData,'app',null,this.loginSuccess,null);
                    this.$jump('main');
                }, (failReason) => {
                    this.$vux.toast.text(failReason,"top");
                }, args);
            }, () => {
                this.$vux.toast.text('系统尚未安装QQ',"top");
            }, args);
	    },
        getUserInfoSuccess : function(result) {
            let accountInfo;
            if(localStorage.hasOwnProperty(global.APP_ACCOUNT_INFO)) {
                accountInfo = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO));
                accountInfo[this.phone] = result.data;
            }else {
                accountInfo = {
                    [this.phone] : result.data
                }
            }
            localStorage.setItem(global.APP_ACCOUNT_INFO,JSON.stringify(accountInfo));
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
        /deep/ .item.active{
            color: @baseColor;
        }
        /deep/ .item {
            color: @inputColor;
            opacity: 1 !important;
        }
        /deep/ .weui-cells,.vux-no-group-title {
            margin-top: 0;
        }
        #captcha /deep/ .weui-input {
            width: 75%;
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
            .flex-around();
            img {
                height: 88/75rem;
                width: 88/75rem;
            }
        }
    }
}

</style>


