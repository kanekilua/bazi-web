<template>
    <div class="fortune-wrap">
        <v-active-header :navTitle="navTitle"></v-active-header>
        <v-bazi-header></v-bazi-header>
        <div class="container">
            <div class="swiper-top">
                <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                <div class="right"></div>
            </div>
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item,index) in list" :key="index">
                    <keep-alive>
                        <component :is="item" ></component>
                    </keep-alive>
                </swiper-slide>
            </swiper>
        </div>
    </div>    
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import BaziMingpan from './BaziMingpan'
import BaziEmotion from './BaziEmotion'
import BaziCareer from './BaziCareer'
import BaziFortune from './BaziFortune'
import BaziHealth from './BaziHealth'
import Bazikids from './Bazikids'
import BaziDecade from './BaziDecade'
export default {
    components: {
        BaziMingpan,
        BaziEmotion,
        BaziFortune,
        BaziCareer,
        BaziHealth,
        Bazikids,
        BaziDecade
    },
    data () {
        return {
            navList: ["命盘","感情","事业","财运","健康","亲子","十年大运"],
            list: [BaziMingpan,BaziEmotion,BaziCareer,BaziFortune,BaziHealth,Bazikids,BaziDecade],
            swiperOption : { initialSlide: this.navIndex },
            navTitle: "八字排盘",
        }
    },
    computed : {
        ...mapState ('fortune',['navIndex']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
        }
    },
   
    mounted() {
        if(this.navIndex != 0) {
            this.swiper.slideTo(this.navIndex, 0, false);
        }
        this.swiper.on('slideChange', () => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
    },  
    methods : {
        ...mapMutations('fortune',['updateNavIndex']),
        logout :function () {
            let token = localStorage.getItem(global.APP_TOKEN);
            let header = {'Authorization':token};
            this.$http.get('/logout',null,header,this.logoutSuccess,null);
        },
        logoutSuccess : function (result) {
            this.updateLoginAccount("");
            localStorage.setItem(global.APP_TOKEN,result.data.token);
            this.$jump('login');
        },
    }
}
</script>
<style lang="less" scoped>
.fortune-wrap{
    .container{
        padding: 0 25/75rem;
        .swiper-top{
            .flex-between();
            .right{
                width: 44/75rem;
                height: 44/75rem;
                background: url('../assets/image/bazi/right@2x.png') no-repeat center center / 100% 100%;
            }
        }
        /deep/ .nav .nav-list .item{
            padding: 5/75rem 13/75rem;
        }
        .swiper{
            margin-top: 32/75rem;
        }
    }
}
/deep/ .nav .nav-list .item{
    padding: 30px;
}
</style>

