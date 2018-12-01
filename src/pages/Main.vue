<template>
    <div class="main">
        <v-active-header><h2 slot="title" class="nav-title" :class="isFixed ? 'titleHeight' : ''">首页</h2></v-active-header>
        <router-view></router-view>
        <v-tab-bar></v-tab-bar>
    </div>
</template>

<script>
export default {
    data() {
        return{
            isFixed: false,
        }
    },
     mounted() {
        window.addEventListener("scroll",this.watchScroll)
    },
    methods: {
       watchScroll() {
           let scrollTop = window.pageYoffset ||
           document.documentElement.scrollTop ||
           document.body.scrollTop;
           if (scrollTop > 42) {
               this.isFixed = true;
           } else {
               this.isFixed = false;
           }
       }
    }
}
</script>
<style lang="less">

</style>

