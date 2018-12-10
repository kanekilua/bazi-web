<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            婚恋爱情
            <div slot="icon" class="switchUser" @click="$jump('/baziBirth')"></div>
        </v-title-header>
        <div class="content-wrap">
            <div class="swiper-container">
                <div class="swiper-top">
                    <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                    <div class="right"></div>
                </div>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(outItem,outIndex) in list" :key="outIndex">
                        <img :src="outItem.imgUrl" class="item-img" @click="$jump(outItem.route)">
                        <div class="h-list">
                            <div class="hItem" v-for="(innerItem,innerIndex) in outItem.val" :key="innerIndex">
                                <h2>{{innerItem}}</h2><i></i>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {
    computed : {
        ...mapState('love',['navIndex']),
        swiper () {
            return this.$refs.mySwiper.swiper;
        },
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
            navList: ["桃花测试","八字合婚"],
            swiperOption : { initialSlide: this.navIndex },
            list : [
                {
                    route: '/loveBlossoms',
                    imgUrl: require("../assets/image/love/taohua@2x.png"),
                    val:[
                        "风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"
                ]},
                {
                    route: '/hehun',
                    imgUrl: require("../assets/image/love/hehun@2x.png"),
                    val:[
                        "风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"
                ]},
            ]
        }
    },
     methods : {
        ...mapMutations('love',['updateNavIndex'])
    }
}
</script>
<style lang="less" scoped>
.content-wrap{
   position: absolute;
    top: 260/75rem;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    padding: 0 40/75rem;
    .border-box();
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
            width: 100%;
            height: 298/75rem;
            display: block;
            margin: 34/75rem auto 20/75rem auto;
        }
        .h-list{
            padding: 0 40/75rem;
            .border-box();
        }
        .hItem{
            .flex-between();
            margin-bottom: 32/75rem;
            & > h2{
                font-size: 28/75rem;
                font-weight: normal;
            }
            & > i{
                display: inline-block;
                width: 44/75rem;
                height: 44/75rem;
                background: url("../assets/image/common/right@2x.png") no-repeat center center / 100% 100%;
            }
        }
    }
}
</style>
