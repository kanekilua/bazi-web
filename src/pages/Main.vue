<template>
    <div class="main">
        <div class="header">
            <h2 slot="title" class="nav-title" :class="isFixed ? 'titleHeight' : ''">首页</h2>
            <nav class="nav" :class="isFixed ? 'navFixed' : ''"></nav>
        </div>
        <router-view></router-view>
        <v-tab-bar></v-tab-bar>
        <!-- popup -->
        <v-share-popup :showShare='showShare' :shareData='shareData' @switchShowShare='switchShowShare'></v-share-popup>
    </div>
</template>

<script>
// popup
import {mapState,mapMutations} from 'vuex'
export default {
    // popup
    computed: {
        ...mapState('main',['showShare'])
    },
    data() {
        return{
            isFixed: false,
            // popup
            shareData : {
                icon : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543927572587&di=8fc2550e1b62ee976840a8ea69f54f8c&imgtype=0&src=http%3A%2F%2Fi-1.52miji.com%2F2018%2F3%2F2%2F8571d41f-3754-4960-b2b1-d116954e30a1.png%3Fwidth%3D360%26height%3D360',
                title : 'cordova微信分享测试',
                text : 'Monster',
                url : 'http://www.szmonster.com/'
            }
        }
    },
     mounted() {
        window.addEventListener("scroll",this.watchScroll)
    },
    methods: {
        // popup
        ...mapMutations('main',['switchShowShare']),
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

