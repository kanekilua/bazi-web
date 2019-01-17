<template>
    <div class="welcome"></div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name : 'welcome',
    created () {
        this.init();
    },
    mounted () {
        setTimeout (()=>{
            this.$jump('/main/home');
        },3000);
    },
    methods: {
        init : function () {
            let header = {
                'Authorization' : localStorage.getItem(global.APP_TOKEN)
            }
            this.$http.post('/checkToken',null,'app',header,(res) =>{
                if(res.data.status) {
                    this.$http.post('/scbazi',null,'app',header,this.getUserInfoSuccess,() => {});
                }
            },null);
        },
        getUserInfoSuccess : function (res) {
            this.$store.commit('updateLoginAccount',res.data.id);
        }
    },
}
</script>
<style lang="less" scoped>
.welcome{
    width: 100%;
    height: 100%;
    background: url("../assets/image/welcome/welcome.png") no-repeat center center / 100% auto;
}
</style>


