<template>
    <div class="login-wrap">
        <v-title-header>登录</v-title-header>
        <div class="content-wrap">
            <div class="form-wrap">
                <div class="nav">
                    <v-nav :navList="navList" :nowIndex="navIndex"  @updateNavIndex="updateNavIndex"></v-nav>
                </div>
                <div class="form">
                    <div class="phone-input">
                        <div class="start">
                            <i></i><i></i>
                        </div>
                        <div class="input-wrap">
                            <input type="text" placeholder="请输入手机号码" v-model="phone">
                        </div>
                    </div>
                    <div class="capcha-input" v-if="!navIndex">
                        <div class="start">
                            <i></i><i></i>
                        </div>
                        <div class="input-wrap">
                            <input type="text" placeholder="请输入验证码" v-model="captcha" @keyup="listenKey">
                            <span v-show="show" @click="getCaptcha">获取验证码</span>
                            <span v-show="!show">{{count}} s</span>
                        </div>
                    </div>
                    <div class="password-input" v-else>
                        <div class="start">
                            <i></i><i></i>
                        </div>
                        <div class="input-wrap">
                            <input :type="pwdType" placeholder="请输入密码" v-model="password" @keyup="listenKey">
                            <i :class="pwdVisible ? 'visible' : 'unvisible'" @click="pwdVisible = !pwdVisible"></i>
                        </div>
                    </div>
                </div>
                <div class="reset-pwd">
                    <div @click="$jump('/register')">现在注册</div>
                    <div @click="$jump('/resetPwd')">忘记密码></div>
                </div>
                <button class="login-btn" @click="login">登录</button>
                <div class="third-login" v-show="showThird">
                    <div>| 合作账号登录 |</div>
                    <div>
                        <img src="../assets/image/login/qq.png" alt="QQ">
                        <img src="../assets/image/login/wechat.png" alt="Wechat">
                    </div>
                </div>
                <!-- <group>
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
                    <img src="../assets/image/login/sina@3x.png" alt="sina">
                    <img src="../assets/image/login/wechat@3x.png" alt="wechat">
                </div> --> 
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
            pwdVisible : false,
            captcha : "",
            captchaFlag : false,
            navList : ['快捷免密登录','账号密码登录'],
            navIndex : 0,
            count : '',
            timer : null,
            show : true,
            showThird : true,
            windowHeight : document.documentElement.clientHeight,
            fullHeight: document.documentElement.clientHeight
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
    mounted () {
        window.onresize = () => {
            return (() => {
                this.fullHeight = document.documentElement.clientHeight
                if(this.fullHeight < this.windowHeight) {
                    this.showThird = false;
                }else {
                    this.showThird = true;
                }
            })()
        }
    },
    methods : {
        ...mapMutations (['updateLoginAccount']),
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
            if(this.navIndex) {
                if(!this.$utils.checkPassword(this.password,this)) {
                    return;
                }
                let loginData = {
                    mobile : this.phone,
                    password : this.password
                };
                this.$http.post('/phoneLogin',loginData,'app',null,this.loginSuccess,null);
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
                this.$jump('/main/fortune');
            },500);
        },
        getUserInfoSuccess : function(result) {
            let accountInfo;
            result.data.phone = this.phone;
            if(localStorage.hasOwnProperty(global.APP_ACCOUNT_INFO)) {
                accountInfo = JSON.parse(localStorage.getItem(global.APP_ACCOUNT_INFO));
                accountInfo[this.phone] = result.data;
            }else {
                accountInfo = {
                    [this.phone] : result.data
                }
            }
            localStorage.setItem(global.APP_ACCOUNT_INFO,JSON.stringify(accountInfo));
        },
        listenKey: function (e) {
            let keyCode = e.keyCode;
            if(keyCode === 13) { //监听enter键
                this.login();
            }
        }
    }
}
</script>
<style lang="less" scoped>
.login-wrap {
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
            margin: 330/75rem auto 0 auto;
            .nav {
                // width: 100%;
                padding: 0 30/75rem;
                .border-box();
                /deep/ .nav .nav-list {
                    -webkit-justify-content: space-between;
                    -moz-justify-content: space-between;
                    -ms-justify-content: space-between;
                    -o-justify-content: space-between;
                    justify-content: space-between;
                }
                /deep/ .item.active{
                    color: @baseBoldColor;
                }
                /deep/ .item {
                    color: #121212;
                }
            }
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
            .reset-pwd {
                .flex-between();
                padding: 10/75rem 46/75rem 0 46/75rem;
                .border-box();
                font-size: 28/75rem;
                color: #999;
                div:nth-child(2) {
                    text-decoration:underline;
                }
            }
            .login-btn {
                width: 100%;
                height: 92/75rem;
                margin-top: 42/75rem;
                border : 0 ;
                outline: none;
                background-color: @baseBoldColor;
                .round(50/75rem);
                font-size: 34/75rem;
                color: #fff;
                .boxshadow();
            }
            .third-login {
                position: fixed;
                left: 0;
                right: 0;
                bottom: 36/75rem;
                margin: 0 auto;
                width: 200/75rem;
                & > div {
                    font-size: 26/75rem;
                    color: #666;
                    text-align: center;
                }
                div:nth-child(2) {
                    .flex-between();
                    margin-top: 20/75rem;
                    & > img {
                        width: 60/75rem;
                        height: 60/75rem;
                    }
                }
            }
        }
    }
}

</style>


