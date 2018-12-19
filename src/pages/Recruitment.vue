<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
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
}
</style>

