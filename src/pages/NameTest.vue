<template>
     <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            姓名测试
        </v-title-header>
        <div class="content-wrap">
            <input type="text" class="name-input" placeholder="请输入您的姓名">
            <input type="button" class="begin-test" value="开始测试" @click="$jump('/nameTestResult')">
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            backLink: '/nameHome'
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
   position: absolute;
    top: 169/75rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    background: url('../assets/image/name/name-test-bg@2x.png') no-repeat center center / 100% 100%;
    .name-input{
        display: block;
        width: 462/75rem;
        height: 80/75rem;
        margin: 230/75rem auto 70/75rem auto;
        .border-box();
        padding-left: 32/75rem;
        border: none;
        outline: none;
        .round(40/75rem);
    }
    .begin-test{
        display: block;
        width: 500/75rem;
        height: 98/75rem;
        margin: 0 auto;
        .round(36/75rem);
        border: none;
        background: @baseColor;
        font-size: 28/75rem;
        color: #fff;
        outline: none;
        &:active{
            background: #eee;;
        }
    }
}
</style>