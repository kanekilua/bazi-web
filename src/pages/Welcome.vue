<template>
    <div class="welcome"></div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name : 'welcome',
    mounted () {
        setTimeout (()=>{
            this.$jump('login');
        },3000);
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


