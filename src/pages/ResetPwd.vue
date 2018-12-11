<template>
    <div class="resetPwd">
        <v-header></v-header>
        <v-title-header>忘记密码</v-title-header>
        <div class="form">
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
        </div>
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
            passwordComfirm : "",
            gradientStart : global.GRADIENT_START,
            gradientEnd : global.GRADIENT_END,
            count : '',
            timer : null,
            show : true
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
        }
    }
}
</script>
<style lang="less" scoped>
.form {
    .loginForm();
    #captcha /deep/ .weui-input {
        width: 75%;
    }
}
.weui-cell /deep/ .weui-btn {
    margin-top: 0;
    height: 60/75rem;
    font-size: 28/75rem;
}
</style>