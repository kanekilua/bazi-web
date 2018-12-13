<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            婚恋爱情
            <div slot="icon" class="switchUser" @click="$jump('/baziBirth')"></div>
        </v-title-header>
        <div class="swiper-top">
            <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
            <div class="right"></div>
        </div>
        <div class="content-wrap">
            <div class="swiper-container">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(item,index) in list" :key="index">
                        <keep-alive>
                            <component :is="item" :article="articleList[index]"></component>
                        </keep-alive>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
import LoveBlossoms from './LoveBlossoms'
import Hehun from './Hehun'

export default {
    computed : {
        ...mapState('love',['navIndex']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
    },
    components : {
        LoveBlossoms , Hehun
    },
    watch : {
        'navIndex' (val) {
            this.swiper.slideTo(val, 0, false);
        }
    },
    mounted () {
        if(this.navIndex != 0) { 
            this.swiper.slideTo(this.navIndex, 0, false);
        }
        this.swiper.on('slideChange', () => {
            this.updateNavIndex(this.swiper.activeIndex);
        });
    },
    data () {
        return {
            backLink: "/main/home",
            navList: ["桃花运","八字合婚"],
            swiperOption : { initialSlide: this.navIndex },
            list : [LoveBlossoms,Hehun],
            articleList: [["风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"],
                ["风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"]]
        }
    },
     methods : {
        ...mapMutations('love',['updateNavIndex'])
    }
}
</script>
<style lang="less" scoped>
.swiper-top{
    padding: 0 40/75rem;
    .border-box();
    /deep/ .item{
        margin-right: 40/75rem;
    }
}
.content-wrap{
   position: absolute;
    top: 169/75rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    .swiper-container{
        width: 100%;
        margin: 0 auto;
        /deep/ .nav .nav-list{
            padding: 0 40/75rem;
            .border-box();
            .item{
                margin-right: 80/75rem;
            }
        }
        /deep/ .swiper-slide{
            width: 100%;
        }
        .item-img{
            width: 675/75rem;
            height: 298/75rem;
            display: block;
            margin: 34/75rem auto 20/75rem auto;
        }
    }
}
</style>

