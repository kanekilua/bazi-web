<template>
    <div class="wrap">
        <v-header></v-header>
        <v-title-header>风水常识</v-title-header>
        <div class="content-wrap">
            <div class="content-box">
                <div class="content">
                    <div class="btn-row">
                        <button class="fengshui-btn select-btn" @click="$jump('/jiaju')">家居风水</button>
                        <button class="fengshui-btn">办公风水</button>
                        <button class="fengshui-btn">感情风水</button>
                    </div>
                    <div class="btn-row">
                        <button class="fengshui-btn">房屋风水</button>
                        <button class="fengshui-btn">招财风水</button>
                    </div>
                    <div class="btn-row">
                        <button class="fengshui-btn">风水摆设</button>
                        <button class="fengshui-btn">商业风水</button>
                        <button class="fengshui-btn">风水大师</button>
                    </div>
                </div>
            </div>
            <div class="swiper-container">
                <div class="swiper-top">
                    <v-nav :navList="navList" :nowIndex="navIndex" @updateNavIndex="updateNavIndex"></v-nav>
                    <div class="right"></div>
                </div>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(outItem,outIndex) in list" :key="outIndex">
                        <div class="hItem" v-for="(innerItem,innerIndex) in outItem.val" :key="innerIndex">
                            <h2>{{innerItem}}</h2><i></i>
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
        ...mapState('peach',['navIndex']),
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
            navList: ["家居风水","住宅风水","商业风水","文化风水",],
            swiperOption : { initialSlide: this.navIndex },
            list : [
                {
                    val:[
                        "风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"
                ]},
                {
                    val:[
                        "风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"
                ]},
                {
                    val:[
                        "风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"
                ]},
                {
                    val:[
                        "风水三见三不见，应该知","客厅财位摆放什么招财","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何","卧室风水大学问论床如何"
                ]},
            ]
        }
    },
     methods : {
        ...mapMutations('peach',['updateNavIndex'])
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
    padding: 40/75rem;
    .border-box();
    .content-box{
        width: 670/75rem;
        height: 507/75rem;
        margin: 0 auto;
        .content{
            width: 80%;
            margin-bottom: 80/75rem;
        }
        .flex-center();
        background: url('../assets/image/fengshui/fengshui@2x.png') no-repeat center center / 100% 100%;
        .btn-row{
            margin-top: 80/75rem;
            .flex-between();
            .fengshui-btn{
                width: 120/75rem;
                height: 50/75rem;
                font-size: 26/75rem;
                border-radius: 13/75rem;
                background: #fff;
                border: none;
                box-shadow: 0 3/75rem 6/75rem rgba(0,0,0,0.16);
                outline: none;
                &:active{
                    background: #eee;
                }
                @media screen  and (max-width: 320px) {
                    width: 130/75rem;
                    font-size: 20/75rem;
                }
            }
            .select-btn{
                background: @baseColor;
                color: #fff;
            }
        }
    }
    .swiper-container{
        width: 670/75rem;
        margin: 0 auto;
        /deep/ .nav .nav-list{
            .flex-between();
        }
        /deep/ .nav .nav-list .item{
            height:85/75rem;
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


