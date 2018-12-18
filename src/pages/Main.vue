<template>
    <div class="main">
        <div class="header">
            <h2 slot="title" class="nav-title" :class="isFixed ? 'titleHeight' : ''">首页</h2>
            <nav class="nav" :class="isFixed ? 'navFixed' : ''"></nav>
        </div>
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
.header{
    .nav{
        width: 100%;
        height: 80/75rem;
        line-height: 140/75rem;
        background: url('../assets/image/common/nav.png') no-repeat center center / 100% 100%;
    }
    .nav-title{
        height:80/75rem;
        line-height:  120/75rem;
        padding-left: 41/75rem;
        background: @baseColor;
        color: #fff;
    }
    .navFixed{
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .titleHeight{
        height:158/75rem;
        line-height:  120/75rem;
        padding-left: 41/75rem;
        background: none;
        color: #fff;
    }
}
</style>

