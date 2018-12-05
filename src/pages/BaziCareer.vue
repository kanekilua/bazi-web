<template>
    <div class="wrap">
        <p class="result-message" v-html="this.resData.data.career"></p>
        <v-bazi-bottom></v-bazi-bottom>
    </div>
</template>
<script>
export default {
    props : ['resData'],
}
</script>
<style lang="less" scoped>
.wrap{
    padding: 0 38/75rem;
    .result-message{
        font-size: 28/75rem;
    }
}
</style>
