<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header :backLink="backLink">
            姓名大全
        </v-title-header>
        <div class="swiper-top">
            <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
            <div class="right"></div>
        </div>
        <div class="content-wrap">
            <div class="swiper-container">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(outItem,outIndex) in list" :key="outIndex">
                        <img :src="outItem.imgUrl" class="item-img" @click="$jump(outItem.route)">
                        <div class="h-list">
                            <div class="hItem" v-for="(innerItem,innerIndex) in outItem.val" :key="innerIndex"  @click="$jump('/nameTestInner')">
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
        ...mapState('nameHome',['navIndex']),
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
            navList: ["姓名测试","起名大全","姓名大全"],
            swiperOption : { initialSlide: this.navIndex ,autoHeight : true },
            list : [
                {
                    route: '/nameTest',
                    imgUrl: require("../assets/image/name/banner1@2x.png"),
                    val:[
                        "风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"
                ]},
                {
                    route: '/giveName',
                    imgUrl: require("../assets/image/name/banner2@2x.png"),
                    val:[
                        "风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"
                ]},
                {
                    route: '/familyName',
                    imgUrl: require("../assets/image/name/banner3@2x.png"),
                    val:[
                        "风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"
                ]},
            ]
        }
    },
    methods : {
        ...mapMutations('nameHome',['updateNavIndex'])
    }
}
</script>
<style lang="less" scoped>
.swiper-top{
    /deep/ .nav{
        width: 100%;
        padding: 0 40/75rem;
        .border-box();
        .nav-list{
            .flex-between();
        }
    }
    
}
.content-wrap{
   position: absolute;
    top: 270/75rem;
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


