<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            婚恋爱情
            <div slot="icon" class="switchUser" @click="$jump('/baziBirth')"></div>
        </v-title-header>
        <div class="img-box">
            <img src="../assets/image/love/taohua@2x.png" @click="$jump('/loveBlossoms')">
            <img src="../assets/image/love/hehun@2x.png">
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            backLink: "/main/home",
        }
    }
}
</script>
<style lang="less" scoped>
.img-box{
    width: 100%;
    padding-top: 74/75rem;
    & > img{
        width: 675/75rem;
        height: 298/75rem;
        display: block;
        margin: 0 auto 22/75rem auto;
    }
}
</style>

