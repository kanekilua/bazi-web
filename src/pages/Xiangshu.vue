<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>
            相术解析
        </v-title-header>
        <div class="content-wrap">
            <div class="swiper-container">
                <div class="swiper-top">
                    <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                </div>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(outItem,outIndex) in list" :key="outIndex">
                        <div class="hItem" v-for="(innerItem,innerIndex) in outItem.val" :key="innerIndex" @click="$jump('/xiangshuInner')">
                            <img :src="innerItem.imgUrl">
                            <div class="right">
                                <h2>{{innerItem.title}}</h2>
                                <p>{{innerItem.itemP}}</p>
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
        ...mapState('xiangshu',['navIndex']),
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
            navList: ["面相图解","手相解析","痣向解析","相学大全",],
            swiperOption : { initialSlide: this.navIndex },
            list : [
                {
                    val:[
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛fdsaFASGASG",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       },
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛fdsaFASGASG",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       },
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛fdsaFASGASG",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       },
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛fdsaFASGASG",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       },
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛fdsaFASGASG",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       },
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛fdsaFASGASG",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       },
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛fdsaFASGASG",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       },
                ]},
                {
                    val:[
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       }
                ]},
                 {
                    val:[
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       }
                ]},
                 {
                    val:[
                       {
                           imgUrl: require("../assets/image/xiangshu/item-img@2x.png"),
                           title: "眉毛淡的男人命运好吗，眉毛",
                           itemP: "眉毛在相学中又被视为保寿官，从这个寿字就可以知道，眉毛与我们的寿命有关，通过观察一个人的眉相，可以知道一个人的寿命长短和心性如何，面相中认为眉毛长垂，高寿无疑，就",
                       }
                ]},
            ]
        }
    },
    methods : {
        ...mapMutations('xiangshu',['updateNavIndex'])
    }
}
</script>
<style lang="less" scoped>
.wrap{
    .content-wrap{
        position: absolute;
        top: 285/75rem;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: auto;
        .nav{
            width: 100%;
            position: fixed;
            top: 169/75rem;
            left: 0;
            background: #fff;
            z-index: 100;
        }
        .swiper-container{
            width: 100%;
            box-sizing: content-box;
            /deep/ .nav .nav-list{
                .flex-between();
                width: 94%;
                margin: 0 auto;
            }
            /deep/ .nav .nav-list .item{
                height:85/75rem;
            }
            .hItem{
                width: 98%;
                margin:  0 auto;
                .flex-start-only();
                margin-bottom: 32/75rem;
                & > img{
                    width: 258/75rem;
                    height: 198/75rem;
                }
                .right{
                    margin-left: 20/75rem;
                    & > h2{
                        width: 400/75rem;
                        height: 40/75rem;
                        margin-top: 10/75rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 28/75rem;
                    }
                    & > p{
                        width: 400/75rem;
                        height: 120/75rem;
                        margin-top: 17/75rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        font-size: 26/75rem;
                        line-height: 40/75rem;
                    }
                }
            }
        }
    }
}
</style>


