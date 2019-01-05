<template>
    <div class="wrap">
        <v-title-header :backLink="backLink">
            大师招募
        </v-title-header>
        <div class="content-wrap">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            backLink: "/main/mine"
        }
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
    padding-top: 90/75rem;
    .border-box();
}
</style>

