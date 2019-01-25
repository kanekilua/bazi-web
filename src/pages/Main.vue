<template>
    <div class="main">
        <!-- <keep-alive> -->
            <router-view></router-view>
        <!-- </keep-alive> -->
        <v-tab-bar></v-tab-bar>
    </div>
</template>

<script>
export default {
    data() {
        return{
           
        }
    },
}
</script>
<style lang="less">
.main{
    width: 100%;
    height: 100%;
}
</style>

