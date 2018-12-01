<template>
    <div class="fortune-wrap">
        <v-active-header>八字排盘</v-active-header>
        <v-title-header :backLink="backLink">
            八字排盘
            <div slot="icon" class="switchUser" @click="$jump('/baziBirth')"></div>
        </v-title-header>
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
import BaziDecade from './BaziDecade'
export default {
    components: {
        BaziMingpan,
        BaziDecade
    },
    data () {
        return {
            backLink : '/main/home',
            navList: ["命盘","十年大运"],
            list: [BaziMingpan,BaziDecade],
            swiperOption : { initialSlide: this.navIndex }
        }
    },
    computed : {
        ...mapState ('bazi',['navIndex']),
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
        ...mapMutations('bazi',['updateNavIndex'])
    }
}
</script>
<style lang="less" scoped>
.fortune-wrap{
    .switchUser{
        width: 44/75rem;
        height: 44/75rem;
        background: url('../assets/image/bazi/switchUser@2x.png') no-repeat center center / 100% 100%;
    }
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
        .swiper-container, .swiper-container-horizontal, .swiper-container-ios{
            width: 100%;
            position: absolute;
            top:300/75rem;
            bottom: 0px;
            left: 0px;
            overflow-y: scroll;
        }
    }
}
/deep/ .nav .nav-list .item{
    padding: 30px;
}
</style>

