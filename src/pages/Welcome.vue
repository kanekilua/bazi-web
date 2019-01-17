<template>
    <div class="welcome"></div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
    name : 'welcome',
    mounted () {
        this.init();
    },
    methods : {
        init : function () {
            // 默认跳引导
            let jumpTo = "/firstGuider";
            if(localStorage.hasOwnProperty(global.APP_FIRST_OPEN)){
                // 如果不是第一次打开默认跳游客登录 -> home
                jumpTo = "/main/home";
                if(localStorage.hasOwnProperty(global.APP_TOKEN)) {
                    // 获取用户信息accountInfo，并确认token的有效性
                    let header = {'Authorization':localStorage.getItem(global.APP_TOKEN)};
                    this.$http.post('/checkToken',null,'app',header,(res) =>{
                        if(res.data.status) {
                            this.$http.post('/scbazi',null,'app',header,()=> {
                                if(res.data.status) {
                                    this.$http.post('/scbazi',null,'app',header,(result) => {
                                        // 成功通过token获取到了accountInfo后，看看是否有填写sc八字的信息，没有的话直接跳游客登录
                                        if(result.data.sctype === 1) {
                                            this.$store.commit('updateLoginAccount',res.data.id + "");
                                        }
                                    },() => {});
                                }
                            },() => {});
                        }
                    },()=>{});
                }
            }
            setTimeout (()=>{
                if(this.$store.state.deepLink !== undefined && this.$store.state.deepLink !== null && this.$store.state.deepLink !== '') {
                    jumpTo = "";
                }
                this.$jump(jumpTo);
            },1500);
        }
    }
}
</script>
<style lang="less" scoped>
.welcome{
    width: 100%;
    height: 100%;
    background: url("../assets/image/welcome/welcome.png") no-repeat center center / 100% auto;
}
</style>


