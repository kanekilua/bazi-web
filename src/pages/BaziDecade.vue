<template>
    <div class="wrap">
        <div class="result-message">
            <img class="master-img" :src="masterImg" alt="大师头像">
        </div>
        <v-bazi-bottom></v-bazi-bottom>
    </div>
</template>
<script>
export default {
    data () {
        return {
            // masterImg: require('../assets/image/bazi/master-img@2x.png')
        }
    }
}
</script>
<style lang="less" scoped>
.wrap{
    padding: 25/75rem 38/75rem;
    .result-message{
        font-size: 28/75rem;
    }
    .master-img{
        display: block;
            width: 220/75rem;
            height: 220/75rem;
            margin: 70/75rem auto 80/75rem auto;
    }
}

</style>
